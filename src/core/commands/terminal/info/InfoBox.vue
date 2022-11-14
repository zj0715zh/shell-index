<template>
  <div>关于本站： 终端范的浏览器个人主页</div>
  <div>
    欢迎使用和吐槽
  </div>
  <div></div>
  <div>
    作者：
    <a href="http://www.itzoujie.com" target="_blank">
      itzou
    </a>
  </div>
</template>

<script setup lang="ts">
interface InfoBoxProps {
  seconds: string;
}

const props = withDefaults(defineProps<InfoBoxProps>(), {});
</script>

<style scoped></style>
