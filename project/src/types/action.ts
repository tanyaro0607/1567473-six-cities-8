import { changeCity, foundOffers } from '../store/action';

//все действия
export enum ActionType {
  ChangeCity = 'city/changeCity',
  FoundOffers = 'offers/foundOffers',
}

export type Actions =
  | ReturnType<typeof changeCity>
  | ReturnType<typeof foundOffers>
