export type AppStateType = {
  checkLocalStorage: boolean;
  isAuthenticated: boolean;
  user: UserType | null;
};

export type UserType = {
  id: string;
  name: string;
  email: string;
  role: string;
};
