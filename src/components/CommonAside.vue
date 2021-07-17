<template>
  <!-- collapse 是否水平折叠收起 -->
  <el-menu :collapse="isCollapse" :default-active="$router.path" class="el-menu-vertical-demo"
            background-color="#545c64" text-color="#fff" active-text-color="#ffd04b" >
    <!-- 是否水平折叠收起菜单 会影响这里的字段显示 -->
    <h3 v-show="isCollapse">点津</h3>
    <h3 v-show="!isCollapse">后台管理系统</h3>

    <el-menu-item :index="item.path" v-for="item in noChildren" :key="item.path" @click="clickMenu(item)">
      <i :class="'el-icon-' + item.icon"></i>
      <span slot="title">{{ item.label }}</span>
    </el-menu-item>

    <!-- 二级菜单 -->
    <el-submenu :index="item.label" v-for="(item, index) in hasChildren" :key="index" >
      <template slot="title">
        <i :class="'el-icon-' + item.icon"></i>
        <span slot="title">{{ item.label }}</span>
      </template>
      <el-menu-item-group>
        <el-menu-item :inex="subItem.path" v-for="(subItem, subIndex) in item.children" 
                      :key="subIndex" @click="clickMenu(subItem)">
          <i :class="'el-icon-' + item.icon"></i>
          <span slot="title">{{ subItem.label }}</span>
        </el-menu-item>
      </el-menu-item-group>
    </el-submenu>

  </el-menu>
</template>

<script>
export default {
  //计算属性
  computed: {
    //没有子菜单
    noChildren() {
      return this.menu.filter((item) => !item.children);
    },
    //有子菜单（这样存在问题，有子菜单的永远在没有子菜单的下面）
    hasChildren() {
      return this.menu.filter((item) => item.children); //有子菜单返回下面的children
    },
    isCollapse() {
      //这里的数据从vueX取得 vuex的文件夹在store目录下
      return false;
      return this.$store.state.isCollapse;  //在相关目录
    },
  },
  // 数据是写死的
  data() {
    return {
      menu: [
        {
          path: "/user",
          name: "user",
          label: "用户管理",
          icon: "user",
          url: "UserManage/UserMansge",
        },
        {
          label: "其他",
          icon: "location",
          children: [
            {
              path: "/page1",
              name: "page1",
              label1: "页面1",
              icon: "setting",
              url: "Other/PageOne",
            },
            {
              path: "/page2",
              name: "page2",
              label1: "页面2",
              icon: "setting",
              url: "Other/PageTwo",
            },
          ],
        },
      ],
    };
  },

  methods: {
    //跳转路由 根据名称跳转
    clickMenu(item) {
      this.$router.push({ name: item.name });
      this.$store.commit("selectMenu",item); //跨组件  首选vueX 管理
    },
  },
};
</script>

<style lang="scss" scoped>
.el-menu{
    height: 100%;
    border:none;
    h3{
        color: #ffffff;
        text-align: center;
        line-height: 48px;
    }
}
.el-menu-vertical-demo:not(.el-menu--collapse){
    width: 200px;
    min-height: 400px;
}
</style>