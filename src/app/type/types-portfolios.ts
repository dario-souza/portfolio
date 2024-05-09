export type Projects = {
  portfolios: Portfolio[];
};

export type Portfolio = {
  id: string;
  title: string;
  subtitle: string;
  repo: string;
  url: string;
  description: string;
  img: string;
};
