import { User } from "./user.entity";
export abstract class UserRepository {
  abstract findByEmail(email: string): Promise<User | null>;
  abstract findByPhone(phone: string): Promise<User | null>;
  abstract findById(id: string): Promise<User | null>;
  abstract findAll(): Promise<User[] | []>;

  //actions
  abstract save(user: User): Promise<User>;
  abstract updateUser(id: string): Promise<User>;
}
