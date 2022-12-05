export interface RegisterModel {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  admin: boolean;
}

export interface LoginModel {
  email: string;
  password: string;
}
