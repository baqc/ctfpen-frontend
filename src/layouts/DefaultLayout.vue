<script setup>
import {RouterView} from 'vue-router'
import {NLayout, NLayoutContent, NLayoutFooter} from 'naive-ui'
import AppHeader from "@/components/AppHeader.vue"
</script>

<template>
  <n-layout>
    <app-header></app-header>
    <n-layout-content content-style="background-color: #fafafc;min-height: 94vh!important">
      <router-view></router-view>
    </n-layout-content>
    <n-layout-footer style="background-color: red;padding: 10px;color: white;text-align: center;font-size: 24px">
      footer
    </n-layout-footer>
  </n-layout>
</template>

