// import OfferCard from '../offer-card/offer-card';
import Footer from '../footer/footer';
import Header from '../header/header';
import OffersList from '../offers-list/offers-list';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
import {Link} from 'react-router-dom';

const mapStateToProps = ({offers, city}: State) => ({
  city,
  offers,
});

const connector = connect(mapStateToProps); //подключаем компонент к store

type PropsFromRedux = ConnectedProps<typeof connector>;

function Favotites({ offers, city }: PropsFromRedux): JSX.Element {
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
                    <Link className="locations__item-link" to="/">
                      <span>{city}</span>
                    </Link>
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

export default connector(Favotites);
