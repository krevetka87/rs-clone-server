import { Schema, model } from 'mongoose';
import { UserSchema } from './types';

const userSchema = new Schema<UserSchema>({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  hidden: {
    type: Boolean,
    default: false,
    required: true,
  },
  createdAt: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    default: '',
  },
  country: {
    type: String,
    default: '',
  },
  birthDate: {
    type: String,
    default: '',
  },
  alias: {
    type: String,
    unique: true,
  },
  avatarURL: {
    type: String,
    default: '',
  },
  postsIds: [
    {
      type: Number,
    },
  ],
  friendsIds: [
    {
      type: Number,
    },
  ],
  activationLink: {
    type: String,
    required: true,
  },
  isActivated: {
    type: Boolean,
    default: false,
  },
});

const userModel = model('User', userSchema);

export { userModel };
