import {ActionType, Actions} from '../../types/action';
import {UserProcess} from '../../types/state';
import {AuthorizationStatus} from '../../const';

const initialState: UserProcess = {
  authorizationStatus: AuthorizationStatus.Unknown,
  authorizationEmail: null,
  isDataLoaded: false, //данные не получены - показываем иконку загрузки
};

const userProcessReducer = (state = initialState, action: Actions): UserProcess => {
  switch (action.type) {
    case ActionType.RequireAuthorization:
      return {
        ...state,
        authorizationStatus: action.payload,
        authorizationEmail: action.payload,
        isDataLoaded: true,
      };
    case ActionType.RequireLogout:
      return {...state, authorizationStatus: AuthorizationStatus.NoAuth};
    default:
      return state;
  }
};

export {userProcessReducer};
