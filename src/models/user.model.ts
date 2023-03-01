import { Schema, model } from 'mongoose';

import { User } from '../interfaces';

const userSchema = new Schema<User>({
  alias: {
    type: String,
  },
  cbu: {
    type: Number,
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
});

export const UserSchema = model('User', userSchema)

