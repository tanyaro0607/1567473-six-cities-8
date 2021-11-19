import {connect, ConnectedProps} from 'react-redux';
import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
import MainPage from '../main-page/main-page';
// import FavoritesEmpty from '../favorites-empty/favorites-empty';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import NotFound from '../not-found/not-found';
import Property from '../property/property';
import PrivateRoute from '../private-route/private-route';
import {ReviewType} from '../../types/review';
import {OfferType} from '../../types/offer';
import Loading from '../loading/loading';
import {State} from '../../types/state';

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

  const offers: OfferType[] = [];
  const reviews: ReviewType[] = [];

  //если данные не загружены
  if (isCheckedAuth(authorizationStatus) || !isDataLoaded) {
    return (
      <Loading /> //то показываем компонент загрузки
    );
  }

  //иначе рендерим страницу
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage/>
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites offers={offers} />}
        >
        </PrivateRoute>
        {/* <Route exact path={AppRoute.Favorites}>
          <Favorites offers={offers} />
        </Route> */}
        <Route exact path={AppRoute.Room}>
          <Property offers={offers} reviews={reviews} />
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

