import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#6e5b9a",
        secondary: "#b28ead",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107"
      },
      dark: {
        primary: "#4a148c",
        secondary: "#f50057",
        accent: "#ff6f00",
        error: "#f44336",
        warning: "#ff9800",
        info: "#2196f3",
        success: "#4caf50"
      }
    }
  }
});

