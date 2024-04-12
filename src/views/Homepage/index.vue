<template>
  <div class="root">
    <div class="box">
      <div class="UseInfo">
        <img src="../../assets//common/head.jpg" alt="" />
        <div>
          <p class="n">早安，，祝你每天开心!</p>
          <p style="font-size: 14px; color: #7f8fa3">管理员 | 传智播客—总裁办</p>
        </div>
      </div>
      <div class="item">
        <div class="left">
          <div class="calendar">
            <div class="calendar-item">工作日历</div>
            <CalendarTiem></CalendarTiem>
          </div>
          <div class="announcement">
            <div class="announcement-item">公告</div>
            <div class="announcement-g">
              <div class="a">
                <img src="../../assets//common/img.jpeg" alt="" />
                <div class="b">
                  <p style="margin-bottom: 5px">
                    <span style="color: #8c9bf8">朱鸡柳</span> 发布了第1期"传智大讲堂"互动探讨获奖名单公布
                  </p>
                  <p>2021-03-22 15:32:18</p>
                </div>
              </div>
              <div class="a">
                <img src="../../assets//common/img.jpeg" alt="" />
                <div class="b">
                  <p style="margin-bottom: 5px">
                    <span style="color: #8c9bf8">朱鸡柳</span> 发布了第1期"传智大讲堂"互动探讨获奖名单公布
                  </p>
                  <p>2021-03-22 15:32:18</p>
                </div>
              </div>
              <div class="a">
                <img src="../../assets//common/img.jpeg" alt="" />
                <div class="b">
                  <p style="margin-bottom: 5px">
                    <span style="color: #8c9bf8">朱鸡柳</span> 发布了第1期"传智大讲堂"互动探讨获奖名单公布
                  </p>
                  <p>2021-03-22 15:32:18</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right">
          <flow></flow>
          <fast></fast>
          <assist></assist>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CalendarTiem from "./compoent/calendarTiem.vue"
import flow from "./compoent/HomepageFlow.vue"
import fast from "./compoent/HomepageFast.vue"
import assist from "./compoent/HomepageAssist.vue"
export default {
  name: "HomePage",
  components: {
    CalendarTiem,
    flow,
    fast,
    assist
  },
  data() {
    return {}
  }
}
</script>
<style lang="scss" scoped>
.root {
  overflow: hidden;
  .UseInfo {
    width: 100%;
    height: 145.59px;
    background-color: #fff;
    margin-bottom: 20px;
    display: flex;
    align-items: center;

    img {
      width: 110px;
      height: 110px;
      margin-left: 20px;
      margin-right: 10px;
    }
    div {
      p {
        font-size: 18px;
      }
      .n {
        margin-bottom: 5px;
      }
    }
  }
  .item {
    display: flex;
    justify-content: space-between;

    .left {
      flex: 1;
      .calendar {
        width: 818px;
        height: 413.59px;
        background-color: #fff;
        margin-bottom: 20px;
        .calendar-item {
          font-size: 20px;
          padding: 20px;
          border-bottom: 1px solid #ccc;
        }
      }
      .announcement {
        width: 818px;
        height: 449.06px;
        background-color: #fff;
        .announcement-item {
          font-size: 20px;
          padding: 20px;
          border-bottom: 1px solid #ccc;
        }
        .announcement-g {
          padding-left: 30px;
          padding-right: 30px;
          .a {
            display: flex;
            height: 100px;
            align-items: center;
            border-bottom: 1px solid #ccc;

            img {
              width: 56px;
              height: 56px;
            }
          }
        }
      }
    }
    .right {
      flex: 1;
      padding-left: 10px;
    }
  }
}
</style>
