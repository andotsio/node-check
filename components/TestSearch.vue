<template>
  <div class="search-container">
    <div class="search-box">
      <div class="form-group">
        <input id="ip" class="form-input" placeholder="KLAYTN NODE IP/DOMAIN" v-model="rpcConfig.host"/>
      </div>
      <div class="form-group w200">
        <input id="port" class="form-input" placeholder="API PORT" v-model="rpcConfig.port"/>
      </div>
      <button class="form-button" @click="connectRpcHandle">CONNECT</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import {useRpcConfigStore} from "~/composables/useStore";
import {useRpcApi} from '~/composables/useRpcApi';

const rpcConfig = useRpcConfigStore();
const {connectRpcHandle} = useRpcApi();
</script>
<style lang="less" scoped>
.search-container {
  border-bottom: 1px solid rgba(219, 220, 221, 1);
  text-align: center;
}

.search-box {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.form-group {
  position: relative;
  flex: 2;
  margin-right: 20px;

  &.w200 {
    flex: 1;
  }
}

.form-input {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 60px;
  padding: 0 20px;
  color: #303030;
  font-size: 16px;
  font-weight: bold;
  background: rgba(255, 255, 255, 1);
  border: 1px solid rgba(219, 220, 221, 1);
  border-radius: 6px;
}

.form-button {
  align-items: center;
  justify-content: center;
  position: relative;
  width: 200px;
  height: 60px;
  outline: 0;
  cursor: pointer;
  user-select: none;
  appearance: none;
  text-decoration: none;
  border: none;
  color: rgba(255, 255, 255, 1);
  font-size: 20px;
  font-weight: bold;
  background: rgba(49, 185, 158, 1);
  border-radius: 6px;
}
</style>
