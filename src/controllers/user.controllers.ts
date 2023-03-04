import { Request, Response } from 'express';

import { User } from '../interfaces';
import { UserServices } from '../services/user.services';

export class UserController {
  private userServices = new UserServices();

  public async getUsers(req: Request, resp: Response): Promise<void> {
    try {
      const users: User[] = await this.userServices.findAllUsers();
      resp.json({
        resp: true,
        users,
      });
    } catch (error) {
      console.log(error);
      resp.status(500);
    }
  }

  public async getUserByDni(req: Request, resp: Response): Promise<void> {
    const dni = req.params;
    try {
      const user = await this.userServices.findOneUser(Number(dni));
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

  public async postUser(req: Request, resp: Response): Promise<void> {
    const body = req.body;
    try {
      const user = await this.userServices.createUser(body);
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

  public async putUser(req: Request, resp: Response): Promise<void> {
    const body = req.body;
    try {
      const user = await this.userServices.updateUser(body);
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

  public async deleteUser(req: Request, resp: Response): Promise<void> {
    const dni = req.params;
    try {
      const user = await this.userServices.deleteUser(Number(dni));
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
}
