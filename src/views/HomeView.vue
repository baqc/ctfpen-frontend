<script setup>
import { useLoadingBar} from 'naive-ui';
import {onMounted} from "vue";
import {loadingBarApiRef} from "@/router";
import Landing from "@/components/Landing.vue"

const loadingBar = useLoadingBar()

onMounted(() => {
  loadingBarApiRef.value = loadingBar;
  loadingBar.finish();
})
</script>

<template>
  <landing></landing>
</template>

