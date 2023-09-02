import { User, UserService } from "./UserService";

describe("UserService", () => {
    const mockDb: User[] = []
  const userService = new UserService(mockDb);

  it("Deve adicionar um novo usuario", () => {
    const mockConsole = jest.spyOn(global.console, "log");
    userService.createUser("Leonardo", "Leonardo@dio.com");
    expect(mockConsole).toHaveBeenCalledWith('DB Atualizado', mockDb);
  });

  
});
