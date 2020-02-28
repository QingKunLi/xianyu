<template>
    <Layout>
        money
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Layout from '@/components/Layout.vue';
    @Component({
        components: {Layout}
    })
    export default class Money extends Vue {
    }
</script>

<style lang="scss" scoped>

</style>