import { Request, Response } from "express";
import { UserService } from "../services/UserService";

export class UserController {
  userService: UserService

  constructor(userService = new UserService){
    this.userService = userService
  }

  createUser = (request: Request, response: Response) => {
    const userService = new UserService();
    const user = request.body;

    if(!user.name || !user.email){
        return response.status(400).json({message: 'Bad request! Preencha todos os campos'})
    }

    this.userService.createUser(user.name, user.email)

    return response.status(201).json({ message: "Usuario criado" });


  };
  
  getAllUsers = (request: Request, response: Response) =>{
    
    
    const users = this.userService.getAllUsers()
    return response.status(200).json(users)
  }

  deleteUser = (request: Request, response: Response) =>{
    const user = request.body
    this.userService.deleteUser(user.name)
    return response.status(201).json({ message: "Usuario deletado" });
  }
}
