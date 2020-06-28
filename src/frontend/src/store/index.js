import Vue from 'vue';
import Vuex from 'vuex';
import auth from "./auth";
import review from "./review";

Vue.use(Vuex);

export const store = new Vuex.Store({
    modules: {
        auth,
        review
    }

})