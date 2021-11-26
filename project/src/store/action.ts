import { ActionType } from '../types/action';
import { OfferType } from '../types/offer';
import { ReviewType } from '../types/review';
import { AppRoute, AuthorizationStatus, SendingReviewStatus } from '../const';

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

export const redirectToRoute = (url: AppRoute) => ({
  type: ActionType.RedirectToRoute,
  payload: url,
} as const);

//загрузка выбранного предложения
export const selectOffer = (offer: OfferType) => ({
  type: ActionType.SelectOffer,
  payload: offer,
} as const);

//ошибка 404 - если предложение не сущ
export const setOfferError = () => ({
  type: ActionType.SetOfferError,
} as const);

//статус отправки комментария
export const changeSendingReviewStatus = (sendingReviewStatus: SendingReviewStatus) => ({
  type: ActionType.ChangeSendingReviewStatus,
  payload: sendingReviewStatus,
} as const);
