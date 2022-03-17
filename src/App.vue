<script setup>
import {RouterView} from 'vue-router'
import {NLoadingBarProvider} from 'naive-ui';</script>

<template>
  <n-loading-bar-provider>
    <router-view></router-view>
  </n-loading-bar-provider>
</template>

<style lang="scss">
@import "@/assets/layout.scss";
</style>
