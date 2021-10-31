import 'leaflet/dist/leaflet.css';
import { useEffect, useRef } from 'react';
import useMap from '../../hooks/useMap/useMap';
import { OfferType, OfferCity } from '../../types/offer';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import leaflet, { Icon, Marker } from 'leaflet';

type MapProps = {
  city: OfferCity;
  offers: OfferType[];
  selectedPoint?: number,
}

function Map({offers, city, selectedPoint}: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, city);

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

  useEffect(() => {
    if (map) {
      const markers:Marker[] = [];
      offers.forEach((offer) => {
        const marker = leaflet.marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude,
        }, {
          icon: selectedPoint !== undefined && selectedPoint === offer.id ? currentCustomIcon : defaultCustomIcon,
        }).addTo(map);
        markers.push(marker);
      });

      return () => {
        if(markers.length > 0) {
          markers.forEach((item, index) => {
            map.removeLayer(markers[index]);
          });
        }
      };
    }
  },[map, offers, selectedPoint]);


  return (
    <div
      style={{minHeight: '100%'}}
      ref={mapRef}
    >
    </div>

  );
}

export default Map;
