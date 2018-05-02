import { Airport } from './airport';
import { OfferType } from './offerType';

export interface Company {
    name: string;
    email: string;
    airport: Airport;
    startOffTime: string;
    endOffTime: string;
    mileageDescr: string;
    valetingRate: number;
    mValetingRate: number;
    oValetingRate: number;
    rating: number
    ratingPer: number;
    comission: number;
    shortNoticeHours: number;
    editShortNoticeHours: number;
    cancelShortNoticeHours: number;
    phone: string;
    companyType: CompanyType;
    offerType: OfferType;
    shortDescr: string;
    terms: string;
    companyInfo: string;
    procedure: string;
    companyLogo: string;
    seq: number;
    hrPatrols: boolean;
    cctv: boolean;
    fencing: boolean;
    keepYourKeys: boolean;
    securityLightning: boolean;
    patrolled: boolean;
    parkMark: boolean;
    disabilityFriendly: boolean;
    bpaMember: boolean;
    buyWithConfidence: boolean;
    active: boolean;
}

export interface CompanyType {
    name: string;
}
