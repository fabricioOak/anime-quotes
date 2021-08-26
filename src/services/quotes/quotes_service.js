import ApiService from "../api_service";
import QuotesEndPoint from "../../utils/quotes_endpoint";

const QuotesService = {
  wait(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },
  async getOneRandomQuote() {
    return ApiService.get(QuotesEndPoint.getOneRandom);
  },
  async getTenRandomQuotes() {
    return ApiService.get(QuotesEndPoint.getTenRandoms);
  },
  async getQuoteByAnime(data) {
    return ApiService.get(QuotesEndPoint.getByAnime(data));
  },
  async getQuoteByCharacter(data) {
    return ApiService.get(QuotesEndPoint.getByCharacter(data));
  },
};

export default QuotesService;
