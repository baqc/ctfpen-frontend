<script setup>
import {NLayout, NLayoutContent} from 'naive-ui'
import AppHeader from "@/components/AppHeader.vue"
import {RouterView} from 'vue-router'
</script>

<template>
  <n-layout>
    <app-header></app-header>
    <n-layout-content content-style="background-color: #fafafc;">
      <div class="container">
        <router-view></router-view>
      </div>
    </n-layout-content>
  </n-layout>
</template>

<style lang="scss">
@import "@/assets/layout.scss";
</style>
