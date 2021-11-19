import Logo from '../logo/logo';
import {useRef, FormEvent} from 'react';
import {useHistory} from 'react-router-dom';
// import {connect, ConnectedProps} from 'react-redux';
import {loginAction} from '../../store/api-actions';
// import {ThunkAppDispatch} from '../../types/action';
// import {AuthData} from '../../types/auth-data';
import {AppRoute} from '../../const';
import { useDispatch } from 'react-redux';

// const mapDispatchToProps = (dispatch: ThunkAppDispatch) => ({
//   onSubmit(authData: AuthData) {
//     dispatch(loginAction(authData));
//   },
// });

// const connector = connect(null, mapDispatchToProps);

function Login(): JSX.Element {

  const loginRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const history = useHistory();
  const dispatch = useDispatch();

  //пользователь нажимает кнопку войти
  const handleSubmit = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    if (loginRef.current !== null && passwordRef.current !== null) {
      //диспатчим децтсвие loginAction - асинхронное действие
      dispatch(loginAction({
        email: loginRef.current.value,
        password: passwordRef.current.value,
      }));
    }
  };

  return (
    <div className="page page--gray page--login">
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <Logo/>
          </div>
        </div>
      </header>

      <main className="page__main page__main--login">
        <div className="page__login-container container">
          <section className="login">
            <h1 className="login__title">Sign in</h1>
            <form className="login__form form"
              action="#"
              method="post"
              onSubmit={handleSubmit}
            >
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">E-mail</label>
                <input
                  ref={loginRef}
                  className="login__input form__input"
                  type="email" name="email"
                  placeholder="Email"
                  required
                />
              </div>
              <div className="login__input-wrapper form__input-wrapper">
                <label className="visually-hidden">Password</label>
                <input
                  ref={passwordRef}
                  className="login__input form__input"
                  type="password"
                  name="password"
                  placeholder="Password"
                  required
                />
              </div>
              <button
                onClick={() => history.push(AppRoute.Main)}
                className="login__submit form__submit button"
                type="submit"
              >Sign in
              </button>
            </form>
          </section>
          <section className="locations locations--login locations--current">
            <div className="locations__item">
              <a className="locations__item-link" href="/">
                <span>Amsterdam</span>
              </a>
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Login;
