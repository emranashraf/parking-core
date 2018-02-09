import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { LoginAction, LoginSuccessAction, LoginFailureAction, AuthActionTypes } from '../actions/auth.actions';
import { Authenticate, User } from '../../models/user';
import { AuthService } from '../services/auth.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class AuthEffects {

  @Effect() login$ = this.actions$
    .ofType(AuthActionTypes.Login)
    .map(toPayload)
    .switchMap(payload => this.authService.login(payload)
      .map(data => new LoginSuccessAction({ user: data }))
      .catch(() => Observable.of({ type: AuthActionTypes.LoginFailure }))
    );

  constructor(
    private authService: AuthService,
    private actions$: Actions
  ) {
  }

  // tslint:disable-next-line:member-ordering
  // @Effect() authActions$ = this.actions$.pipe(
  //   ofType(AuthActionTypes.Login),
  //   tap(action => console.log(action))
  // );

  // tslint:disable-next-line:member-ordering
  // @Effect()
  // login$ = this.actions$.pipe(
  //   ofType(AuthActionTypes.Login),
  //   map((action: Login) => action.payload),
  //   exhaustMap((auth: Authenticate) =>
  //     this.authService
  //       .login(auth)
  //       .pipe(
  //         map(user => new LoginSuccess({ user })),
  //         catchError(error => of(new LoginFailure(error)))
  //       )
  //   )
  // );
}
