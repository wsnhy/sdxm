<template>
  <!-- 第二部分内容 -->
  <div class="connent">
    <ul class="conul">
      <form action="#">
        <!-- 2.1 -->
        <li>
          <input type="text" placeholder="请输入手机号">
        </li>
        <!-- 2.2 -->
        <li>
          <input type="text" placeholder="请填写验证码">
          <img src="images/100.jpg" alt="">
          <a href="#">看不清?换一个</a>
        </li>
        <!-- 2.3 -->
        <li >
          <input type="text" placeholder="请输入短信验证码">
          <a href="#">获取验证码</a>
        </li>
        <!-- 2.4 -->
        <li>
          <input type="text" placeholder="设置6-20数字、字母或者符号组成的登录密码">
        </li>
        <!-- 2.5 -->
        <li>
          <input type="text" placeholder="请重复已设置的登录密码">
        </li>
        <!-- 2.6 -->
        <li>
          <input type="checkbox" name="" id="input_ch" class="input_ch" value="✔">
          <label for="#"><a href="#">同意注册协议</a></label>
        </li>
        <!-- 2.7 -->
        <li>
          <button>注册并登录</button>
        </li>
      </form>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "zhuceConnent"
    }
</script>

<style scoped>
  @import "../../assets/css/zhuce.css";
</style>
