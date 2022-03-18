<script setup>
import {NAvatar, NCard, useLoadingBar} from "naive-ui";
import {onMounted} from "vue";
import {loadingBarApiRef} from "@/router";

const loadingBar = useLoadingBar()

onMounted(() => {
  loadingBarApiRef.value = loadingBar;
  loadingBar.finish();
})
</script>

<template>
  <div class="account">
    <div class="row">
      <div class="col-12 col-md-4">
        <div class="profile">
          <n-card>
            <div class="level">
              <div class="level-item avatar">
                <div>
                  <n-avatar
                      :size="128"
                      src="https://q4.qlogo.cn/g?b=qq&nk=956587861&s=0"
                  />
                  <p class="username">ZERO</p>
                  <p class="subtitle">困于江湖，我一人足矣</p>
                  <p class="space">Space</p>
                </div>
              </div>
            </div>
            <div class="level profile_data">
              <div class="level-item data">
                <div>
                  <div class="heading">文章</div>
                  <div class="title">2</div>
                </div>
              </div>
              <div class="level-item data">
                <div>
                  <div class="heading">文章</div>
                  <div class="title">2</div>
                </div>
              </div>
              <div class="level-item data">
                <div>
                  <div class="heading">文章</div>
                  <div class="title">2</div>
                </div>
              </div>
            </div>
          </n-card>
        </div>
      </div>
      <div class="col-12 col-md-8">
        <div class="history">

        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/grid";
.level {
  display: flex;
  align-items: center;
  justify-content: space-between;
  box-sizing: inherit;
  padding-top: 10px;
}

.level-item {
  align-items: center;
  display: flex;
  flex-basis: auto;
  flex-grow: 0;
  flex-shrink: 0;
  justify-content: center;
}

.avatar {
  flex-grow: 1;
  flex-shrink: 1 !important;
  text-align: center;
}

.avatar .username {
  line-height: 1.125;
  margin-bottom: 0;
  color: #363636;
  font-size: 1.5rem;
  font-weight: 400;
  display: block !important;
  word-break: break-word;
}

.avatar .subtitle {
  display: block !important;
  font-size: 1rem !important;
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

.avatar .space {
  display: block !important;
  font-size: 1rem !important;
  margin: 0;
  padding: 0;
  box-sizing: inherit;
}

.data {
  flex-grow: 1;
  margin: 0 !important;
  text-align: center;
  box-sizing: inherit;
}

.profile_data {
  padding-top: 10px;
  padding-bottom: 10px;
}

.heading {
  display: block;
  font-size: 13px;
  letter-spacing: 1px;
  margin-bottom: 5px;
  text-transform: uppercase;
}

.title {
  color: #363636;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.125;
}

.user_cover {
  border-top-right-radius: 1px;
  border-top-left-radius: 1px;
  transition: height .3s;
  position: relative;
  height: 240px;
  overflow: hidden;
  background: #f6f6f6;
}

</style>
