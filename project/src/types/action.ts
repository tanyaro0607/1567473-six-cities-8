import { changeCity, loadOffers, loadReviews, redirectToRoute, requireAuthorization, requireLogout, selectOffer, setOfferError } from '../store/action';
import { ThunkAction,ThunkDispatch } from 'redux-thunk';
import { AxiosInstance } from 'axios';
import { State } from '../types/state';

//все действия
export enum ActionType {
  ChangeCity = 'main/changeCity',
  LoadOffers = 'data/loadOffers',
  LoadReviews = 'data/loadReviews',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
  RedirectToRoute = 'app/redirectToRoute',
  SelectOffer = 'room/selectOffer',
  SetOfferError = 'room/setOfferError',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>
  | ReturnType<typeof loadReviews>
  | ReturnType<typeof redirectToRoute>
  | ReturnType<typeof selectOffer>
  | ReturnType<typeof setOfferError>;

//определяем новый псевдоним типа
export type ThunkActionResult<R = Promise<void>> = ThunkAction<R, State, AxiosInstance, Actions>;

export type ThunkAppDispatch = ThunkDispatch<State, AxiosInstance, Actions>;
