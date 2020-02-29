import Vue from 'vue';
import Vuex from 'vuex';
import {defaultTags} from '@/constants/defaultTags';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        tagList: defaultTags,
        recordList: JSON.parse(window.localStorage.getItem('record-list') || '[]') as RecordItem[],
    },
    mutations: {
        insertRecord(state, record: RecordItem) {
            record.createAt = new Date();
            state.recordList.push(record);
            store.commit('saveRecord');
        },
        saveRecord(state) {
            window.localStorage.setItem('record-list', JSON.stringify(state.recordList));
        }
    }
});

export default store;