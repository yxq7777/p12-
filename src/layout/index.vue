<template>
  <div>
    <el-container>
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="image"><img src="../assets/common//logo.png" alt="" :class="isCollapse ? 'b' : 'a'" /></div>
        <menus></menus>
      </el-aside>
      <el-container>
        <el-header style="height: 50px">
          <headnaviGation></headnaviGation>
        </el-header>
        <el-main>
          <router-view />
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<script>
import menus from "./component/LayoutMenu"
import headnaviGation from "./component/LayoutGation.vue"
export default {
  name: "LaYout",
  components: { menus, headnaviGation },
  data() {
    return {
      isCollapse: false
    }
  },
  mounted() {
    this.$bus.$on("menuscaling", (value) => {
      this.isCollapse = value
      console.log(this.isCollapse)
    })
  }
}
</script>
<style lang="scss" scoped>
.el-aside {
  height: 100vh;
  background-image: linear-gradient(0deg, rgb(66, 115, 249) 0%, rgb(90, 139, 255) 100%);
  transition: all 0.5s;
}
.image {
  width: 100%;
  height: 60px;
  text-align: center;
  .a {
    width: 90%;
    height: 60px;
    margin-top: 10px;
  }
  .b {
    width: 32px;
    height: 12.56px;
  }
}
.el-header {
  background-color: #4878fa;
}
.el-main {
  height: calc(100vh - 60px);
  overflow: auto;
  background-color: #ccc;
  padding: 10px;
}
</style>
