// import OfferCard from '../offer-card/offer-card';
import Footer from '../footer/footer';
import Header from '../header/header';
import {OfferType} from '../../types/offer';
import OffersList from '../offers-list/offers-list';

type FavoritesProps = {
  offers: OfferType[],
}

function Favotites({ offers }: FavoritesProps): JSX.Element {
  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--favorites">
        <div className="page__favorites-container container">
          <section className="favorites">
            <h1 className="favorites__title">Saved listing</h1>
            <ul className="favorites__list">
              <li className="favorites__locations-items">
                <div className="favorites__locations locations locations--current">
                  <div className="locations__item">
                    <a className="locations__item-link" href="/">
                      <span>{offers[0].city.name}</span>
                    </a>
                  </div>
                </div>
                <div className="favorites__places">
                  <OffersList offers={offers}/>
                </div>
              </li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Favotites;
