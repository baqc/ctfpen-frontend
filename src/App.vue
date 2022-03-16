<script setup>
import {NLayout, NLayoutContent, NLayoutFooter,NLoadingBarProvider} from 'naive-ui'
import AppHeader from "@/components/AppHeader.vue"
import {RouterView} from 'vue-router'
</script>

<template>
  <n-loading-bar-provider>
    <n-layout>
      <app-header></app-header>
      <n-layout-content content-style="background-color: #fafafc;min-height: 94vh!important">
        <div class="container">
          <router-view></router-view>
        </div>
      </n-layout-content>
      <n-layout-footer style="background-color: red">
        footer
      </n-layout-footer>
    </n-layout>
  </n-loading-bar-provider>
</template>

<style lang="scss">
@import "@/assets/layout.scss";
</style>
