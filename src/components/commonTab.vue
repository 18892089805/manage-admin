<template>
    <div class="tabs">
        <el-tag
        :key="tag.name"
        size="small"
        v-for="(tag,index) in tags"
        :closeable="tag.name !=='home'"
        :disable-transition="false"
        @close="handleClose(tag,index)"
        @click="changeMenu(tag)"
        :effect="$route.name === tag.name ?'dark':'plain'"
        >{{tag.lable}}
        </el-tag>
    </div>
</template>
<script>
import { mapState,mapMutations } from 'vuex';
export default{
    computed:{
        //获取vuex标签
        ...mapState({
            tags:(state) =>state.tabsList,
        }),
    },
    methods:{
        ...mapMutations({
            close:"closeTab"
        }),
        //关闭标签
        handleClose(tag,index){
            let length = this.tags.l -1;
            //vuex调用方法的另一种写法
            this.close(tag);
            //如果关闭的标签不事当前路由的话，就不跳转
            if(tag.name !==this.$route.name){
                return;
            }
            //关闭的标签事最右边的一个的话，往左跳转一个，否则往有跳转
            if(index === length){
                this.$route.push({name:this.tags[index-1].name})
            }else{
                 this.$route.push({name:this.tags[index].name})
            }
        },
        //选择标签调转路由
        changeMenu(item){
             this.$route.push({name:item.name})
             this.$route.commit("selectMenu",item);
        },
    },
};
</script>
<style lang="scss" scoped>
.tabs{
    padding:20px;
    .el-tag{
        margin-right: 15px;
        cursor: pointer;
    }
}
</style>
