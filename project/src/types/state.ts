import { OfferType } from './offer';
import { ReviewType } from './review';

import {AuthorizationStatus} from '../const';

export type State = {
  city: string,
  offers: OfferType[],
  reviews: ReviewType[],
  authorizationStatus: AuthorizationStatus,
  authorizationEmail?: string | null,
  isDataLoaded: boolean,
}
