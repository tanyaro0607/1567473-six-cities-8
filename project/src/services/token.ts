const AUTH_TOKEN_KEY_NAME = 'six-cities-token';

export type Token = string;

//ф-я считывает токен из локального хранилища
export const getToken = (): Token => {
  const token = localStorage.getItem(AUTH_TOKEN_KEY_NAME);
  return token ?? '';
};

//ф-я сохраняет токен
export const saveToken = (token: Token): void => {
  localStorage.setItem(AUTH_TOKEN_KEY_NAME, token);
};

//ф-я удаляет токен
export const dropToken = (): void => {
  localStorage.removeItem(AUTH_TOKEN_KEY_NAME);
};
