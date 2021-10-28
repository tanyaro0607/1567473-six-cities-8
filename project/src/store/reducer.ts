import {ActionType, Actions} from '../types/action';
import {State} from '../types/state';
import {CITIES} from '../const';
import {offers} from '../mocks/offers';

//начальное состояние
const initialState = {
  city: CITIES[0],
  offers: offers,
};

const reducer = (state: State = initialState, action: Actions): State => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.FoundOffers:
      return {...state, offers: action.payload};
    default:
      return state;
  }
};

export {reducer};
