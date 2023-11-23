const dayjs = require("dayjs");
const CarController = require("../app/controllers/CarController");

describe("CarController", () => {
  let carController;
  
  beforeEach(() => {
    const carModelMock = {
      findAll: jest.fn(),
      count: jest.fn(),
      findByPk: jest.fn(),
      create: jest.fn(),
      update: jest.fn(),
      destroy: jest.fn(),
    };
    
    const userCarModelMock = {
      findOne: jest.fn(),
      create: jest.fn(),
    };
    
    carController = new CarController({
      carModel: carModelMock,
      userCarModel: userCarModelMock,
      dayjs,
    });
  });
  
  describe("handleListCars", () => {
    it("should handle listing cars", async () => {
      const req = {
        query: { pageSize: 10 },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      
      carController.carModel.findAll.mockResolvedValue([]);
      carController.carModel.count.mockResolvedValue(0);
      await carController.handleListCars(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({
        cars: [],
        meta: { pagination: expect.any(Object) },
      });
    });
  });
  
  describe("handleGetCar", () => {
    it("should handle getting a car", async () => {
      const req = { params: { id: 1 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      
      carController.carModel.findByPk.mockResolvedValue({ id: 1, name: "Test Car" });
      await carController.handleGetCar(req, res);
      expect(res.status).toHaveBeenCalledWith(200);
      expect(res.json).toHaveBeenCalledWith({ id: 1, name: "Test Car" });
    });
  });
  
  describe("handleCreateCar", () => {
    it("should handle creating a car", async () => {
      const req = {
        body: {
          name: "New Car",
          price: 10000,
          size: "Medium",
          image: "car.jpg",
        },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      
      carController.carModel.create.mockResolvedValue({
        id: 1,
        name: "New Car",
        price: 10000,
        size: "Medium",
        image: "car.jpg",
      });
      
      await carController.handleCreateCar(req, res);
      
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({
        id: 1,
        name: "New Car",
        price: 10000,
        size: "Medium",
        image: "car.jpg",
      });
    });
  });
  
  describe("handleRentCar", () => {
    it("should handle renting a car", async () => {
      const req = {
        body: {
          rentStartedAt: "2023-01-01",
          rentEndedAt: "2023-01-02",
        },
        user: { id: 1 },
      };
      const res = {
        status: jest.fn().mockReturnThis(),
        json: jest.fn(),
      };
      const next = jest.fn();
      
      carController.dayjs = jest.fn(date => dayjs(date));
      carController.getCarFromRequest = jest.fn().mockResolvedValue({ id: 1 });
      carController.userCarModel.findOne.mockResolvedValue(null);
      carController.userCarModel.create.mockResolvedValue({ id: 1 });
      await carController.handleRentCar(req, res, next);
      expect(res.status).toHaveBeenCalledWith(201);
      expect(res.json).toHaveBeenCalledWith({ id: 1 });
    });
  });
  
  describe("handleDeleteCar", () => {
    it("should handle deleting a car", async () => {
      const req = { params: { id: 1 } };
      const res = {
        status: jest.fn().mockReturnThis(),
        end: jest.fn(),
      };
      
      carController.carModel.destroy.mockResolvedValue(1);
      await carController.handleDeleteCar(req, res);
      expect(res.status).toHaveBeenCalledWith(204);
      expect(res.end).toHaveBeenCalled();
    });
  });
});
