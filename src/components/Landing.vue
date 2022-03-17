<script setup>
import { NButton} from 'naive-ui';
</script>

<template>
  <div class="landing text-center">
  <section id="header">
      <div class="container">
        <div class="header">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="logo">
                <img src="https://www.naiveui.com/assets/naivelogo.93278402.svg" class="header_logo" alt="">
              </div>
              <br>
              <h1 class="title">随时随地分享你的题目</h1>
              <p class="subtitle">
                在线编写，容器分配，排行统计，比赛实况，解题思路，学习交流，均在这里。
              </p>
              <p style="padding-top: 4px">
                <n-button
                    size="large"
                    style="margin-right: 5px"
                    color="green"
                >ButtonButton</n-button>
                <n-button
                    size="large"
                >ButtonButton</n-button>
              </p>
            </div>
            <div class="col-5 col-md-6">
              <img src="@/assets/images/img.png" class="header_image">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style scoped lang="scss">
@import "bootstrap/scss/bootstrap-grid.scss";
#header {
  padding-top: 10px;
  border: solid 1px rgb(239, 239, 245);
}
.title {
  font-size: 37px;
  line-height: 0.4;
  font-weight: 500 !important;
}

.subtitle {
  font-size: 24px;
  line-height: 1.39;
  color: #86868b;
}
.title_btn {
  padding-top: 26px;
}
@media screen and (max-width: $breakpoints-md) {
  .header_image {
    display: none;
  }
}

@media screen and (min-width: $breakpoints-md) {
  .header_image {
    width: 100%;
  }
  .title{
    font-size: 3.5rem;
  }
}

.header_logo {
  height: 80px!important;
}
</style>

