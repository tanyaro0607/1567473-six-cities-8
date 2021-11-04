import {ReviewType} from '../../types/review';

type PlaceReviewProps = {
  review: ReviewType,
  key: number;
}

function Review({review, key}: PlaceReviewProps): JSX.Element {
  const {
    comment,
    date,
    rating,
    user,
  } = review;

  return (
    <li key={key} className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} alt="Reviews avatar" width="54" height="54"/>
        </div>
        <span className="reviews__user-name">{user.name}</span>
        {user.isPro && <span className="property__user-status">Pro</span>}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: `${rating * 20}%`}}/>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date}>{date}</time>
      </div>
    </li>
  );
}

export default Review;
