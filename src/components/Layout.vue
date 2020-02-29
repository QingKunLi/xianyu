<template>
    <div class="layout">
        <div class="layout-content" :class="`${classPrefix}-layout-content`">
            <slot></slot>
        </div>
        <Nav />
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Prop} from 'vue-property-decorator';
    import Nav from '@/components/Nav.vue';
    @Component({
        components: {Nav}
    })
    export default class Layout extends Vue {
        @Prop(String) classPrefix?: string;
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