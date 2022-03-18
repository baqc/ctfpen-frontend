<script setup>
import {NButton} from 'naive-ui';</script>

<template>
  <div class="landing text-center">
    <section id="header">
      <div class="container">
        <div class="header">
          <div class="row">
            <div class="col-12 col-md-6">
              <div class="logo">
                <img alt="" class="header_logo" src="https://www.naiveui.com/assets/naivelogo.93278402.svg">
              </div>
              <h1 class="title">随时随地分享你的题目</h1>
              <p class="subtitle">
                在线编写，容器分配，排行统计，比赛实况，解题思路，学习交流，均在这里。
              </p>
              <p style="padding-top: 4px">
                <n-button
                    color="green"
                    size="large"
                    style="margin-right: 5px"
                >注册平台
                </n-button>
                <n-button
                    size="large"
                >联系我们
                </n-button>
              </p>
            </div>
            <div class="col-5 col-md-6">
              <img class="header_image" src="@/assets/images/img.png">
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
#header {
  padding-top: 20px;
  border: solid 1px rgb(239, 239, 245);
}

.title {
  margin-top: -2px;
  font-size: 37px;
  //line-height: 0.4;
  font-weight: 500 !important;
}

.subtitle {
  margin-top: -25px;
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
  .title {
    font-size: 3.0rem;
  }
}

.header_logo {
  height: 80px !important;
}
</style>

