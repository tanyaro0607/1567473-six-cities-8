import {connect, ConnectedProps} from 'react-redux';
import {Switch, Route, Redirect, Router as BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../main-page/main-page';
// import FavoritesEmpty from '../favorites-empty/favorites-empty';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import NotFound from '../not-found/not-found';
import Property from '../property/property';
import PrivateRoute from '../private-route/private-route';
import Loading from '../loading/loading';
import {State} from '../../types/state';
import browserHistory from '../../browser-history';

export const isCheckedAuth = (authorizationStatus: AuthorizationStatus): boolean =>
  authorizationStatus === AuthorizationStatus.Unknown;

const mapStateToProps = ({authorizationStatus, isDataLoaded}: State) => ({
  authorizationStatus,
  isDataLoaded,
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

function App(props: PropsFromRedux): JSX.Element {
  const {authorizationStatus, isDataLoaded} = props;

  //если данные не загружены
  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Loading /> //то показываем компонент загрузки
    );
  }

  //иначе рендерим страницу
  return (
    <BrowserRouter history={browserHistory}>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage/>
        </Route>
        <Route
          exact
          path={AppRoute.SignIn}
          render={() => (
            authorizationStatus === AuthorizationStatus.Auth
              ? <Redirect to={AppRoute.Main} />
              : <Login />
          )}
        >
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites />}
        >
        </PrivateRoute>
        <Route exact path={AppRoute.Room}>
          <Property />
        </Route>
        <Route>
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export {App};
export default connector(App);

