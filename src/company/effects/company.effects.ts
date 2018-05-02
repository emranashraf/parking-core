import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Effect, Actions, toPayload } from '@ngrx/effects';
import { CompanyActionTypes, SaveCompanyAction } from '../actions/company.actions';
import { CompanyService  }  from '../services/company.service';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';

@Injectable()
export class CompanyEffects {

    @Effect() saveCompany$ = this.actions$
        .ofType(CompanyActionTypes.SaveCompany)
        .map(toPayload)
        .switchMap(payload => this.companyService.save(payload)
            .map((data) => new SaveCompanyAction(data))
            .catch(() => Observable.of({ type: CompanyActionTypes.SaveCompanyFailure }))
        );

    constructor(
        private companyService: CompanyService,
        private actions$: Actions
    ) {
    }

}
