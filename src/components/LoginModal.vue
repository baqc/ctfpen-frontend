<script setup>
  import {NModal,NCard,NInput,NButton,NIcon,NGrid,NGi,NCheckbox} from "naive-ui";
  import {ref} from "vue";
  import {FingerPrintSharp,Person} from '@vicons/ionicons5';
  const showModal = ref(false);
  import {LogIn} from "@vicons/ionicons5";
  import Geetest from "@/components/Geetest/Geetest.vue";
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
      <div class="login_tips">
        <div class="checkbox">
          <n-checkbox
              checked
          >
            记住登录
          </n-checkbox>
        </div>
        <div class="forget">
          <router-link to="/forget" style="text-decoration: none">Forgot your password?</router-link>
        </div>
      </div>
      <geetest style="padding-bottom: 10px;">
      </geetest>
      <n-grid cols="2">
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
.login_tips {
  padding-top: 10px;
  padding-bottom: 10px;
  display: flex;
  justify-content: space-between;
}
.login_tips .checkbox{
  justify-content: flex-start;
}
.login_tips .forget {
  justify-content: flex-end;
}
</style>
