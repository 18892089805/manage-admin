<template>
<!-- 图表展示在这个div中 -->
    <div style="height:100%" ref="echarts">ecarts</div>
</template>

<script>
import * as echarts from 'echarts/lib/echarts';
export default {
    //接受父类两个数据，1、chartData 2、isAxisChart 
    props:{
      chartData:{
        type:Object,
        default(){
            return {
                xData:[],
                series:[]
            };
        },
    },
       isAxisChart:{
           type:Boolean,
           default:true
        },
},
computed:{
//计算是有X轴 还是没有
options(){
    return this.isAxisChart ? this.axiosOption : this. normalOption;
},
},
watch:{
    //监听chartData数据
    chartData:{
        handler:function(){
            this.initChart();
        },
        deep:true,
    },
},  
    data(){
        return{         
           echart:null,
           axiosOption:{
               legend:{
                   textStyle:{
                       color:'#333',
                   },
               },
               grid:{
                   left:"20%"
               },
               tooptip:{
                   trigger:"axis"
               },
               xAxis:{
                   type:"category",
                   data:[],
                   axisLine:{
                       lineStyle:{
                           color:"#17b3a3"
                       },
                   },
                   axisLabel:{
                       color:"#333"
                   },
               },
               yAxis:[{
                   axisLine:{
                       lineStyle:{
                           color:"#17b3a3"
                       },
                   },
               },
            ],
            color:[
                "#111",
                "#222",
                "#333",
                "#444",
                "#555",
                "#666",
                "#777",
                "#888",
                "#999",
                "#123",
                "#234",
                "#345",
                "#456",
                "#567",
                "#678",
                "#789",
                "#356",
                "#675",
                "#241",
                "#125",
            ],
            series:[],
           },
           normalOption:{
               tooptip:{
                   trigger:"item",
                   color:[  '#55A8FD','#5FDAC7','#FA7D7D','#AEB3B8','#92C789','#6A6A6A','#6B6B6B'],
                   series:[],             }
           },
        };
    },

    methods:{
        initChart(){
            //获取处理好的数据
            this.initChartData();
            if(this,echart){
                this.echart.setOption(this.options);
            }else{
                this.echartc= echarts.init(this.$ref.echart)
                this.echart.setOption(this.options);
            }
        },
        //处理好数据
        initChartData(){
            if(this.isAxisChart){
                this.axiosOption.xAxis.data = this.chartData.XData;
                this.axiosOption.series =this.chartData.series;
            }else{
                this.normalOption.series = this.chartData.series;
            }
        },
        resizeChart(){
            this.echart ? this.echart.resize():"";
        },
    },
    mounted(){
        window.addEventListener("resize",this.resizeChart);
    },
    destoryed(){
        window.removeEventListener("resize",this.resizeChart);
    },
};
</script>   
<style lang="scss" scoped
</style> 