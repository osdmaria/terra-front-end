import Vue from "vue";
import Vuetify from "vuetify/lib/framework";

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        darkBlue: "#1572A1",
            lightBlue: "#9AD0EC",
            beige: "#EFDAD7",
            pink:"#E3BEC6",
            red  :"#EA7068",
            lightGrey:"F7F8FA",
      },
    }
  }
});

