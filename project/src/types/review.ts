export type ReviewType = {
  comment: string;
  date: string;
  id: string,
  rating: number,
  user: ReviewUser;
};

export type ReviewUser = {
  avatarUrl: string,
  id: string,
  isPro: boolean,
  name: string,
};
