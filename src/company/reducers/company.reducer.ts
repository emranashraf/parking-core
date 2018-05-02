import { Company } from '../../models/company';
import { CompanyActions, CompanyActionTypes  } from '../actions/company.actions';

export interface State {
    company: Company | null;
}


export const initialState: State = {
    company: null
}

export function reducer(state = initialState, action: CompanyActions): State {
    switch (action.type) {

        case CompanyActionTypes.SaveCompany: {
            return {
                ...state,
                company: action.payload
            };
        }
    }
}
