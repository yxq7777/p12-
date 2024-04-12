<template>
  <div>
    <div class="fast">
      <div class="fast-a">快速开始/便捷导航</div>
      <div class="fast-button">
        <el-button>人事月报</el-button><el-button>考勤查询</el-button><el-button>考勤统计</el-button><br />
        <el-button>员工审核</el-button><el-button>组织架构</el-button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.fast {
  width: 100%;
  height: 229px;
  background-color: #fff;
  margin-bottom: 20px;
  margin-top: 20px;
  padding-left: 30px;
  .fast-a {
    width: 220.4px;
    font-size: 25px;
    border-bottom: 5px solid #8a97f8;
    height: 60px;
    line-height: 60px;
  }
  .fast-button {
    .el-button {
      width: 135px;
      height: 50px;

      margin-top: 10px;
    }
  }
}
</style>
