import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User, Authenticate } from '../../models/user';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  login({ email, password }: Authenticate): Observable<any> {
    // /**
    //  * Simulate a failed login to display the error
    //  * message for the login form.
    //  */
    // if (username !== 'test') {
    //   return _throw('Invalid username or password');
    // }

    // return of({ name: 'User' });

    const user = {
      email,
      password
    };

    return this.http.post<any>(`http://localhost:4000/api/user/login`, user);
  }

  logout() {
    return of(true);
  }
}
