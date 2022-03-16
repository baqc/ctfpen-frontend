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
  <h1>
    test page
  </h1>
</template>

<style scoped>

</style>
