<template>
    <div class="edit">
        <header class="header">
            <button class="back">
                <Icon name="left"/>
            </button>
            <div class="tag">
                <div class="icon">
                    <Icon :name="record.tag.name"/>
                </div>
                <span>{{record.tag.value}}</span>
            </div>
            <div class="back"></div>
        </header>
        <main>
            <ul class="main">
                <li>
                    <label>
                        <span class="name">类型</span>
                        <input type="text" v-model="record.type">
                    </label>
                </li>
                <li>
                    <label>
                        <span class="name">金额</span>
                        <input type="text" v-model="record.amount">
                    </label>
                </li>
                <li>
                    <label class="date">
                        <span class="name">日期</span>
                        <DatePicker :initial-date="`2020-01-21T13:59:26.069Z`" @update:year="updateYear" @update:month="updateMonth" @update:date="updateDate"/>
                    </label>
                </li>
                <li>
                    <label>
                        <span class="name">备注</span>
                        <input type="text" v-model="record.note">
                    </label>
                </li>
            </ul>
        </main>
        <footer class="footer">
            <button>编辑完成</button>
            <button>删除</button>
        </footer>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import {Component, Watch} from 'vue-property-decorator';
    import Icon from '@/components/Icon.vue';
    import DatePicker from '@/components/DatePicker.vue';
    import dayjs from 'dayjs';

    @Component({
        components: {DatePicker, Icon}
    })
    export default class EditRecord extends Vue {
        record: RecordItem = {
            id: 1,
            tag: {name: 'food', value: '餐饮'},
            type: '-',
            note: '下馆子',
            amount: 50,
            createAt: new Date()
        }
        // created() {
        //
        // }

        updateYear(year: number) {
            this.record.createAt = dayjs(this.record.createAt).year(year).toDate();
        }
        updateMonth(month: number) {
            this.record.createAt = dayjs(this.record.createAt).month(month - 1).toDate();
        }
        updateDate(date: number) {
            this.record.createAt = dayjs(this.record.createAt).date(date).toDate();
        }

        @Watch('record.createAt')
        log(val: Date) {
            console.log(val);
        }
    }
</script>

<style lang="scss" scoped>
    .edit {
        position: relative;
        height: 100vh;
    }

    .header {
        background: #ffda47;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 8px 16px;

        .back {
            width: 32px;
            height: 32px;

            svg {
                width: 24px;
                height: 24px;
            }
        }

        .tag {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: center;
            font-size: 14px;

            .icon {
                background: #f5f5f5;
                padding: 8px;
                border-radius: 50%;
                margin-bottom: 8px;

                svg {
                    width: 32px;
                    height: 32px;
                }
            }
        }
    }

    .main {
        font-size: 16px;

        > li {
            margin-left: 16px;
            padding: 12px 0px 12px 16px;
            border-bottom: 1px solid #dddddd;

            > label {
                display: flex;
                align-items: center;

                .name {
                    color: #999999;
                    margin-right: 16px;
                }

                input {
                    flex-grow: 1;
                    height: 40px;
                    border: none;
                    font-size: inherit;
                }
            }
        }
    }

    .footer {
        position: absolute;
        bottom: 0;
        width: 100%;
        border-top: 1px solid #dddddd;
        padding: 0 16px;

        button {
            width: 50%;
            font-size: 14px;
            padding: 4px 0;
            margin: 12px 0;

            &:first-child {
                border-right: 1px solid #dddddd;
            }

            &:last-child {
                color: #b84e52;
            }
        }

    }
</style>