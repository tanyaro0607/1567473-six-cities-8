import {ActionType} from '../types/action';
import { OfferType } from '../types/offer';

export const changeCity = (city: string) => ({
  type: ActionType.ChangeCity,
  payload: city,
} as const);

export const foundOffers = (offers: OfferType[]) => ({
  type: ActionType.FoundOffers,
  payload: offers,
} as const);
