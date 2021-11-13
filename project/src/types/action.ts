import { changeCity, loadOffers } from '../store/action';

//все действия
export enum ActionType {
  ChangeCity = 'city/changeCity',
  LoadOffers = 'data/loudOffers',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof loadOffers>
