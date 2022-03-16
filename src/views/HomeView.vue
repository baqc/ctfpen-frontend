<template>
  <div>
    <n-alert title="Default 类型" type="error">
      <template #icon>
        <n-icon>
          <airplane />
        </n-icon>
      </template>
      天生我材必有用
    </n-alert>

    <n-grid x-gap="12" :cols="4" style="padding-top: 10px">
      <n-gi>
        <n-card title="卡片">
          卡片内容
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="卡片">
          卡片内容
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="卡片">
          卡片内容
        </n-card>
      </n-gi>
      <n-gi>
        <n-card title="卡片">
          卡片内容
        </n-card>
      </n-gi>
    </n-grid>
  </div>
</template>

<script setup>
import { NAlert,NGrid,NGi,NCard,NIcon } from 'naive-ui';
import { Airplane } from '@vicons/ionicons5';
</script>

<style scoped>

</style>
