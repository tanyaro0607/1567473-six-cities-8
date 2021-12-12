import {ActionType, Actions} from '../../types/action';
import {Offers} from '../../types/state';
import {CITIES} from '../../const';

const initialState: Offers = {
  city: CITIES[0],
  offers: [],
  offer: null,
  offerError: false,
};

const offersReducer = (state = initialState, action: Actions): Offers => {
  switch (action.type) {
    case ActionType.ChangeCity:
      return {...state, city: action.payload};
    case ActionType.LoadOffers: {
      const offers = action.payload;
      return { ...state, offers };
    }
    case ActionType.SelectOffer:
      return { ...state, offer: action.payload };
    case ActionType.SetOfferError:
      return { ...state, offerError: true };
    default:
      return state;
  }
};

export {offersReducer};


