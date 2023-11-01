export const URL = "https://api.themoviedb.org/3/";
export const API_KEY = "00cc4b4770c22d9316433c56df5c5eae";

export const URLS = {
  trending: "/trending/all/day",
  oridinals: "/discover/movie?sort_by=popularity.desc",
  rated: "/movie/top_rated",
  action: "/discover/movie?with_genres=28",
  comedy: "/discover/movie?with_genres=35",
  horror: "/discover/movie?with_genres=27",
  romance: "/discover/movie?with_genres=10749",
  documentaries: "/discover/movie?with_genres=99",
};

export const RowData = [
  {
    title: "Trending",
    url: URLS.trending,
  },
  {
    title: "Oridinals",
    url: URLS.oridinals,
  },
  {
    title: "Rated",
    url: URLS.rated,
  },
  {
    title: "Action",
    url: URLS.action,
  },
  {
    title: "Comedy",
    url: URLS.comedy,
  },
  {
    title: "Horror",
    url: URLS.horror,
  },
  {
    title: "Romance",
    url: URLS.romance,
  },
  {
    title: "Documentaries",
    url: URLS.documentaries,
  },
];
