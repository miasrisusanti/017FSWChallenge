const AuthenticationController = require('../app/controllers/AuthenticationController');
const {
  EmailNotRegisteredError,
  InsufficientAccessError,
  RecordNotFoundError,
  WrongPasswordError,
  EmailAlreadyTakenError
} = require('../app/errors');

// Mocks
const mockUserModel = {
  findOne: jest.fn(),
  create: jest.fn(),
  findByPk: jest.fn(),
};

const mockRoleModel = {
  findOne: jest.fn(),
  findByPk: jest.fn()
};

const mockBcrypt = {
  hashSync: jest.fn(),
  compareSync: jest.fn(),
};

const mockJwt = {
  sign: jest.fn(),
  verify: jest.fn(),
};

const mockRequest = {
  body: {},
  headers: {
    authorization: 'Bearer mockToken',
  },
};

const mockResponse = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

const mockController = new AuthenticationController({
  userModel: mockUserModel,
  roleModel: mockRoleModel,
  bcrypt: mockBcrypt,
  jwt: mockJwt,
});

describe('AuthenticationController', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  
  describe('authorize', () => {
    it('should authorize the request with a valid token and role', () => {
      const mockPayload = {
        role: { 
          name: 'CUSTOMER' 
        },
      };
      
      mockController.decodeToken = jest.fn().mockReturnValue(mockPayload);
      const mockNext = jest.fn();
      mockController.authorize('CUSTOMER')(mockRequest, mockResponse, mockNext);
      expect(mockRequest.user).toEqual(mockPayload);
      expect(mockNext).toHaveBeenCalled();
    });
    
    it('should handle InsufficientAccessError if the role is invalid', () => {
      const mockPayload = {
        role: { 
          name: 'ADMIN' 
        },
      };

      mockController.decodeToken = jest.fn().mockReturnValue(mockPayload);
      const mockNext = jest.fn();     
      mockController.authorize('CUSTOMER')(mockRequest, mockResponse, mockNext);      
      expect(mockResponse.status).toHaveBeenCalledWith(401);
      expect(mockResponse.json).toHaveBeenCalledWith({
        error: {
          name: 'Error',
          message: 'Access forbidden!',
          details: {
            reason: `${mockPayload.role.name} is not allowed to perform this operation.`,
            role: mockPayload.role.name,
          },
        },
      });
      expect(mockNext).not.toHaveBeenCalled();
    });
  })
  
  describe('handleLogin', () => {
    it('should handle login with valid credentials', async () => {
      const mockUser = {
        id: 1,
        name: 'Mia',
        email: 'amigdalae@mail.com',
        encryptedPassword: 'hashedPassword',
        Role: {
          id: 2,
          name: 'CUSTOMER',
        },
      };
      
      mockController.createTokenFromUser = jest.fn();
      mockUserModel.findOne.mockResolvedValue(mockUser);
      mockBcrypt.compareSync.mockReturnValue(true);
      mockController.createTokenFromUser.mockReturnValue('mockAccessToken');
      const mockNext = jest.fn();
      await mockController.handleLogin(
        { body: { email: 'amigdalae@mail.com', password: 'password' } },
        mockResponse,
        mockNext
        );
        
        expect(mockUserModel.findOne).toHaveBeenCalledWith({
          where: { email: 'amigdalae@mail.com' },
          include: [{ model: mockRoleModel, attributes: ['id', 'name'] }],
        });
        expect(mockBcrypt.compareSync).toHaveBeenCalledWith('password', 'hashedPassword');
        expect(mockController.createTokenFromUser).toHaveBeenCalledWith(mockUser, mockUser.Role);
        expect(mockResponse.status).toHaveBeenCalledWith(201);
        expect(mockResponse.json).toHaveBeenCalledWith({ accessToken: 'mockAccessToken' });
        expect(mockNext).not.toHaveBeenCalled();
    });
      
    it('should handle EmailNotRegisteredError if the email is not registered', async () => {
      mockUserModel.findOne.mockResolvedValue(null);
      const mockNext = jest.fn();
      await mockController.handleLogin(
        { body: { email: 'amigdalae@mail.com', password: 'password' } },
        mockResponse,
        mockNext
        );
          
        expect(mockUserModel.findOne).toHaveBeenCalledWith({
          where: { email: 'amigdalae@mail.com' },
          include: [{ model: mockRoleModel, attributes: ['id', 'name'] }],
          });
          expect(mockResponse.status).toHaveBeenCalledWith(404);
          expect(mockResponse.json).toHaveBeenCalledWith(
            expect.objectContaining({
              name: 'Error',
              message: 'amigdalae@mail.com is not registered!',
            }));
          expect(mockNext).not.toHaveBeenCalled();
      });
          
    it('should handle WrongPasswordError if the password is incorrect', async () => {
      const mockUser = {
        id: 1,
        name: 'Mia',
        email: 'amigdalae@mail.com',
        encryptedPassword: 'hashedPassword',
        Role: { id: 2, name: 'CUSTOMER' },
      };
            
      mockUserModel.findOne.mockResolvedValue(mockUser);
      mockBcrypt.compareSync.mockReturnValue(false);
      const mockNext = jest.fn();
      await mockController.handleLogin({ 
        body: { email: 'amigdalae@mail.com', password: 'incorrectPassword' }
      }, mockResponse, mockNext );
              
      expect(mockUserModel.findOne).toHaveBeenCalledWith({
        where: { email: 'amigdalae@mail.com' },
        include: [{ model: mockRoleModel, attributes: ['id', 'name'] }],
      });
      expect(mockBcrypt.compareSync).toHaveBeenCalledWith('incorrectPassword', 'hashedPassword');
      expect(mockResponse.status).toHaveBeenCalledWith(401);
      expect(mockResponse.json).toHaveBeenCalledWith(
        expect.objectContaining({
          name: 'Error',
          message: 'Password is not correct!',
        }));
      expect(mockNext).not.toHaveBeenCalled();
      });
  });
            
  describe('handleRegister', () => {
    it('should handle user registration with valid input', async () => {
      const mockRole = { 
        id: 2,
        name: 'CUSTOMER' 
      };
      
      mockRoleModel.findOne.mockResolvedValue(mockRole);
      mockUserModel.findOne.mockResolvedValue(null);
      const hashedPassword = mockController.encryptPassword('password');
      mockUserModel.create.mockResolvedValue({
        id: 1,
        name: 'Mia',
        email: 'amigdalae@mail.com',
        encryptedPassword: hashedPassword,
        roleId: 2,
      });
                
      mockController.createTokenFromUser.mockReturnValue('mockAccessToken');
      
      const mockNext = jest.fn();
      
      await mockController.handleRegister(
        { body: { name: 'Mia', email: 'amigdalae@mail.com', password: 'password' } },
        mockResponse,
        mockNext
        );
        
        expect(mockRoleModel.findOne).toHaveBeenCalledWith({
          where: { name: mockController.accessControl.CUSTOMER },
        });
        expect(mockUserModel.findOne).toHaveBeenCalledWith({
          where: { email: 'amigdalae@mail.com' },
        });
        expect(mockUserModel.create).toHaveBeenCalledWith({
          name: 'Mia',
          email: 'amigdalae@mail.com',
          encryptedPassword: hashedPassword,
          roleId: 2,
        });
        expect(mockController.createTokenFromUser).toHaveBeenCalledWith(
          {
            id: 1,
            name: 'Mia',
            email: 'amigdalae@mail.com',
            encryptedPassword: hashedPassword,
            roleId: 2,
          },
          mockRole
          );
          expect(mockResponse.status).toHaveBeenCalledWith(201);
          expect(mockResponse.json).toHaveBeenCalledWith({ accessToken: 'mockAccessToken' });
          expect(mockNext).not.toHaveBeenCalled();
    });
        
    it('should handle EmailAlreadyTakenError if the email is already registered', async () => {
      const existingUser = {
        id: 1,
        name: 'Existing User',
        email: 'amigdalae@mail.com',
        encryptedPassword: 'hashedPassword',
        roleId: 2,
      };
      
      mockUserModel.findOne.mockReturnValueOnce(Promise.resolve(existingUser));
      
      const mockNext = jest.fn();
      
      await mockController.handleRegister(
        { body: { name: 'Mia', email: 'amigdalae@mail.com', password: 'password' } },
        mockResponse,
        mockNext
        );
        
        expect(mockUserModel.findOne).toHaveBeenCalledWith({
          where: { email: 'amigdalae@mail.com' },
        });
        expect(mockResponse.status).toHaveBeenCalledWith(422);
        expect(mockResponse.json).toHaveBeenCalledWith(
          expect.objectContaining({
            name: 'Error',
            message: 'amigdalae@mail.com is already taken!',
          })
          );
          expect(mockNext).not.toHaveBeenCalled();
        });    
      });
      
      describe('handleGetUser', () => {
        it('should handle getting user details with a valid user ID', async () => {
          const mockUser = {
            id: 1,
            name: 'Mia',
            email: 'amigdalae@mail.com',
            roleId: 2,
          };
          
          const mockRole = {
            id: 2,
            name: 'CUSTOMER',
          };
          
          mockUserModel.findByPk.mockResolvedValue(mockUser);
          mockRoleModel.findByPk.mockResolvedValue(mockRole);
          
          const mockNext = jest.fn();
          
          await mockController.handleGetUser(
            { user: { id: 1 } },
            mockResponse
            );
            
            expect(mockUserModel.findByPk).toHaveBeenCalledWith(1);
            expect(mockRoleModel.findByPk).toHaveBeenCalledWith(2);
            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith(mockUser);
          }
        )
      }
    )
  }
)