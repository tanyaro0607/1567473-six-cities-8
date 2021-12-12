import {ActionType, Actions} from '../../types/action';
import {Property} from '../../types/state';
import {SendingReviewStatus} from '../../const';

const initialState: Property = {
  offer: null,
  reviews: [],
  endingCommentStatus: SendingReviewStatus.NotSent,
};

const propertyReducer = (state = initialState, action: Actions): Property => {
  switch (action.type) {
    case ActionType.LoadReviews: {
      const reviews = action.payload;
      return { ...state, reviews };
    }
    case ActionType.SelectOffer:
      return { ...state, offer: action.payload };
    default:
      return state;
  }
};

export {propertyReducer};
