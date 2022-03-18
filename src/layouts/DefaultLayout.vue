<script setup>
import {RouterView} from 'vue-router'
import {onMounted} from "vue";
import {loadingBarApiRef} from "@/router";
import {NLayout, NLayoutContent, NLayoutFooter, useLoadingBar} from 'naive-ui'
import AppHeader from "@/components/AppHeader.vue"

const loadingBar = useLoadingBar()

onMounted(() => {
  loadingBarApiRef.value = loadingBar;
  // loadingBar.finish();
})
</script>

<template>
  <n-layout>
    <app-header></app-header>
    <n-layout-content content-style="background-color: #fafafc;min-height: 94vh!important">
      <div class="container-fluid">
        <router-view></router-view>
      </div>
    </n-layout-content>
    <n-layout-footer style="background-color: red;padding: 10px;color: white;text-align: center;font-size: 24px">
      footer
    </n-layout-footer>
  </n-layout>
</template>

<style scoped lang="scss">
@import "bootstrap/scss/containers";
.container{
   padding-top: 12px;
}
</style>
