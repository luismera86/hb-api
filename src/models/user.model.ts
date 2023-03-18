import { Schema, model } from 'mongoose';

import { User } from '../interfaces';

const userSchema = new Schema<User>({
  alias: {
    type: String,
  },
  cbu: {
    type: String,
    unique: true,
  },
  email: {
    type: String,
    unique: true,
  },
  isLogin: {
    type: Boolean,
  },
  lastName: {
    type: String,
  },
  name: {
    type: String,
  },
  passwords: {
    type: String,
  },
  redWards: {
    type: Number,
  },
  dni: {
    type: Number,
  },
  address: {
    type: String,
  },
  phone: {
    type: Number,
  },
  amount: {
    type: Number,
  },
  
});

export const UserSchema = model('User', userSchema)

