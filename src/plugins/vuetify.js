import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: "#ff6450",
        darker: "#f6604f",
        lighter: "#ff7261",
        secondary: "#270d93",
        accent: "#82B1FF",
        error: "#FF5252",
        info: "#2196F3",
        success: "#4CAF50",
        warning: "#FFC107",
        textInfo: "#9d9d9d"
      }
    }
  }
});
