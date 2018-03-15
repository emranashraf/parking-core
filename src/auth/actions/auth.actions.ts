import { Action } from '@ngrx/store';
import { Authenticate, User } from '../../models/user';

export enum AuthActionTypes {
  Login = '[Auth] Login',
  Logout = '[Auth] Logout',
  LoginSuccess = '[Auth] Login Success',
  LoginFailure = '[Auth] Login Failure',
  LoginRedirect = '[Auth] Login Redirect',
}

export class LoginAction implements Action {
  readonly type = AuthActionTypes.Login;

  constructor(public payload: Authenticate) { }
}

export class LoginSuccessAction implements Action {
  readonly type = AuthActionTypes.LoginSuccess;

  constructor(public payload: { user: User }) {}
}

export class LoginFailureAction implements Action {
  readonly type = AuthActionTypes.LoginFailure;

  constructor(public payload: any) {}
}

export class LoginRedirectAction implements Action {
  readonly type = AuthActionTypes.LoginRedirect;
}

export class LogoutAction implements Action {
  readonly type = AuthActionTypes.Logout;
}

export type AuthActions =
  | LoginAction
  | LoginSuccessAction
  | LoginFailureAction
  | LoginRedirectAction
  | LogoutAction;
