import { OfferType } from './types/offer';

export enum AppRoute {
  Main = '/',
  SignIn = '/login',
  Favorites = '/favorites',
  Room = '/offer/:id'
}

export enum APIRoute {
  Offers = '/hotels',
  Login = '/login',
  Logout = '/logout',
  Reviews = '/reviews',
  // Favorites = '/favorites',
}

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export enum SendingReviewStatus {
  Sent = 'SENT',
  NotSent = 'NOT_SENT',
}

export const URL_MARKER_DEFAULT = '../img/pin.svg';

export const URL_MARKER_CURRENT = '../img/pin-active.svg';


export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export const SortType = {
  POPULAR: 'Popular',
  PRICE_LESS: 'Price: low to high',
  PRICE_MORE: 'Price: high to low',
  RATING_TOP: 'Top rated first',
};

const sortByPriceLowToHigh = (offerA: OfferType, offerB: OfferType): number => offerA.price - offerB.price;

const sortByPriceHighToLow = (offerA: OfferType, offerB: OfferType): number => offerB.price - offerA.price;

const sortByRating = (offerA: OfferType, offerB: OfferType): number => offerB.rating - offerA.rating;

export const getSortOffers = (sortType: string, offers: OfferType[]): OfferType[] => {
  switch (sortType) {
    case SortType.POPULAR:
      return offers;
    case SortType.PRICE_LESS:
      return offers.slice().sort(sortByPriceLowToHigh);
    case SortType.PRICE_MORE:
      return offers.slice().sort(sortByPriceHighToLow);
    case SortType.RATING_TOP:
      return offers.slice().sort(sortByRating);
    default: return offers;
  }
};
