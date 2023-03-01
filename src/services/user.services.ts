import { Request, Response } from "express";

import { UserSchema } from "../models";

export const getUsersDb = async () => {
  
  try {

    const users = await UserSchema.find()
    return users
    
  } catch (error: any) {
    throw new error 
  }
  
}