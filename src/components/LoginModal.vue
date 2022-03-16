<script setup>
  import {NModal,NCard,NInput,NButton,NIcon,NGrid,NGi} from "naive-ui";
  import {ref} from "vue";
  import {FingerPrintSharp,Person} from '@vicons/ionicons5';
  const showModal = ref(false);
  import {LogIn} from "@vicons/ionicons5";
</script>

<template>
  <n-button color="#18a058" v-on:click="showModal = true">
    <template v-slot:icon>
      <n-icon :component="LogIn"></n-icon>
    </template>
    登录
  </n-button>
  <n-modal v-model:show="showModal" transform-origin="center">
    <n-card
        closable
        v-on:close="showModal = false"
        class="login_card"
        title="登录 / 注册"
        role="dialog"
        size="medium"
        aria-modal="true"
    >

      <n-input type="text" placeholder="用户名">
        <template #prefix>
          <n-icon :component="Person" />
        </template>
      </n-input>
      <n-input style="margin-top: 10px" type="text" placeholder="密码">
        <template #prefix>
          <n-icon :component="FingerPrintSharp" />
        </template>
      </n-input>

      <n-grid cols="2" style="padding-top: 15px">
        <n-gi style="padding-right: 5px">
          <n-button block>注册</n-button>
        </n-gi>
        <n-gi style="padding-left: 5px">
          <n-button block color="#18a058">登录</n-button>
        </n-gi>
      </n-grid>
    </n-card>
  </n-modal>
</template>

<style scoped>
.login_card {
  width: 380px;
  margin-top: 70px;
}
</style>
