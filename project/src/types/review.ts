export type ReviewType = {
  comment: string;
  date: string;
  id: string | number,
  rating: number,
  user: ReviewUser;
};

export type ReviewUser = {
  avatarUrl: string,
  id: string | number,
  isPro: boolean,
  name: string,
};
