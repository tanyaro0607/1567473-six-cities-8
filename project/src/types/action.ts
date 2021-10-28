import { OfferType } from './offer';

//все действия
export enum ActionType {
  ChangeCity = 'city/changeCity',
  FoundOffers = 'offers/foundOffers',
}

//изменение города
export type ChangeCityAction = {
  type: ActionType.ChangeCity;
  payload: string;
};

//заполнение списка предложений по аренде
export type FoundOffersAction = {
  type: ActionType.FoundOffers;
  payload: OfferType[];
};

export type Actions = ChangeCityAction | FoundOffersAction;
