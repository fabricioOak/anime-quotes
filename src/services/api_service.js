import Vue from "vue";
import axios from "axios";
import BaseEndpoint from "../utils/base_endpoint";

const ApiService = {
  init() {
    Vue.prototype.$http = axios;
    Vue.prototype.$http.defaults.baseURL = BaseEndpoint.URL;
  },

  setHeader(header) {
    Vue.prototype.$http.defaults.headers = header;
  },

  get(api) {
    return Vue.prototype.$http.get(api);
  },

  post(api, data) {
    return Vue.prototype.$http.post(api, data);
  },

  update(api, data) {
    return Vue.prototype.$http.put(api, data);
  },

  put(api, data) {
    return Vue.prototype.$http.put(api, data);
  },

  delete(api) {
    return Vue.prototype.$http.delete(api);
  },
};

export default ApiService;
