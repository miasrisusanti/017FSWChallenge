const { NotFoundError } = require("../app/errors");
const ApplicationController = require("../app/controllers/ApplicationController");

describe('ApplicationController', () => {
  let controller;

  beforeEach(() => {
    controller = new ApplicationController();
  });

  it('should handle GET request to root', () => {
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    controller.handleGetRoot(req, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      status: "OK",
      message: "BCR API is up and running!",
    });
  });

  it('should handle not found request', () => {
    const req = {
      method: 'GET',
      url: '/nonexistent',
    };
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    controller.handleNotFound(req, res);

    expect(res.status).toHaveBeenCalledWith(404);
    expect(res.json).toHaveBeenCalledWith({
      error: {
        name: 'Error',
        message: 'Not found!',
        details: {
          method: 'GET',
          url: '/nonexistent',
        },
      },
    });
  });

  it('should handle general error', () => {
    const err = new Error('Some error message');
    const req = {};
    const res = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next = jest.fn();

    controller.handleError(err, req, res, next);

    expect(res.status).toHaveBeenCalledWith(500);
    expect(res.json).toHaveBeenCalledWith({
      error: {
        name: 'Error',
        message: 'Some error message',
        details: null,
      },
    });
  });

  it('should get offset from request', () => {
    const req = {
      query: {
        page: 2,
        pageSize: 10,
      },
    };

    const offset = controller.getOffsetFromRequest(req);

    expect(offset).toBe(10);
  });

  it('should build pagination object', () => {
    const req = {
      query: {
        page: 2,
        pageSize: 10,
      },
    };
    const count = 25;

    const paginationObject = controller.buildPaginationObject(req, count);

    expect(paginationObject).toEqual({
      page: 2,
      pageCount: 3,
      pageSize: 10,
      count: 25,
    });
  });
});
