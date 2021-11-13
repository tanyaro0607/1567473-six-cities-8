import Sort from '../sort/sort';
import CityList from '../city-list/city-list';
import Header from '../header/header';
import {OfferType} from '../../types/offer';
import OffersList from '../offers-list/offers-list';
import Map from '../../components/map/map';
// import React, {useState} from 'react';
import { CITIES } from '../../const';
import {bindActionCreators, Dispatch} from 'redux';
import {connect, ConnectedProps} from 'react-redux';
// import { Actions } from '../../types/action';
import { State } from '../../types/state';
import { changeCity as changeCityState } from '../../store/action';
import { SortType, getSortOffers } from '../../const';
import { useState } from 'react';


type MainPageProps = {
  offers: OfferType[];
}

//ф-я которая позволит настроить связь между пропсами компонента и значениями в хранилище
const mapStateToProps = (state: State) => ({
  city: state.city,
  offers: state.offers.filter((offer) => offer.city.name === state.city),
});

const mapDispatchToProps = (dispatch: Dispatch) => bindActionCreators({
  onChangeCity: changeCityState,
}, dispatch);

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;
type ConnectedComponentProps = PropsFromRedux & MainPageProps;

function MainPage({ offers, city, onChangeCity }: ConnectedComponentProps): JSX.Element {

  const [selectedOffer] = useState<OfferType | undefined>(undefined);

  const cityName = offers[0].city;
  const [currentSort, setCurrentSort] = useState<string>(SortType.POPULAR);
  const sortOffers = getSortOffers(currentSort, offers);

  return (
    <div className="page page--gray page--main">
      <Header />

      <main className="page__main page__main--index">
        <CityList cityList={CITIES} selectedCity={city} setSelectedCity={onChangeCity} />
        <div className="cities">
          <div className="cities__places-container container">
            <section className="cities__places places">
              <h2 className="visually-hidden">Places</h2>
              <b className="places__found">{offers.length} places to stay in {city}</b>
              <Sort currentSort={currentSort} setCurrentSort={setCurrentSort}/>
              <div className="cities__places-list places__list tabs__content">
                <OffersList offers={sortOffers}/>
              </div>
            </section>
            <div className="cities__right-section">
              <section className="cities__map map">
                <Map
                  offers={offers}
                  city={cityName}
                  selectedOffer={selectedOffer}
                />
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default connector(MainPage);
