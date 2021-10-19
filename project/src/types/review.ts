export type ReviewType = {
  comment: string;
  date: string;
  id: number,
  rating: number,
  user: ReviewUser;
};

export type ReviewUser = {
  avatarUrl: string,
  id: number,
  isPro: boolean,
  name: string,
};
