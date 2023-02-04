import { Schema, model } from 'mongoose';

const UserSchema = new Schema({
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
  },
  country: {
    type: String,
  },
  birthDate: {
    type: String,
  },
  alias: {
    type: String,
    unique: true,
  },
  avatarURL: {
    type: String,
  },
  postIds: [
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

const userModel = model('User', UserSchema);

export { userModel };
