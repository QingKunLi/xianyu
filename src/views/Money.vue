<template>
    <div class="money">
        <div class="types">
            <button :class="type === '-' && 'selected'" @click="select('-')">支出</button>
            <button :class="type === '+' && 'selected'" @click="select('+')">收入</button>
            <button class="cancel" @click="cancel">取消</button>
        </div>
        <TagList class-prefix="money" :tag.sync="tag" class="tag-list"/>
        <Calculator class-prefix="money"/>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Layout from '@/components/Layout.vue';
    import Icon from '@/components/Icon.vue';
    import Calculator from '@/components/Money/Calculator.vue';
    import TagList from '@/components/Money/TagList.vue';

    @Component({
        components: {TagList, Calculator, Icon, Layout}
    })
    export default class Money extends Vue {

        type = '-';
        tag: TagItem = {name: 'food', value: '餐饮'};

        get tagList(): TagItem[] {
            return this.$store.state.tagList;
        }

        select(type: string) {
            this.type = type;
        }
        cancel() {
            this.$router.replace('/bill')
        }
    }
</script>

<style lang="scss" scoped>
    @import '~@/assets/styles/style.scss';

    ::v-deep {
        .money-calculator {
            position: fixed;
            bottom: 0;
            left: 0;
            width: 100vw;
        }
    }
    .money {
        .tag-list {
            padding-bottom: 40+56*4+12px;
        }
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



</style>