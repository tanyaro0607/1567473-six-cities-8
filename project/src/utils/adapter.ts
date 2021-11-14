import {OfferType} from '../types/offer';
import { BackOffer } from '../types/back-offer';

export const adaptOfferToClient = (data: BackOffer): OfferType => {
  const newLocal = data.host.avatar_url;
  const adaptedData = Object.assign(
    {},
    data,
    {
      isFavorite: data.is_favorite,
      isPremium: data.is_premium,
      maxAdults: data.max_adults,
      previewImage: data.preview_image,
      host: {
        avatarUrl: newLocal,
        isPro: data.host.is_pro,
      },
    },
  ) as OfferType;

  delete adaptedData.is_favorite;
  delete adaptedData.is_premium;
  delete adaptedData.max_adults;
  delete adaptedData.preview_image;
  delete adaptedData.host.is_pro;
  delete adaptedData.host.avatar_url;

  return adaptedData;
};

export const adaptOffersToClient = (data: BackOffer[]): OfferType[] => (
  data.map((item): OfferType => (
    adaptOfferToClient(item)
  ))
);
