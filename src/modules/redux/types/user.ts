export interface IUserSlice {
  email: string | null;
  token: string | null;
  id: string | null;
  isAuth: boolean;
  isLoading: boolean;
  name?: string;
}
