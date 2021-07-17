<template>
  <el-container style="height: 100%">
    <el-aside width="wuto">
        <common-aside></common-aside>
    </el-aside>

  <el-container>
    <el-header>
        <common-header></common-header>
    </el-header>
    <common-tab></common-tab>
    <el-main>
      <router-view/>
    </el-main>
  </el-container>
</el-container>  
</template>

<script>
import CommonAside from "../components/CommonAside.vue";
import CommonHeader from "../components/CommonHeader.vue";
import CommonTab from '../components/commonTab.vue';
export default {
   components:{CommonAside,CommonHeader, CommonTab}
}
</script>

<style lang="scss" scoped>
.el-header{
    background-color: #333;
}
</style>