import OfferCard from '../offer-card/offer-card';
import {OfferType} from '../../types/offer';
import {useState} from 'react';

type OffersListProps = {
  offers: OfferType[];
}

function OffersListNear({offers}: OffersListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [focusedCard, setFocusedCard] = useState({});
  return (
    <div className="near-places__list places__list">
      {offers.map((offer) => (<OfferCard offer={offer} key={offer.id} onHover={() => setFocusedCard(offer)}/>)).slice(0, 3)}
    </div>
  );
}

export default OffersListNear;
