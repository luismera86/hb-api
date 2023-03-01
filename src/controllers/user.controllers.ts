import { Request, Response } from "express";

import { getUsersDb } from "../services";

export const getUsers = async (req: Request, resp: Response) => {
  try {

    const users = getUsersDb()

    resp.json(users)
    
  } catch (error) {
    console.log(error)
  }
  
}