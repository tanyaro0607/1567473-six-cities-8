import {ThunkActionResult} from '../types/action';
import {loadOffers, redirectToRoute, requireAuthorization, requireLogout} from './action';
import {saveToken, dropToken, Token} from '../services/token';
import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
import {AuthData} from '../types/auth-data';
import { BackOffer } from '../types/back-offer';
import { adaptOffersToClient } from '../utils/adapter';

export const fetchOfferAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<BackOffer[]>(APIRoute.Offers); //запрос на получение данных от сервера
    dispatch(loadOffers(adaptOffersToClient(data))); //диспатчим данные в store
  };

//проверка на авторизацию
export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    await api.get(APIRoute.Login)
      .then(() => {
        dispatch(requireAuthorization(AuthorizationStatus.Auth));
        dispatch(redirectToRoute(AppRoute.Main)); //если пользователь авторизован, перейти на главную
      });
  };

//действие для авторизации
export const loginAction = ({email: email, password}: AuthData): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const {data: {token}} = await api.post<{token: Token}>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  };

//действия для выхода из учетной записи
export const logoutAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireLogout());
  };