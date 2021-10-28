import {ActionType, ChangeCityAction, FoundOffersAction} from '../types/action';
import { OfferType } from '../types/offer';

export const incrementMistake = (city: string): ChangeCityAction => ({
  type: ActionType.ChangeCity,
  payload: city,
});

export const incrementStep = (offers: OfferType[]): FoundOffersAction => ({
  type: ActionType.FoundOffers,
  payload: offers,
});