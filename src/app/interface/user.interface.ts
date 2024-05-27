export interface UserResponse {
  users: User[];
}

export interface User {
  id:    number;
  name:  string;
  email: string;
}
