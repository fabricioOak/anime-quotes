import QuotesService from "../../../services/quotes/quotes_service";

export default {
  state: {
    loading: false,
    data: null,
  },
  mutations: {
    set_loading(state, isLoading) {
      state.loading = isLoading;
    },
    set_quote_data(state, data) {
      state.data = data;
    },
  },
  actions: {
    get_one_quote({ commit }) {
      return new Promise((resolve, reject) => {
        commit("set_loading", true);
        QuotesService.getOneRandomQuote()
          .then((res) => {
            commit("set_loading", false);
            resolve(res.data);
          })
          .catch((err) => {
            commit("set_loading", false);
            reject(err.response);
          });
      });
    },
    get_ten_quotes({ commit }) {
      return new Promise((resolve, reject) => {
        commit("set_loading", true);
        QuotesService.getTenRandomQuotes()
          .then((res) => {
            commit("set_loading", false);
            resolve(res.data);
          })
          .catch((err) => {
            commit("set_loading", false);
            reject(err.response);
          });
      });
    },
    get_quote_by_anime({ commit }, { data }) {
      return new Promise((resolve, reject) => {
        commit("set_loading", true);
        QuotesService.getQuoteByAnime(data)
          .then((res) => {
            commit("set_loading", false);
            resolve(res.data);
          })
          .catch((err) => {
            commit("set_loading", false);
            reject(err.response);
          });
      });
    },
    get_quote_by_character({ commit }, { data }) {
      return new Promise((resolve, reject) => {
        commit("set_loading", true);
        QuotesService.getQuoteByCharacter(data)
          .then((res) => {
            commit("set_loading", false);
            resolve(res.data);
          })
          .catch((err) => {
            commit("set_loading", false);
            reject(err.response);
          });
      });
    },
  },
};
