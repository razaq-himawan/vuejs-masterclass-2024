export interface LoginForm {
  email: string
  password: string
}

export interface RegisterForm extends LoginForm {
  confirmPassword: string
  username: string
  firstname: string
  lastname: string
}
