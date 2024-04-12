<template>
  <div class="root">
    <div class="left">
      <span class="el-icon-s-fold" @click="menuscaling"></span>
      <span>江苏传智播客教育科技股份有限公司</span>
      <p>体验版</p>
    </div>
    <div class="right">
      <el-tooltip class="item" effect="dark" content="站内搜索" placement="bottom">
        <span class="el-icon-search"></span>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="全屏" placement="bottom">
        <span class="el-icon-full-screen" @click="enterFullscreen"></span>
      </el-tooltip>
      <el-tooltip class="item" effect="dark" content="多语音" placement="bottom">
        <el-dropdown trigger="click">
          <img src="../../assets/common/翻译.png" alt="" />
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>中文</el-dropdown-item>
            <div><el-dropdown-item>English</el-dropdown-item></div>
          </el-dropdown-menu>
        </el-dropdown>
      </el-tooltip>

      <div class="color">
        <span class="el-icon-arrow-down"></span>
      </div>
      <el-dropdown>
        <span class="el-dropdown-link"> 管理员<i class="el-icon-arrow-down el-icon--right"></i> </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>首页</el-dropdown-item>
          <div @click="gologin"><el-dropdown-item>退出登录</el-dropdown-item></div>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>
<script>
import { removeToken } from "../../utils/js-cookie"
import { userApi } from "@/api/api"
export default {
  data() {
    return {
      isCollapse: true
    }
  },

  methods: {
    gologin() {
      removeToken()
      this.$router.push("/login")
    },
    enterFullscreen() {
      const element = document.documentElement
      if (element.requestFullscreen) {
        element.requestFullscreen()
      } else if (element.mozRequestFullScreen) {
        element.mozRequestFullScreen()
      } else if (element.webkitRequestFullscreen) {
        element.webkitRequestFullscreen()
      } else if (element.msRequestFullscreen) {
        element.msRequestFullscreen()
      }
    },
    menuscaling() {
      if (this.isCollapse) {
        this.$bus.$emit("menuscaling", this.isCollapse)
        this.isCollapse = !this.isCollapse
      } else {
        this.$bus.$emit("menuscaling", this.isCollapse)
        this.isCollapse = !this.isCollapse
      }
    }
  },

  created() {
    userApi().then((res) => {
      console.log(res)
    })
  }
}
</script>
<style lang="scss" scoped>
.root {
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.left {
  display: flex;
  color: #fff;
  align-items: center;
  p {
    width: 60px;
    height: 30px;
    background-color: #84a9fe;
    text-align: center;
    line-height: 30px;
    border-radius: 13px;
    font-size: 12px;
    margin-left: 15px;
  }
}
.right {
  width: 230px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: #fff;
  img {
    width: 18.82px;
    height: 18.82px;
  }
  .el-dropdown {
    color: #fff;
  }
  .color {
    width: 36px;
    height: 36px;
    background-color: #84a9fe;
    text-align: center;
    line-height: 36px;
  }
}
</style>
