import { Router } from 'express';
import { getUsers } from '../controllers/user.controllers';

export const userRoutes = Router()

userRoutes.get('/', getUsers)