<template>
    <Layout class-prefix="money">
        <div class="types">
            <button :class="type === '-' && 'selected'">支出</button>
            <button :class="type === '+' && 'selected'">收入</button>
            <button class="cancel">取消</button>
        </div>
        <ul class="tags">
            <li v-for="(tag, index) in tagList" :key="index">
                <Icon :name="tag.name" class="icon"/>
                <span>{{tag.value}}</span>
            </li>
            <li>
                <Icon name="add" class="icon"/>
                <span>添加</span>
            </li>
        </ul>
        <div class="calculator">
            <div class="panel">
                <label class="note">
                    <Icon name="note" class="icon"/>
                    <span>备注:</span>
                    <input type="text" placeholder="写点备注吧~">
                </label>
                <div class="amount">0</div>
            </div>
            <div class="number-pad">
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>+</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>-</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button class="ok">完成</button>
                <button>.</button>
                <button>0</button>
                <button>
                    <Icon name="delete"/>
                </button>
            </div>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Layout from '@/components/Layout.vue';
    import Icon from '@/components/Icon.vue';

    @Component({
        components: {Icon, Layout}
    })
    export default class Money extends Vue {

        type = '-';

        get tagList() {
            return this.$store.state.tagList;
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/styles/style.scss';

    ::v-deep .money-layout-content {
        display: flex;
        flex-direction: column;
    }

    .types {
        background: #ffda47;
        display: flex;
        justify-content: center;
        position: relative;

        button {
            font-size: 20px;
            padding: 24px 16px 8px 16px;
            border: none;
            background: inherit;
            border-bottom: 1px solid transparent;

            &.selected {
                border-bottom: 1px solid #333333;
            }
            &.cancel {
                position: absolute;
                top: 50%;
                right: 0;
                transform: translateY(-50%);
                font-size: 14px;
            }
        }
    }

    .tags {
        flex-grow: 1;
        padding: 16px;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;

        > li {
            display: flex;
            flex-direction: column;
            align-items: center;
            font-size: 12px;

            .icon {
                width: 40px;
                height: 40px;
                padding: 4px;
                border-radius: 50%;
                background: #f5f5f5;
                margin-bottom: 4px;
            }
        }
    }

    .calculator {
        .panel {
            display: flex;
            align-items: center;
            border: 1px solid #dddddd;

            .note {
                width: 50%;
                display: flex;
                align-items: center;
                padding: 4px 8px;
                font-size: 14px;

                .icon {
                    margin-right: 8px;
                }
                input {
                    margin-left: 8px;
                    height: 32px;
                    border: none;
                }
            }
            .amount {
                width: 50%;
                padding: 6px 12px 4px 12px;
                font-size: 24px;
                font-family: Consolas, monospace;
                text-align: right;
            }
        }
        .number-pad {
            @extend %clear-fix;

            button {
                $h: 48px;
                float: left;
                width: 25%;
                height: $h;
                font-size: 16px;
                border: none;

                &.ok {
                    float: right;
                    height: $h*2;
                }

                $bg: #f2f2f2;

                &:nth-child(1) {
                    background: $bg;
                }

                &:nth-child(2), &:nth-child(5) {
                    background: darken($bg, 4%);
                }

                &:nth-child(3), &:nth-child(6), &:nth-child(9) {
                    background: darken($bg, 4*2%);
                }

                &:nth-child(4), &:nth-child(7), &:nth-child(10), &:nth-child(13) {
                    background: darken($bg, 4*3%);
                }

                &:nth-child(8), &:nth-child(11), &:nth-child(14) {
                    background: darken($bg, 4*4%);
                }

                &:nth-child(15) {
                    background: darken($bg, 4*5%);
                }

                &:nth-child(12) {
                    background: darken($bg, 4*6%);
                }
            }
        }
    }
</style>