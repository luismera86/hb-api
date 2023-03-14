import { Request, Response } from 'express';
import { createUser, deleteUser, findAllUsers, findOneUser, updateUser } from '../services';

import { User } from '../interfaces';

export async function getUsers(req: Request, resp: Response): Promise<void> {
    try {
      console.log('aqui')
      const users: User[] = await findAllUsers();
      resp.json({
        resp: true,
        users,
      });
    } catch (error) {
      console.log(error);
      resp.status(500);
    }
  }

   export async function getUserByDni(req: Request, resp: Response): Promise<void> {
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
  }

   export async function postUser(req: Request, resp: Response): Promise<void> {
    const body = req.body;
    try {
      const user = await createUser(body);
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
  }

   export async function putUser(req: Request, resp: Response): Promise<void> {
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
  }

   export async function deleteUserByDni(req: Request, resp: Response): Promise<void> {
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
  }

