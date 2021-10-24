import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap/useMap';
import { OfferType, OfferCity } from '../../types/offer';
// import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import { URL_MARKER_DEFAULT } from '../../const';
import { Icon, Marker } from 'leaflet';

type MapProps = {
  city: OfferCity;
  offers: OfferType[];
  // selectedPoint: OfferType | undefined;
}

function Map({offers, city}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

  const defaultCustomIcon = new Icon({
    iconUrl: URL_MARKER_DEFAULT,
    iconSize: [40, 40],
    iconAnchor: [20, 40],
  });

  // const currentCustomIcon = new Icon({
  //   iconUrl: URL_MARKER_CURRENT,
  //   iconSize: [40, 40],
  //   iconAnchor: [20, 40],
  // });

  useEffect(() => {
    if(map) {
      offers.forEach((offer) => {
        const {location} = offer;
        const marker = new Marker({
          lat: location.latitude,
          lng: location.longitude,
        });

        marker
          .setIcon(
            // selectedPoint !== undefined && offer.id === selectedPoint.id
            // ? currentCustomIcon
            // : defaultCustomIcon,
            defaultCustomIcon,
          )
          .addTo(map);
      });
    }
  }, [map, offers]);


  return (
    <div
      style={{minHeight: '100%'}}
      ref={mapRef}
    >
    </div>

  );
}

export default Map;
