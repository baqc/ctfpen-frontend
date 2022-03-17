<script setup>
import {NButton, NResult, useLoadingBar} from "naive-ui";
import {onMounted} from "vue";
import {loadingBarApiRef} from "@/router";

const loadingBar = useLoadingBar()

onMounted(() => {
  loadingBarApiRef.value = loadingBar;
  loadingBar.finish();
})
</script>

<template>
  <div class="notfound_page">
    <n-result description="生活总归带点荒谬" status="404" title="404 资源不存在">
      <template v-slot:footer>
        <n-button>找点乐子吧</n-button>
      </template>
    </n-result>
  </div>
</template>

<style scoped>
.notfound_page {
  padding-top: 200px
}
</style>
