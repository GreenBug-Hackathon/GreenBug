export interface AuthState {
  user: User;
  loggedIn: boolean;
  loading: boolean;
}

export interface User {
  _id: string;
  access_token: string;
  email: string;
  name: string;
  status: string;
}
