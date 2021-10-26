import Review from '../reviews-item/reviews-item';
import {OfferType} from '../../types/offer';
import {ReviewType} from '../../types/review';

type ReviewsListProps = {
  offer: OfferType;
  reviews: ReviewType[];
}

function ReviewsList({reviews, offer}: ReviewsListProps): JSX.Element {
  const reviewsPlace = reviews.filter((review) => offer.id === review.id);

  return (
    <>
      {reviewsPlace.map((review) => (<Review review={review} key={review.id}/>))}
    </>
  );
}

export default ReviewsList;
