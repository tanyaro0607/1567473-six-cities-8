import Sort from '../sort/sort';
import Filter from '../filter/filter';
import Header from '../header/header';
import {OfferType} from '../../types/offer';
import OffersList from '../offers-list/offers-list';
import Map from '../../components/map/map';
// import React, {useState} from 'react';

type MainPageProps = {
  offers: OfferType[];
}

function MainPage({offers}: MainPageProps): JSX.Element {

  // const [selectedPoint, setSelectedPoint] = useState<number | null>(null);

  const city = offers[0].city;
  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <Filter />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in Amsterdam</b>
              <Sort />
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={offers}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offers={offers}
                  city={city}
                  // selectedPoint={selectedPoint}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainPage;
