<script setup>
import {NAlert, NCard, NGi, NGrid, NIcon, useLoadingBar} from 'naive-ui';
import {Airplane} from '@vicons/ionicons5';
useLoadingBar().start();
</script>

<template>
  <div>
    <n-alert title="Default 类型" type="error">
      <template v-slot:icon>
        <n-icon>
          <airplane/>
        </n-icon>
      </template>
      天生我材必有用
    </n-alert>

    <n-grid :cols="4" style="padding-top: 10px" x-gap="12">
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

<style scoped>

</style>
