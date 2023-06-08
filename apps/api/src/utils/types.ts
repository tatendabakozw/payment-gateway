export interface IUser {
  email: string;
  password?: string;
  fullName?: string;
  agreed?: boolean;
  phone: string;
  photoURL: string;
  blocked: string
}
export interface ILoggedUser {
  email?: string;
  _id?: string;
  role?: string;
  emailVerified?: boolean;
  photoURL?: string;
  iat?: number;
}
