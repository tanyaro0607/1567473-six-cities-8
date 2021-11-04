import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap/useMap';
import { OfferType, OfferCity } from '../../types/offer';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { Icon, Marker } from 'leaflet';

type MapProps = {
  city: OfferCity;
  offers: OfferType[];
  selectedOffer?: OfferType | null;
  fixedOfferMarkerId?: number;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

function Map({offers, city, selectedOffer, fixedOfferMarkerId}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  if (fixedOfferMarkerId && map) {
    offers = offers.filter((offer) => {
      if (offer.id === fixedOfferMarkerId) {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(currentCustomIcon)
          .addTo(map);
      }
      return offer.id !== fixedOfferMarkerId;
    });
  }

  useEffect(() => {
    if (map) {
      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        });

        marker
          .setIcon(selectedOffer && offer.id === selectedOffer.id ? currentCustomIcon : defaultCustomIcon)
          .addTo(map);
      });
    }
  }, [city, map, offers, selectedOffer]);

  return (
    <div
      style={{height: '100%'}}
      ref={mapRef}
    >
    </div>
  );
}

export default Map;
