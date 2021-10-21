// import OfferCard from '../offer-card/offer-card';
import Header from '../header/header';
import SubmitFormReview from '../submit-form-review/submit-form-review';
// import Review from '../review/review';
import {OfferType} from '../../types/offer';
import {ReviewType} from '../../types/review';

type PropertyProps = {
  offer: OfferType;
  reviews: ReviewType[];
};

function Property(props: PropertyProps): JSX.Element {
  const {offer, reviews} = props;
  const {images, bedrooms, goods, maxAdults, description, host, isFavorite, id, title, isPremium, price, rating, type} = offer;
  const ratingMark = 5 * rating / 100;

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
                  <span style={{width: `${rating}%`}}/>
                  <span className="visually-hidden">Rating</span>
                </div>
                <span className="property__rating-value rating__value">{ratingMark}</span>
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
                <ul className="reviews__list">
                  {reviews.map((review) => (
                    <li key={`${review.id}`} className="reviews__item" id={`${review.id}`}>
                      <div className="reviews__user user"id={`${review.user.id}`}>
                        <div className="reviews__avatar-wrapper user__avatar-wrapper">
                          <img className="reviews__avatar user__avatar" src={review.user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
                        </div>
                        <span className="reviews__user-name">{review.user.name}</span>
                      </div>
                      <div className="reviews__info">
                        <div className="reviews__rating rating">
                          <div className="reviews__stars rating__stars">
                            <span style={{width: `${review.rating}%`}}></span>
                            <span className="visually-hidden">Rating</span>
                          </div>
                        </div>
                        <p className="reviews__text">{review.comment}</p>
                        <time className="reviews__time" dateTime="2019-04-24">{review.date}</time>
                      </div>
                    </li>
                  ))}
                </ul>
                <SubmitFormReview />
              </section>
            </div>
          </div>
          <section className="property__map map"></section>
        </section>
        <div className="container">
          <section className="near-places places">
            <h2 className="near-places__title">Other places in the neighbourhood</h2>
            <div className="near-places__list places__list">
              {/* <OfferCard />
              <OfferCard />
              <OfferCard /> */}
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Property;
