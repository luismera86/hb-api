import { deleteUserByDni, getUserByDni, getUsers, postUser, putUser } from "../controllers";

import { Router } from "express";

export const userRoutes = Router()

userRoutes.get('/', getUsers)
userRoutes.get('/:dni', getUserByDni)
userRoutes.post('/', postUser)
userRoutes.put('/', putUser)
userRoutes.delete('/:dni', deleteUserByDni)