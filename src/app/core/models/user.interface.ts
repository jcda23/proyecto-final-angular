export interface Roles {
  admin?: boolean;
  editor?: boolean;
}

export interface ProfileUser {
  uid: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  displayName?: string;
  phone?: string;
  address?: string;
  photoURL?: string;
  admin?: boolean;
  editor?: boolean;
}
