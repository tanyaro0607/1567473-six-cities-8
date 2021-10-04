import MainPage from '../main-page/main-page';
// import MainEmpty from '../main-empty/main-empty';
// import FavoritesEmpty from '../favorites-empty/favorites-empty';
// import Favorites from '../favorites/favorites';
// import Login from '../login/login';
// import Property from '../property/property';


type AppScreenProps = {
  offersCount: number;
}

function App({ offersCount }: AppScreenProps): JSX.Element {
  return (
    <MainPage offersCount={offersCount} />
    // <FavoritesEmpty />
    // <MainEmpty />
    // <Favorites />
    // <Login />
    // <Property />
  );
}

export default App;

