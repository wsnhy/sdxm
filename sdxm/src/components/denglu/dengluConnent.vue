<template>
  <!-- 第二部分内容 -->
  <div class="connent">
    <ul class="conul">
      <form action="">
        <!-- 2.1 -->
        <li>
          <input type="text" placeholder="用户名/手机号/邮箱">
        </li>
        <!-- 2.2 -->
        <li>
          <input type="text" placeholder="请输入6-20密码">
        </li>

        <!-- 2.3 -->
        <li>
          <input type="checkbox" name="" id="input_ch" class="input_ch" value="✔">
          <label ><a href="#">两周免登录</a></label>
          <a href="#" class="zhmm">找回密码</a>
        </li>
        <!-- 2.4 -->
        <li>
          <button>登录</button>
        </li>
      </form>
    </ul>
  </div>
</template>

<script>
    export default {
        name: "dengluConnent"
    }
</script>

<style scoped>
  @import "../../assets/css/denglu.css";
</style>
