import PlaceCard from '../place-card/place-card';
import Sort from '../sort/sort';
import Filter from '../filter/filter';
import Header from '../header/header';

//псевдоним типа
type MainPageProps = {
  offersCount: number;
}

function MainPage({ offersCount }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <Filter />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offersCount} places to stay in Amsterdam</b>
              <Sort />
              <div className="cities__places-list places__list tabs__content">
                <PlaceCard/>
                <PlaceCard/>
                <PlaceCard/>
                <PlaceCard/>
                <PlaceCard/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
