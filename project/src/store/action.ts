import {ActionType, ChangeCityAction, FoundOffersAction} from '../types/action';
import { OfferType } from '../types/offer';

export const changeCity = (city: string): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const foundOffers = (offers: OfferType[]): FoundOffersAction => ({
  type: ActionType.FoundOffers,
  payload: offers,
});
