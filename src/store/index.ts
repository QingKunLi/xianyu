import Vue from 'vue';
import Vuex from 'vuex';
import defaultTags from '@/constants/defaultTags';

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        tagList: defaultTags
    },
    mutations: {}
});
