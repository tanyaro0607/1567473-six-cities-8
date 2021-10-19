import {Switch, Route, BrowserRouter} from 'react-router-dom';
import {AppRoute, AuthorizationStatus} from '../../const';
// import {AppRoute} from '../../const';
import MainPage from '../main-page/main-page';
// import MainEmpty from '../main-empty/main-empty';
// import FavoritesEmpty from '../favorites-empty/favorites-empty';
import Favorites from '../favorites/favorites';
import Login from '../login/login';
import NotFound from '../not-found/not-found';
import Property from '../property/property';
import PrivateRoute from '../private-route/private-route';
import {ReviewType} from '../../types/review';
import {OfferType} from '../../types/offer';

type AppScreenProps = {
  offers: OfferType[];
  reviews: ReviewType[];
}

function App({offers, reviews}: AppScreenProps): JSX.Element {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={AppRoute.Main}>
          <MainPage offers={offers}/>
        </Route>
        <Route exact path={AppRoute.SignIn}>
          <Login />
        </Route>
        <PrivateRoute
          exact
          path={AppRoute.Favorites}
          render={() => <Favorites />}
          authorizationStatus={AuthorizationStatus.NoAuth}
        >
        </PrivateRoute>
        {/* <Route exact path={AppRoute.Favorites}>
          <Favorites />
        </Route> */}
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

export default App;

