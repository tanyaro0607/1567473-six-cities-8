import OfferCard from '../offer-card/offer-card';
import {OfferType} from '../../types/offer';

type OffersListProps = {
  offers: OfferType[];
}

function OffersList({offers}: OffersListProps): JSX.Element {
  return (
    <>
      {offers.map((offer) => (<OfferCard offer={offer} key={offer.id}/>))}
    </>
  );
}

export default OffersList;
