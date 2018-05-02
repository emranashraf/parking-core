import { Injectable } from '@angular/core';
import { of } from 'rxjs/observable/of';
import { _throw } from 'rxjs/observable/throw';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Company } from 'models/company';

@Injectable()
export class CompanyService {

  constructor(private http: HttpClient) {}

  save(company: Company): Observable<any> {
    return this.http.post<any>(`http://localhost:4000/api/company`, company);
  }
}
