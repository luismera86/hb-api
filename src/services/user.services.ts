import { User } from '../interfaces';
import { UserSchema } from '../models';

export class UserServices {
  public async findAllUsers(): Promise<User[]> {
    return await UserSchema.find();
  }

  public async findOneUser(dni: number): Promise<User | null> {
    return await UserSchema.findOne({ dni });
  }

  public async createUser(user: User): Promise<User | null> {
    return await UserSchema.create(user);
  }

  public async updateUser(user: User): Promise<User | null> {
    return await UserSchema.findOneAndUpdate({ dni: user.dni }, { user });
  }

  public async deleteUser(dni: number): Promise<User | null> {
    return await UserSchema.findOneAndDelete({ dni });
  }
}
