<template>
    <nav>
        <router-link to="/bill" >
            <Icon name="bill"/>
        </router-link>
        <router-link to="/money">
            <Icon name="add" />
        </router-link>
        <router-link to="/charts">
            <Icon name="chart" />
        </router-link>
    </nav>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Icon from '@/components/Icon.vue';
    @Component({
        components: {Icon}
    })
    export default class Nav extends Vue {
    }
</script>

<style lang="scss" scoped>

</style>