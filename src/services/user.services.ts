import { User } from '../interfaces';
import { UserSchema } from '../models';

export async function findAllUsers(): Promise<User[]> {
  const users = await UserSchema.find();
   
  return users;
}

export async function findOneUser(dni: number): Promise<User | null> {
  return await UserSchema.findOne({ dni });
}

export async function createUser(user: User): Promise<User | null> {
  return await UserSchema.create(user);
}

export async function updateUser(user: User): Promise<User | null> {
  return await UserSchema.findOneAndUpdate({ dni: user.dni }, { user });
}

export async function deleteUser(dni: number): Promise<User | null> {
  return await UserSchema.findOneAndDelete({ dni });
}
