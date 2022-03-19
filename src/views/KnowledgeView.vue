<script setup>
import {useLoadingBar} from "naive-ui";
import {onMounted} from "vue";
import {loadingBarApiRef} from "@/router";

const loadingBar = useLoadingBar()

onMounted(() => {
  loadingBarApiRef.value = loadingBar;
  loadingBar.finish();
})
</script>

<template>
<div class="container">
  <h1>
    test page
  </h1>
</div>
</template>

<style scoped lang="scss">
@import "@/assets/grid.scss";
</style>
