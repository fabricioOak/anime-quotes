import BaseEndPoint from "./base_endpoint";

const QuotesEndPoint = {
  getOneRandom: BaseEndPoint.URL + "/api/random",
  getTenRandoms: BaseEndPoint.URL + "/api/quotes",
  getByAnime: (data) => BaseEndPoint.URL + "/api/quotes/anime?title=" + data,
  getByCharacter: (data) =>
    BaseEndPoint.URL + "/api/quotes/character?name=" + data,
};

export default QuotesEndPoint;
