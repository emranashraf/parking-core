import { Action } from '@ngrx/store';
import { Company } from '../../models/company';

export enum CompanyActionTypes {
    SaveCompany = 'Save Company',
    SaveCompanyFailure = 'Save Company Failure'
}

export class SaveCompanyAction implements Action {
    readonly type = CompanyActionTypes.SaveCompany;

    constructor(public payload: Company) { }
}

export class SaveCompanyFailureAction implements Action {
    readonly type = CompanyActionTypes.SaveCompanyFailure;

    constructor(public payload: any) {}
}

export type CompanyActions =
    | SaveCompanyAction
    | SaveCompanyFailureAction;
