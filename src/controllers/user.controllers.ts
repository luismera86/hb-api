import { Request, Response } from "express";

export const getUsers = async (req: Request, resp: Response) => {
  
  resp.json({ msg: 'Hola'})
  
}