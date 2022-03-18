<script setup>
import {NButton, NCard, NCheckbox, NGi, NGrid, NIcon, NInput, NModal} from "naive-ui";
import {ref} from "vue";
import {FingerPrintSharp, LogIn, Person} from '@vicons/ionicons5';

const showModal = ref(false);</script>

<template>
  <n-button color="#18a058" v-on:click="showModal = true">
    <template v-slot:icon>
      <n-icon :component="LogIn"></n-icon>
    </template>
    登录
  </n-button>
  <n-modal v-model:show="showModal" transform-origin="center">
    <n-card
        aria-modal="true"
        class="login_card"
        closable
        role="dialog"
        size="medium"
        title="登录 / 注册"
        v-on:close="showModal = false"
    >

      <n-input placeholder="用户名" type="text">
        <template #prefix>
          <n-icon :component="Person"/>
        </template>
      </n-input>
      <n-input placeholder="密码" style="margin-top: 10px" type="text">
        <template #prefix>
          <n-icon :component="FingerPrintSharp"/>
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
          <router-link style="text-decoration: none" to="/forget">Forgot your password?</router-link>
        </div>
      </div>
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

.login_tips .checkbox {
  justify-content: flex-start;
}

.login_tips .forget {
  justify-content: flex-end;
}
</style>
