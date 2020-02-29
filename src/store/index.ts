import Vue from 'vue';
import Vuex from 'vuex';
import {defaultTags} from '@/constants/defaultTags';

Vue.use(Vuex);

const store = new Vuex.Store({
    state: {
        tagList: (JSON.parse(window.localStorage.getItem('tag-list') || '0') || defaultTags) as TagItem[],
        recordList: JSON.parse(window.localStorage.getItem('record-list') || '[]') as RecordItem[],
        tagListError: ''
    },
    mutations: {
        insertRecord(state, record: RecordItem) {
            record.createAt = new Date();
            state.recordList.push(record);
            store.commit('saveRecord');
        },
        saveRecord(state) {
            window.localStorage.setItem('record-list', JSON.stringify(state.recordList));
        },
        insertTag(state, tag: TagItem) {
            state.tagListError = '';
            const names = state.tagList.map(item => item.name);
            if (names.indexOf(tag.name) >= 0) {
                state.tagListError = 'duplicate';
                return;
            } else {
                state.tagList.push(tag);
                store.commit('saveTag');
            }
        },
        saveTag(state) {
            window.localStorage.setItem('tag-list', JSON.stringify(state.tagList));
        }
    }
});

export default store;