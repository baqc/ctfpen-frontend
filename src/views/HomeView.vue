<script setup>
import {NLayout, NLayoutContent, useLoadingBar} from 'naive-ui';
import {onMounted} from "vue";
import {loadingBarApiRef} from "@/router";
import AppHeader from "@/components/AppHeader.vue"
import Landing from "@/components/Landing.vue"

const loadingBar = useLoadingBar()

onMounted(() => {
  loadingBarApiRef.value = loadingBar;
  loadingBar.finish();
})
</script>

<template>
  <n-layout>
    <app-header></app-header>
    <n-layout-content>
      <landing></landing>
    </n-layout-content>
  </n-layout>
</template>

