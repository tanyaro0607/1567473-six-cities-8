import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {CITIES, AuthorizationStatus} from '../const';

//начальное состояние
const initialState = {
  city: CITIES[0],
  offers: [],
  reviews: [],
  authorizationStatus: AuthorizationStatus.Unknown,
  authorizationEmail: null,
  isDataLoaded: false, //данные не получены - показываем иконку загрузки
  offer: null,
  offerError: false,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.LoadOffers: {
      const offers = action.payload;
      return { ...state, offers };
    }
    case ActionType.LoadReviews: {
      const reviews = action.payload;
      return { ...state, reviews };
    }
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
        authorizationEmail: action.payload,
        isDataLoaded: true,
      };
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    case ActionType.SelectOffer:
      return { ...state, offer: action.payload };
    case ActionType.SetOfferError:
      return { ...state, offerError: true };
    default:
      return state;
  }
};

export {reducer};
