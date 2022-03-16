<script setup>
import './gt';
import axios from "axios";

axios.get('/api/StartCaptchaServlet.php').then((res) => {
  let data = res.data;
  initGeetest({
    // 以下配置参数来自服务端 SDK
    gt: data.gt,
    challenge: data.challenge,
    offline: !data.success,
    new_captcha: true,
    width: '100%'
  }, function (captchaObj) {
    console.log(captchaObj)
    captchaObj.appendTo(".captcha");
    // 这里可以调用验证实例 captchaObj 的实例方法
  })
}).catch(function (err) {
  window.alert("加载失败")
})

</script>

<template>
  <div class="geetest">
    <div class="captcha"></div>
  </div>
</template>

<style scoped>
.captcha {
  min-height: 44px;
}
</style>
