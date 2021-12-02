import {ThunkActionResult} from '../types/action';
import {loadOffers, redirectToRoute, requireAuthorization, requireLogout, selectOffer} from './action';
import {saveToken, dropToken, Token} from '../services/token';
import {APIRoute, AuthorizationStatus, AppRoute} from '../const';
import {AuthData} from '../types/auth-data';
import { BackOffer } from '../types/back-offer';
import { adaptOffersToClient, adaptOfferToClient } from '../utils/adapter';
import {toast} from 'react-toastify';

const AUTH_FAIL_MESSAGE = 'Не забудьте авторизоваться';

export const fetchOfferAction = (): ThunkActionResult =>
  async (dispatch, _getState, api): Promise<void> => {
    const { data } = await api.get<BackOffer[]>(APIRoute.Offers); //запрос на получение данных от сервера
    dispatch(loadOffers(adaptOffersToClient(data))); //диспатчим данные в store
  };

//проверка на авторизацию
export const checkAuthAction = (): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
      dispatch(redirectToRoute(AppRoute.Main)); //если пользователь авторизован, перейти на главную
    } catch {
      toast.info(AUTH_FAIL_MESSAGE);
    }
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

//поиск выбранного оффера
export const loadSelectOffer = (id: string): ThunkActionResult =>
  async (dispatch, _getState, api) => {
    const offer = await api.get(`${APIRoute.Offers}/${id}`);
    dispatch(selectOffer(adaptOfferToClient(offer.data)));
  };
