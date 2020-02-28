<template>
    <Layout>
        <header class="header">
            <div class="logo">
                <img :src="logo" alt="咸鱼记账"/>
            </div>
            <div class="info">
                <div class="calendar">
                    <div class="label">2020年</div>
                    <div class="value"><span>02</span>月</div>
                </div>
                <div class="total">
                    <div>
                        <div class="label">收入</div>
                        <div class="value">
                            <span>0</span>.00
                        </div>
                    </div>
                    <div>
                        <div class="label">支出</div>
                        <div class="value">
                            <span>0</span>.00
                        </div>
                    </div>
                    <div></div>
                </div>
            </div>
        </header>
        <ul class="record">
            <li>
                <div class="title">
                    <span>02月28日 星期五</span>
                    <span>支出: 9</span>
                </div>
                <div class="item">
                    <div class="tag">
                        <Icon name="food" class="icon"/>
                        <span>餐饮</span>
                    </div>
                    <span>-9</span>
                </div>
            </li>
        </ul>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Layout from '@/components/Layout.vue';
    import logo from '@/assets/logo.png';
    import Icon from '@/components/Icon.vue';

    @Component({
        components: {Icon, Layout}
    })
    export default class Bill extends Vue {
        logo: string = logo;
    }
</script>

<style lang="scss" scoped>
    .header {
        background: #ffda47;

        .logo {
            img {
                height: 30px;
                vertical-align: top;
                margin-left: auto;
                margin-right: auto;
            }
        }

        .info {
            display: flex;
            align-items: center;
            padding: 4px 0;

            .label {
                font-size: 12px;
                color: #a38932;
                margin-bottom: 4px;
            }
            .value {
                span {
                    font-size: 18px;
                }
                font-size: 12px;
            }

            .calendar {
                position: relative;
                padding: 4px 16px;

                .month {
                    font-size: 24px;
                }

                &::after {
                    content: '';
                    display: block;
                    width: 1px;
                    height: 24px;
                    background: #333333;
                    position: absolute;
                    top: 50%;
                    right: 0;
                    transform: translateY(-50%);
                }
            }
            .total {
                flex-grow: 1;
                display: flex;
                justify-content: space-between;
                padding: 4px 16px;
            }
        }
    }
    .record {
        > li {
            .title {
                font-size: 12px;
                color: #999999;
                display: flex;
                justify-content: space-between;
                padding: 4px 16px;
                border-bottom: 1px solid #dddddd;
            }
            .item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 16px;
                box-shadow: inset 0 -0.5px 0.5px -0.5px rgba(0, 0, 0, 0.2);

                .tag {
                    display: flex;
                    align-items: center;
                    .icon {
                        background: #f5f5f5;
                        width: 30px;
                        height: 30px;
                        padding: 4px;
                        border-radius: 50%;
                        margin-right: 16px;
                    }
                }
            }
        }
    }
</style>