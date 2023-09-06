export interface User {
  name: string;
  email: string;
}
const db = [
  {
    name: "Joana",
    email: "joana@dio.com",
  },
];
export class UserService {
  db: User[];

  constructor(database = db) {
    this.db = database;
  }

  createUser = (name: string, email: string) => {
    const user = {
      name,
      email,
    };
    this.db.push(user);
    console.log("DB Atualizado", this.db);
  };

  getAllUsers = () => {
    return this.db;
  };

  deleteUser = (name: string) => {
    
    this.db = this.db.filter((user) => user.name !== name);
  
    if (this.db.length < this.db.length + 1) {
      console.log("Usuário excluído, DB atualizado:", this.db);
    } else {
      console.log("Usuário não encontrado no DB");
    }
  };
  
}
