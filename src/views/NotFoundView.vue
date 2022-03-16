<script setup>
  import {NResult,NButton} from "naive-ui";
</script>

<template>
  <div class="notfound_page">
    <n-result status="404" title="404 资源不存在" description="生活总归带点荒谬">
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
