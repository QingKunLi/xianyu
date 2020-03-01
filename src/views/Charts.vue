<template>
    <Layout>
        <header class="header">
            <TabBar class-prefix="types" :bars="typeList" :c-bar.sync="type"/>
            <TabBar class-prefix="interval" :bars="intervalList" :c-bar.sync="interval" />
        </header>
        <div id="figure"></div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Layout from '@/components/Layout.vue';
    import echarts from 'echarts';
    import TabBar from '@/components/TabBar.vue';

    @Component({
        components: {TabBar, Layout}
    })
    export default class Charts extends Vue {

        typeList: TabBarItem[] = [
            {name: '支出', value: '+'},
            {name: '收入', value: '-'}
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
            return [0, 0, 0, 0, 0, 6, 0];
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
        border: 1px solid red;
        background: #ffda47;

        ::v-deep {
            .types-tab-bar {
                border: 1px solid red;
            }
        }
    }

    #figure {
        width: 100%;
        height: 150px;
        border: 1px solid red;
    }
</style>