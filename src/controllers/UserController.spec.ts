import { UserService } from "../services/UserService";
import { UserController } from "./UserController";
import { Params } from "express-serve-static-core";
import { Request, Response } from "express";
import { makeMockRequest } from "../__mocks__/mockRequest.mock";
import { makeMockResponse } from "../__mocks__/mockResponse.mock";

describe("UserController", () => {
  const mockUserService: Partial<UserService> = {
    createUser: jest.fn(),
    getAllUsers: jest.fn(),
    deleteUser: jest.fn(),
  };
  
  const userController = new UserController(mockUserService as UserService);

  const getAllUsersSpy = jest.spyOn(userController, 'getAllUsers');
  it("Deve adicionar um novo usuario", () => {
    const mockRequest = {
      body: {
        name: "Leo",
        email: "Leo@teste.com",
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({
      message: "Usuario criado",
    });
  });
  it("Deve exibit erro ao tentar criar uma conta sem email ou nome", () => {
    const mockRequest = {
      body: {
        
        
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.createUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(400);
    expect(mockResponse.state.json).toMatchObject({message: 'Bad request! Preencha todos os campos'});
  });
  it("Deve excluir um usuario do db", () => {
    const mockRequest = {
      body: {
        name: "Leo",
        email: "Leo@teste.com",
      },
    } as Request;
    const mockResponse = makeMockResponse();
    userController.deleteUser(mockRequest, mockResponse);
    expect(mockResponse.state.status).toBe(201);
    expect(mockResponse.state.json).toMatchObject({
      message: "Usuario deletado",
    });
  });
  

it("Deve verificar se a função getAllUsers está sendo chamada", () => {
  const mockRequest = {
    body: {
      name: "Leo",
      email: "Leo@teste.com",
    },
  } as Request;
  const mockResponse = makeMockResponse();
  userController.getAllUsers(mockRequest, mockResponse);
  expect(getAllUsersSpy).toHaveBeenCalled();
  });
  
});
