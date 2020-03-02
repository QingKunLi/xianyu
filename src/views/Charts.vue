<template>
    <Layout>
        <header class="header">
<!--            <TabBar class-prefix="types" :bars="typeList" :c-bar.sync="type"/>-->
            <select :value="type" class="type">
                <option v-for="(t, index) in typeList" :key="index" :value="t.value">{{t.name}}</option>
            </select>
            <TabBar class-prefix="interval" :bars="intervalList" :c-bar.sync="interval" />
        </header>
        <div class="chart">
            <div class="caption">
                <span>本周</span>
            </div>
            <div class="total">总支出: ¥89.00</div>
            <div class="average">平均值: ¥12.71</div>
            <div id="figure"></div>
        </div>
        <div class="ranking">
            <div class="caption">
                <span>支出排行榜</span>
            </div>
            <ul class="tag-list">
                <li class="tag-item">
                    <div class="tag-info">
                        <div class="icon">
                            <Icon name="food"/>
                        </div>
                        <span>购物</span>
                        <span>84.3%</span>
                    </div>
                        <div>75</div>
                </li>
                <li class="tag-item">
                    <div class="tag-info">
                        <div class="icon">
                            <Icon name="food"/>
                        </div>
                        <span>购物</span>
                        <span>84.3%</span>
                    </div>
                        <div>75</div>
                </li>
            </ul>
        </div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Layout from '@/components/Layout.vue';
    import echarts from 'echarts';
    import TabBar from '@/components/TabBar.vue';
    import Icon from '@/components/Icon.vue';

    @Component({
        components: {Icon, TabBar, Layout}
    })
    export default class Charts extends Vue {

        typeList: TabBarItem[] = [
            {name: '支出', value: '-'},
            {name: '收入', value: '+'}
        ];
        intervalList: TabBarItem[] = [
            {name: '周', value: 'week'},
            {name: '月', value: 'month'},
            {name: '年', value: 'year'}
        ];

        type = '-';
        interval = 'week';

        mounted() {
            this.$store;
            const $figure = document.getElementById('figure');
            const figure = echarts.init($figure as HTMLDivElement);
            figure.setOption({
                xAxis: {
                    data: ['02-24', '02-25', '02-26', '02-27', '02-28', '02-29', '03-01'],
                    axisTick: {
                        interval: 0,
                        lineStyle: {
                            opacity: 0
                        }
                    },
                    axisLabel: {
                        interval: 0,
                        fontSize: 10,
                        color: '#999999'
                    }
                },
                yAxis: {
                    axisLine: {
                        lineStyle: {
                            opacity: 0
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            opacity: 0
                        }
                    },
                    // minInterval: Math.max(...this.array),
                    axisLabel: undefined,
                    axisTick: undefined
                },
                series: [{
                    name: '支出',
                    type: 'line',
                    data: this.array,
                }, {
                    name: '平均线',
                    type: 'line',
                    data: this.average,
                    symbol: 'none',
                    lineStyle: {
                        type: 'dashed',
                        color: '#999999',
                        width: 1,
                        opacity: 0.5
                    }
                }]
            });
        }

        get array(): number[] {
            return [0, 0, 100, 0, 0, 200, 0];
        }

        get average(): number[] {
            let aver = 0;
            let i: number;
            const averList: number[] = [];
            for (i = 0; i < this.array.length; i++) {
                aver += this.array[i];
            }
            aver = aver / this.array.length;
            for (i = 0; i < this.array.length; i++) {
                averList.push(aver);
            }
            return averList;
        }
    }
</script>

<style lang="scss" scoped>

    .header {
        background: #ffda47;
        padding: 4px 0;

        .type {
            font-size: 20px;
            padding: 4px 8px;
        }

        ::v-deep {
            .interval-tab-bar {
                margin: 8px 16px;
                display: flex;
                justify-content: center;
                .interval-tab-bar-item {
                    font-size: 14px;
                    width: 33%;
                    border: 1px solid #333333;

                    &:first-child {
                        border-radius: 4px 0 0 4px;
                    }
                    &:last-child {
                        border-radius: 0 4px 4px 0;
                    }
                    &.selected {
                        background: #333333;
                        color: #ffda47;
                    }
                }
            }
        }
    }
    .chart {
        padding: 6px 0;
        border-bottom: 1px solid #dddddd;
        .caption {
            border-bottom: 1px solid #dddddd;
            display: flex;
            span {
                border-bottom: 1px solid #333333;
                padding: 8px 16px;
                font-size: 14px;
            }
        }
        .total {
            font-size: 14px;
            color: #999999;
            text-align: left;
            padding: 6px 6px;
        }
        .average {
            font-size: 12px;
            color: #999999;
            text-align: left;
            padding: 0 6px;
            margin-bottom: 16px;
        }
        #figure {
            width: 100%;
            height: 150px;
        }
    }

    .ranking {
        .caption {
            text-align: left;
            font-size: 14px;
            padding: 6px 16px;
        }
        .tag-list {
            padding: 6px 16px;
            .tag-item {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 12px 0;
                box-shadow: inset 0 -1px 1px -1px rgba(0, 0, 0, 0.1);
                font-size: 14px;

                .tag-info {
                    display: flex;
                    align-items: center;
                    .icon {
                        background: #f5f5f5;
                        border-radius: 50%;
                        width: 32px;
                        height: 32px;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        margin-right: 8px;
                        svg {
                            width: 24px;
                            height: 24px;
                        }
                    }
                    span {
                        margin-right: 8px;
                        line-height: 32px;
                    }
                }
            }
        }
    }
</style>