import { Request, Response } from 'express';
import { createUser, deleteUser, findAllUsers, findOneUser, updateUser } from '../services';

import { User } from '../interfaces';

export const getUsers = async (req: Request, resp: Response): Promise<void> => {
  try {
    const users: User[] = await findAllUsers();
    resp.json({
      resp: true,
      users,
    });
  } catch (error) {
    console.log(error);
    resp.status(500);
  }
};

export const getUserByDni = async (req: Request, resp: Response): Promise<void> => {
  const dni = req.params;
  try {
    const user = await findOneUser(Number(dni));
    if (!user) {
      resp.json(400).json({ status: false, msg: 'Cant not find user' });
      return;
    }

    resp.status(200).json({
      status: true,
      user,
    });
  } catch (error) {
    console.log(500);
    resp.status(500);
  }
};

export const postUser = async (req: Request, resp: Response): Promise<void> => {
  const body = req.body;
  console.log(body);
  try {
    const user = await createUser(body);
    console.log(user);
    if (!user) {
      resp.json(400).json({ status: false, msg: 'Cant not find user' });
      return;
    }

    resp.status(200).json({
      status: true,
      user,
    });
  } catch (error) {
    console.log(error);
    resp.status(500);
  }
};

export const putUser = async (req: Request, resp: Response): Promise<void> => {
  const body = req.body;
  try {
    const user = await updateUser(body);
    if (!user) {
      resp.json(400).json({ status: false, msg: 'Cant not find user' });
      return;
    }

    resp.status(200).json({
      status: true,
      user,
    });
  } catch (error) {
    console.log(500);
    resp.status(500);
  }
};

export const deleteUserByDni = async (req: Request, resp: Response): Promise<void> => {
  const dni = req.params;
  try {
    const user = await deleteUser(Number(dni));
    if (!user) {
      resp.json(400).json({ status: false, msg: 'Cant not find user' });
      return;
    }

    resp.status(200).json({
      status: true,
      user,
    });
  } catch (error) {
    console.log(500);
    resp.status(500);
  }
};
