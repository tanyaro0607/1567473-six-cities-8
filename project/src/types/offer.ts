export type OfferType = {
  bedrooms: number;
  city: OfferCity;
  description: string;
  goods: string[];
  host: OfferHost;
  id: string | number;
  images: string[],
  isFavorite: boolean,
  ['is_favorite']?: boolean,
  isPremium: boolean,
  ['is_premium']?: boolean,
  location: OfferLocation;
  maxAdults: number,
  ['max_adults']?: number,
  previewImage: string,
  ['preview_image']?: string,
  price: number,
  rating: number,
  title: string,
  type: string,
};

export type OfferLocation = {
  latitude: number,
  longitude: number,
  zoom: number,
};

export type OfferCity = {
  location: {
    latitude: number,
    longitude: number,
    zoom: number,
  },
  name: string,
};

export type OfferHost = {
    avatarUrl: string,
    ['avatar_url']?: string,
    id: string | number,
    isPro: boolean,
    ['is_pro']?: boolean,
    name: string,
};
