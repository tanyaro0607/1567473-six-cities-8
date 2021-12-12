import { combineReducers } from 'redux';
import { offersReducer } from './offers/offers-reducer';
import { propertyReducer } from './property/property-reducer';
import { userProcessReducer } from './user-process/user-process-reducer';

export enum NameSpace {
  offers = 'OFFERS',
  property = 'PROPERTY',
  user = 'USER',
}

export const rootReducer = combineReducers({
  [NameSpace.offers]: offersReducer,
  [NameSpace.property]: propertyReducer,
  [NameSpace.user]: userProcessReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

