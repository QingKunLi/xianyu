<template>
    <Layout>
        <select v-model="date" class="test">
            <option value="1">01月</option>
            <option value="2">02月</option>
            <option value="3">03月</option>
            <option value="4">04月</option>
            <option value="5">05月</option>
            <option value="6">06月</option>
            <option value="7">07月</option>
            <option value="8">08月</option>
            <option value="9">09月</option>
            <option value="10">10月</option>
            <option value="11">11月</option>
            <option value="12">12月</option>
        </select>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Layout from '@/components/Layout.vue';
    @Component({
        components: {Layout}
    })
    export default class Charts extends Vue {
        date = '1';
    }
</script>

<style lang="scss" scoped>
    select {
        border: 1px solid red;
        //清除select聚焦时候的边框颜色
        outline: none;
        //隐藏select的下拉图标
        appearance: none;
        -webkit-appearance: none;
        -moz-appearance: none;
        padding: 4px 8px;
        font-size: 16px;

    }
</style>