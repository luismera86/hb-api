import { User } from '../interfaces';
import { UserSchema } from '../models';

export const findAllUsers = async (): Promise<User[]> => {
  const users = await UserSchema.find();

  return users;
};

export const findOneUser = async (dni: number): Promise<User | null> => {
  return await UserSchema.findOne({ dni });
};

export const createUser = async (user: User): Promise<User | null> => {
  const newUser = await UserSchema.create(user);
  return newUser;
};

export const updateUser = async (user: User): Promise<User | null> => {
  return await UserSchema.findOneAndUpdate({ dni: user.dni }, { user });
};

export const deleteUser = async (dni: number): Promise<User | null> => {
  return await UserSchema.findOneAndDelete({ dni });
};
