import OfferCard from '../offer-card/offer-card';
import {OfferType} from '../../types/offer';
import {useState} from 'react';

type OffersListProps = {
  offers: OfferType[];
}

function OffersList({offers}: OffersListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [focusedCard, setFocusedCard] = useState({});
  return (
    <>
      {offers.map((offer) => (<OfferCard offer={offer} key={offer.id} onHover={() => setFocusedCard(offer)}/>))}
    </>
  );
}

export default OffersList;
