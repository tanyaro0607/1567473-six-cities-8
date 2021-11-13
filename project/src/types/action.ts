import { changeCity, loadOffers, requireAuthorization, requireLogout } from '../store/action';

//все действия
export enum ActionType {
  ChangeCity = 'main/changeCity',
  LoadOffers = 'data/loudOffers',
  RequireAuthorization = 'user/requireAuthorization',
  RequireLogout = 'user/requireLogout',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof loadOffers>
  | ReturnType<typeof requireAuthorization>
  | ReturnType<typeof requireLogout>;
