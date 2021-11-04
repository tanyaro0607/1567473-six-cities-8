import OfferCard from '../offer-card/offer-card';
import {OfferType} from '../../types/offer';
import {useState} from 'react';
import { SortType, getSortOffers } from '../../const';

type OffersListProps = {
  offers: OfferType[];
}

function OffersList({offers}: OffersListProps): JSX.Element {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [focusedCard, setFocusedCard] = useState({});
  const [currentSort] = useState<string>(SortType.POPULAR);
  return (
    <>
      {getSortOffers(currentSort, offers).map((offer) => (
        <OfferCard
          offer={offer}
          key={offer.id}
          onHover={() => setFocusedCard(offer)}
        />))}
    </>
  );
}

export default OffersList;
