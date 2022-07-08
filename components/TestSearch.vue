<template>
  <div class="search-container">
    <div class="search-box">
      <div class="form-group">
        <label for="ip" class="form-label">KLAYTN NODE IP/DOMAIN</label>
        <input id="ip" class="form-input" v-model="rpcConfig.host"/>
      </div>
      <div class="form-group w200">
        <label for="port" class="form-label">API PORT</label>
        <input id="port" class="form-input" v-model="rpcConfig.port"/>
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
  text-align: center;
}

.search-box {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 100px;
}

.form-group {
  position: relative;
  flex: 2;
  margin-right: 20px;

  &.w200 {
    flex: 1;
  }
}

.form-label {
  position: absolute;
  left: 20px;
  top: -8px;
  padding: 0 8px;
  font-size: 12px;
  background: #f8f8f8;
  z-index: 1;
}

.form-input {
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: 56px;
  padding: 0 20px;
  font-size: 1rem;
  letter-spacing: 0.00938em;
  color: #333333;
  cursor: text;
  border-radius: 4px;
  border: 2px solid #07d;
  background: #f8f8f8;
}

.form-button {
  align-items: center;
  justify-content: center;
  position: relative;
  width: 200px;
  height: 55px;
  outline: 0;
  cursor: pointer;
  user-select: none;
  appearance: none;
  text-decoration: none;
  font-weight: bold;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  border-radius: 4px;
  color: #ffffff;
  border: 1px solid #07d;
  background-color: #07d;
}
</style>
