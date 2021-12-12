import { OfferType } from './offer';
import { ReviewType } from './review';

import {AuthorizationStatus, SendingReviewStatus} from '../const';

export type State = {
  city: string,
  offers: OfferType[],
  reviews: ReviewType[],
  authorizationStatus: AuthorizationStatus,
  authorizationEmail?: string | null,
  isDataLoaded: boolean,
  offer: OfferType | null,
  offerError: boolean;
  sendingCommentStatus: SendingReviewStatus,
}

export type UserProcess = {
  authorizationStatus: AuthorizationStatus,
  authorizationEmail?: string | null,
  isDataLoaded: boolean,
};

export type Offers = {
  city: string,
  offers: OfferType[],
  offer: OfferType | null,
  offerError: boolean,
};

export type Property = {
  offer: OfferType | null,
  reviews: ReviewType[],
  endingCommentStatus: SendingReviewStatus,
};
