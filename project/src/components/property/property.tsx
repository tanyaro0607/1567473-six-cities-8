import Header from '../header/header';
import SubmitFormReview from '../submit-form-review/submit-form-review';
import Map from '../../components/map/map';
import OffersListNear from '../offers-list-near/offers-list-near';
import ReviewsList from '../reviews-list/reviews-list';
import {State} from '../../types/state';
import {connect, ConnectedProps} from 'react-redux';
// import Loading from '../loading/loading';
// import NotFound from '../not-found/not-found';

const mapStateToProps = ({offers, reviews, offer, offerError, isDataLoaded}: State) => ({
  reviews,
  offers,
  offer,
  offerError,
  isDataLoaded,
});

const connector = connect(mapStateToProps); //подключаем компонент к store

type PropsFromRedux = ConnectedProps<typeof connector>;

function Property(props: PropsFromRedux): JSX.Element {
  const {offers, reviews} = props;
  // const {offers, reviews, offer, offerError, isDataLoaded} = props;

  // if (!offerError) {
  //   if ( isDataLoaded  || !offer) {
  //     return <Loading/>;
  //   }
  // } else {
  //   return <NotFound/>;
  // }

  // const {images, bedrooms, goods, maxAdults, description, host, isFavorite, id, title, isPremium, price, rating, type} = offers[0];
  // const city = offer.city;

  const {images, bedrooms, goods, maxAdults, description, host, isFavorite, id, title, isPremium, price, rating, type} = offers[0];
  const city = offers[0].city;

  return (
    <div className="page">
      <Header />

      <main className="page__main page__main--property">
        <section className="property" id={`${id}`}>
          <div className="property__gallery-container container">
            <div className="property__gallery">
              {images.map((image) => (
                <div key={Math.random()} className="property__image-wrapper">
                  <img className="property__image" src={image} alt="Studio" />
                </div>
              ))}
            </div>
          </div>
          <div className="property__container container">
            <div className="property__wrapper">
              {isPremium && <div className="property__mark"><span>Premium</span></div>}
              <div className="property__name-wrapper">
                <h1 className="property__name">
                  {title}
                </h1>
                <button className={`property__bookmark-button button ${isFavorite ? 'property__bookmark-button--active' : ''}`} type="button">
                  <svg className="property__bookmark-icon" width="31" height="33">
                    <use xlinkHref="#icon-bookmark"></use>
                  </svg>
                  <span className="visually-hidden">To bookmarks</span>
                </button>
              </div>
              <div className="property__rating rating">
                <div className="property__stars rating__stars">
                  <span style={{width: `${rating * 20}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{rating}</span>
              </div>
              <ul className="property__features">
                <li className="property__feature property__feature--entire">
                  {type}
                </li>
                <li className="property__feature property__feature--bedrooms">
                  {bedrooms} Bedrooms
                </li>
                <li className="property__feature property__feature--adults">
                  Max {maxAdults} adults
                </li>
              </ul>
              <div className="property__price">
                <b className="property__price-value">&euro;{price}</b>
                <span className="property__price-text">&nbsp;night</span>
              </div>
              <div className="property__inside">
                <h2 className="property__inside-title">What&apos;s inside</h2>
                <ul className="property__inside-list">
                  {goods.map((good) => (<li key={Math.random()} className="property__inside-item">{good}</li>))}
                </ul>
              </div>
              <div className="property__host">
                <h2 className="property__host-title">Meet the host</h2>
                <div className="property__host-user user">
                  <div className="property__avatar-wrapper property__avatar-wrapper--pro user__avatar-wrapper">
                    <img className="property__avatar user__avatar" src={host.avatarUrl} width="74" height="74" alt="Host avatar" />
                  </div>
                  <span className="property__user-name">
                    {host.name}
                  </span>
                  <span className="property__user-status">
                    {host.isPro}
                  </span>
                </div>
                <div className="property__description">
                  <p className="property__text">
                    {description}
                  </p>
                </div>
              </div>
              <section className="property__reviews reviews">
                <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
                <ReviewsList offer={offers[0]} reviews={reviews} />
                <SubmitFormReview />
              </section>
            </div>
          </div>
          <section className="property__map map">
            <Map
              offers={offers}
              city={city}
            />
          </section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <OffersListNear offers={offers}/>
          </section>
        </div>
      </main>
    </div>
  );
}

export default connector(Property);
