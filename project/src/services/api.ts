import axios, {AxiosInstance, AxiosResponse, AxiosError} from 'axios';

const BACKEND_URL = 'https://8.react.pages.academy/six-cities'; //все данные по этому адресу
const REQUEST_TIMEOUT = 5000; //макс время запроса

enum HttpCode {
  Unauthorized = 401, //проверка на код 401 (авторизация)
}

type UnauthorizedCallback = () => void;

export const createAPI = (onUnauthorized: UnauthorizedCallback): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });

  //настраиваем режим interceptors(перехватчиков)
  api.interceptors.response.use(
    (response: AxiosResponse) => response, //AxiosResponse - принимаем ответ от сервера //коллбек выполняется, если сервер ответил успехом 200-299

    //если сервер ответил ошибкой
    (error: AxiosError) => {
      const {response} = error;

      //проверяем статус ответа
      //если ошибка 401(Unauthorized)
      if (response?.status === HttpCode.Unauthorized) {
        return onUnauthorized();
      }

      return Promise.reject(error);
    },
  );

  return api;
};
