import {Link} from 'react-router-dom';
import { AppRoute } from '../../const';
import { logoutAction } from '../../store/api-actions';
import { useDispatch, useSelector } from 'react-redux';
import { AuthorizationStatus } from '../../const';
import {State} from '../../types/state';

function Navigation(): JSX.Element {
  const dispatch = useDispatch();
  const authorizationStatus = useSelector((state: State): string => (state.authorizationStatus));
  const authorizationEmail = useSelector((state: State): string |null | undefined => (state.authorizationEmail));

  return (
    <nav className="header__nav">
      <ul className="header__nav-list">
        {authorizationStatus === AuthorizationStatus.Auth
          ? (
            <>
              <li className="header__nav-item user">
                <Link className="header__nav-link header__nav-link--profile" to={AppRoute.Favorites}>
                  <div className="header__avatar-wrapper user__avatar-wrapper">
                  </div>
                  <span className="header__user-name user__name">{authorizationEmail}</span>
                </Link>
              </li>
              <li className="header__nav-item">
                <Link
                  className="header__nav-link"
                  to={AppRoute.Main}
                  onClick={() => dispatch(logoutAction())}
                >
                  <span className="header__signout">Sign out</span>
                </Link>
              </li>
            </>
          )
          : (
            <li className="header__nav-item user">
              <Link className="header__nav-link header__nav-link--profile" to={AppRoute.SignIn}>
                <div className="header__avatar-wrapper user__avatar-wrapper">
                </div>
                <span className="header__login">Sign in</span>
              </Link>
            </li>
          )}
      </ul>
    </nav>
  );
}

export default Navigation;
