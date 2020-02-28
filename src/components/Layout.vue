<template>
    <div class="layout">
        <div class="layout-content">
            <slot></slot>
        </div>
        <Nav />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Nav from '@/components/Nav.vue';
    @Component({
        components: {Nav}
    })
    export default class Layout extends Vue {
    }
</script>

<style lang="scss" scoped>
    .layout {
        display: flex;
        flex-direction: column;
        min-height: 100vh;
        &-content {
            flex-grow: 1;
        }
    }
</style>