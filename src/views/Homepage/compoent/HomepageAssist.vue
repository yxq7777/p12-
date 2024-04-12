<template>
  <div>
    <div class="assist">
      <div class="assist-a">帮助链接</div>
      <div class="assist-b">
        <div class="assist-item">
          <div class="assist-img">
            <img src="../../../assets/common/指南针.png" alt="" />
            <p>入门指南</p>
          </div>
          <div class="assist-img">
            <img src="../../../assets/common/在线帮忙手册.png" alt="" />
            <p>在线帮忙手册</p>
          </div>
          <div class="assist-img">
            <img src="../../../assets/common/c.png" alt="" />
            <p>联系技术支持</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.assist {
  width: 100%;
  height: 205px;
  background-color: #fff;
  padding-left: 30px;
  .assist-a {
    width: 110px;
    font-size: 25px;
    border-bottom: 5px solid #8a97f8;
    height: 60px;
    line-height: 60px;
  }
  .assist-b {
    .assist-item {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-top: 20px;
      .assist-img {
        text-align: center;
        img {
          width: 76px;
          height: 76px;
        }
      }
    }
  }
}
</style>
