<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="transparent"
      text-color="#fff"
      router
      :collapse="isCollapse"
    >
      <el-menu-item :index="item.path" v-for="(item, index) in menuList" :key="index">
        <i :class="item.iocn" style="color: #fff"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      menuList: [],
      isCollapse: false
    }
  },
  mounted() {
    this.$bus.$on("menuscaling", (value) => {
      this.isCollapse = value
      console.log(this.isCollapse)
    })
  },
  created() {
    let a = require("../../mock/common/menuDate.json")
    this.menuList = a.data
  }
}
</script>
<style lang="scss" scoped>
:deep(.el-menu-item) {
  &:hover {
    background-color: #fff;
  }
}
:deep(.el-menu-item) {
  background-color: red;
}
.el-menu {
  border: 0px;
}
</style>
