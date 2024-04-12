<template>
  <div>
    <div class="flow">
      <div class="flow-a">流程申请</div>
      <div class="flow-button">
        <el-button>加班离职</el-button><el-button>请假调休</el-button><el-button>审批列表</el-button><br />
        <el-button>我的信息</el-button>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.flow {
  width: 100%;
  height: 229px;
  background-color: #fff;
  padding-left: 30px;
  .flow-a {
    width: 110px;
    font-size: 25px;
    border-bottom: 5px solid #8a97f8;
    height: 60px;
    line-height: 60px;
  }
  .flow-button {
    .el-button {
      width: 135px;
      height: 50px;

      margin-top: 10px;
    }
  }
}
</style>
