import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {CITIES, AuthorizationStatus} from '../const';
import {offers} from '../mocks/offers';

//начальное состояние
const initialState = {
  city: CITIES[0],
  offers: offers,
  authorizationStatus: AuthorizationStatus.Unknown,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.LoadOffers:
      return {...state, offers: action.payload};
    case ActionType.RequireAuthorization:
      return {...state, authorizationStatus: action.payload};
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    default:
      return state;
  }
};

export {reducer};
