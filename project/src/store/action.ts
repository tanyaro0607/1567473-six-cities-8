import { ActionType } from '../types/action';
import { OfferType } from '../types/offer';
import { ReviewType } from '../types/review';
import { AuthorizationStatus } from '../const';

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const loadOffers = (offers: OfferType[]) => ({
  type: ActionType.LoadOffers,
  payload: offers,
} as const);

export const loadReviews = (reviews: ReviewType[]) => ({
  type: ActionType.LoadReviews,
  payload: reviews,
} as const);

export const requireAuthorization = (authStatus: AuthorizationStatus) => ({
  type: ActionType.RequireAuthorization,
  payload: authStatus,
} as const);

export const requireLogout = () => ({
  type: ActionType.RequireLogout,
} as const);
