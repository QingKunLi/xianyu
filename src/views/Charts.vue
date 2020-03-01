<template>
    <Layout>
        <header>
            <div>
                <span>支出</span>
                <span>收入</span>
            </div>
            <div>
                <span>周</span>
                <span>月</span>
                <span>日</span>
            </div>
        </header>
        <div id="figure"></div>
    </Layout>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component} from 'vue-property-decorator';
    import Layout from '@/components/Layout.vue';
    import echarts from 'echarts';

    @Component({
        components: {Layout}
    })
    export default class Charts extends Vue {
        mounted() {
            this.$store
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
                } ,{
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
            })
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
                averList.push(aver)
            }
            return averList;
        }
    }
</script>

<style lang="scss" scoped>
    #figure {
        width: 100%;
        height: 150px;
        border: 1px solid red;
    }
</style>