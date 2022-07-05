<template>
  <div class="toast" :class="[toastStore.type, {show: toastStore.show}]">
    <i class="icon-toast"></i>
    <p class="msg">{{ toastStore.msg }}</p>
  </div>
</template>
<script lang="ts" setup>
import {useToastStore} from "~/composables/useStore";

const toastStore = useToastStore();
</script>
<style lang="less" scoped>
.toast {
  position: fixed;
  left: 50%;
  top: -110px;
  display: flex;
  align-items: center;
  min-width: 200px;
  height: 40px;
  padding-right: 20px;
  transform: translateX(-50%);
  border-radius: 12px;
  font-size: 12px;
  z-index: 10000;
  transition: top .2s;

  &.success {
    background: rgba(6, 99, 231, 0.1);
    color: rgba(6, 99, 231, 1);
  }

  &.error {
    background: rgba(255, 92, 92, 0.1);
    color: #FF5C5C;

    .icon-toast {
      background: url("~~/assets/images/icon_error.svg") no-repeat center center;
    }
  }

  &.show {
    top: 110px;
  }

  .icon-toast {
    flex: 0 0 16px;
    height: 16px;
    margin-left: 20px;
    margin-right: 10px;
    background: url("~~/assets/images/icon_success.svg") no-repeat center center;
  }

  .msg {
    white-space: nowrap;
    padding-right: 20px;
  }
}
</style>
