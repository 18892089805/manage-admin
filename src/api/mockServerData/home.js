import Mock from 'mockjs'   //模拟数据

//图表数据
let List = []
export default {
    getStatisticalData: () => {
        Mock.Random.float //产生随机数据
        for (let i = 0; i < 7; i++) {
            List.push(
                Mock.mock({
                    苹果: Mock.Random.float(100, 800, 0, 0),
                    vivo: Mock.Random.float(100, 800, 0, 0),
                    oppo: Mock.Random.float(100, 800, 0, 0),
                    魅族: Mock.Random.float(100, 800, 0, 0),
                    三星: Mock.Random.float(100, 800, 0, 0),
                    小米: Mock.Random.float(100, 800, 0, 0),
                    苹果: Mock.Random.float(100, 800, 0, 0),
                })
            )
        }
        return {
            code: 2000,
            data: {
                //饼图
                videoData: [
                    {
                        name: '小米',
                        value: '2999'
                    },
                    {
                        name: '苹果',
                        value: '5999'
                    },
                    {
                        name: 'vivo',
                        value: '1999'
                    },
                    {
                        name: 'oppo',
                        value: '999'
                    },
                    {
                        name: '魅族',
                        value: '2900'
                    },
                    {
                        name: '三星',
                        value: '2988'
                    }
                ],
                //柱状图
                userData: [
                    {
                        date: '周一',
                        new: 5,
                        active: 100
                    },
                    {
                        date: '周二',
                        new: 7,
                        active: 200
                    },
                    {
                        date: '周三',
                        new: 19,
                        active: 300
                    },
                    {
                        date: '周四',
                        new: 28,
                        active: 500
                    },
                    {
                        date: '周五',
                        new: 56,
                        active: 700
                    },
                    {
                        date: '周六',
                        new: 66,
                        active: 600
                    }, 
                    {
                        date:'周日',
                        new:78,
                        active:800
                    }
                ],
                //折线图
                orderData:{
                    date:['20201212','20201213','20201214','20201215','20201216','20201217','20201218'],
                    data:List
                },
                tableData:[
                    {
                        name:'oppo',
                        todayBuy:500,
                        monthBuy:3400,
                        totalBuy:3500
                     },
                     {
                        name:'vivo',
                        todayBuy:500,
                        monthBuy:3400,
                        totalBuy:3500
                     },
                     {
                        name:'苹果',
                        todayBuy:500,
                        monthBuy:3400,
                        totalBuy:3500
                     },
                     {
                        name:'小米',
                        todayBuy:500,
                        monthBuy:3400,
                        totalBuy:3500
                     },
                     {
                        name:'魅族',
                        todayBuy:500,
                        monthBuy:3400,
                        totalBuy:3500
                     },
                     {
                        name:'三星',
                        todayBuy:500,
                        monthBuy:3400,
                        totalBuy:3500
                     },                    
                ]
            }
        }

    }
}
