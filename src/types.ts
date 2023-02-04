interface ITokenModel {
  user: IUser<string>;
  refreshToken: string;
}

interface ITokens {
  accessToken: string;
  refreshToken: string;
}

interface IActivation {
  activationLink: string;
  isActivated: boolean;
}

type IUserModel = Exclude<IUser<string>, 'id'> & IActivation;

interface IComment {
  userId: string;
  postId: number;
  id: number;
  description: string;
  createdAt: string;
  likes: number;
}

interface IPost<TypeOfUserId> {
  userId: TypeOfUserId;
  id: number;
  description: string;
  createdAt: string;
  likes: number;
  commentsIds?: number[];
}

interface IUser<TypeOfId> {
  id?: TypeOfId;
  email: string;
  name: string;
  password: string;
  hidden: boolean;
  createdAt: string;
  country: string;
  birthDate: string;
  alias?: string;
  avatarURL?: string;
  postsIds?: number[];
  friendsIds?: number[];
}

export {
  ITokens as Tokens,
  IUserModel as UserModel,
  ITokenModel as TokenModel,
  IComment as Comment,
  IPost as Post,
  IUser as User,
};
