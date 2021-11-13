import { OfferType } from './offer';
import {AuthorizationStatus} from '../const';

export type State = {
  city: string,
  offers: OfferType[],
  authorizationStatus: AuthorizationStatus,
}
