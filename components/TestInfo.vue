<template>
  <div class="node">
    <section class="node-info">
      <h2 class="title">Node Info</h2>
      <div class="item-list-wrap">
        <div class="item-list">
          <div class="item">
            <div class="icon node-host"></div>
            <div class="key">Node Host</div>
            <div class="value">
              {{ chainInfo.host || '-' }}
            </div>
          </div>
          <div class="item">
            <div class="icon chain-id"></div>
            <div class="key">Chain ID</div>
            <div class="value" v-if="chainInfo.chainId">
              <span class="net-type">{{ chainInfo.chainId === 8217 ? 'Mainnet' : 'Testnet' }}</span>
              {{ chainInfo.chainId }}
            </div>
            <div class="value" v-else>-</div>
          </div>
          <div class="item">
            <div class="icon latest-height"></div>
            <div class="key">Latest Block Height</div>
            <div class="value">
              {{ chainInfo.mostRecentBlockNumber || '-' }}
            </div>
          </div>
          <div class="item">
            <div class="icon protocol"></div>
            <div class="key">Protocol Version</div>
            <div class="value">
              {{ chainInfo.protocolVersion || '-' }}
            </div>
          </div>
        </div>
        <div class="item-line"></div>
        <div class="item-list">
          <div class="item">
            <div class="icon connect-status"></div>
            <div class="key">Connect Status</div>
            <div class="value" v-if="chainInfo.chainId">
              <span class="node-status" :class="{green: chainInfo.chainId, red: !chainInfo.chainId}"></span>
              {{ chainInfo.chainId ? 'Connected' : 'DisConnected' }}
            </div>
            <div class="value" v-else>-</div>
          </div>
          <div class="item">
            <div class="icon client"></div>
            <div class="key">Client</div>
            <div class="value">
              {{ chainInfo.client || '-' }}
            </div>
          </div>
          <div class="item">
            <div class="icon node-height"></div>
            <div class="key">Node Block Height</div>
            <div class="value">
              {{ chainInfo.nodeBlockNumber || '-' }}
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="node-data">
      <h2 class="title">Realtime node data</h2>
      <div class="node-data-list">
        <div class="data-card">
          <h3 class="data-title">LEDGER INFO</h3>
          <div class="card-box">
            <div class="card-row">
              <div class="card-title">Node Host</div>
              <div class="card-value">{{ chainInfo.host }}</div>
            </div>
            <div class="card-row">
              <div class="card-title">Node Health</div>
              <div class="card-value" v-if="chainInfo.mostRecentBlockNumber">
                <span v-if="chainInfo.mostRecentBlockNumber - chainInfo.nodeBlockNumber > 10">false</span>
                <span class="green" v-else>true</span>
              </div>
              <div class="card-value" v-else>
                no data
              </div>
            </div>
            <div class="card-row">
              <div class="card-title">Timestamp</div>
              <div class="card-value">{{ nowTime }}</div>
            </div>
            <div class="card-row">
              <div class="card-title">Peer Count</div>
              <div class="card-value">{{ chainInfo.peerCount || 'no data' }}</div>
            </div>
            <div class="card-row">
              <div class="card-title">Chain ID</div>
              <div class="card-value">{{ chainInfo.chainId || 'no data' }}</div>
            </div>
          </div>
        </div>
        <div class="data-card">
          <h3 class="data-title">SYNC STATUS</h3>
          <div class="card-box">
            <div class="card-row">
              <div class="card-title">Synced</div>
              <div class="card-value" v-if="chainInfo.chainId">
                {{ chainInfo.synced }}
              </div>
              <div class="card-value" v-else>
                no data
              </div>
            </div>
            <div class="card-row" v-for="item of syncState">
              <div class="card-title">{{ item.name }}</div>
              <div class="card-value">no data</div>
            </div>
          </div>
        </div>
        <div class="data-card">
          <h3 class="data-title">TXPOOL</h3>
          <div class="card-row">
            <div class="card-title">pending</div>
            <div class="card-value">{{ chainInfo.pending || 'no data' }}</div>
          </div>
          <div class="card-row">
            <div class="card-title">queued</div>
            <div class="card-value" v-if="chainInfo.pending">{{ chainInfo.queued }}</div>
            <div class="card-value" v-else>no data</div>
          </div>
        </div>
        <div class="data-card">
          <h3 class="data-title">SYSTEM INFO</h3>
          <div class="card-row" v-for="item of systemInfo">
            <div class="card-title">{{ item.name }}</div>
            <div class="card-value">no data</div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script setup>
import {syncState, systemInfo} from '../assets/data/data';
import {useChainInfoStore} from '../composables/useStore';

const chainInfo = useChainInfoStore();

const now = new Date();
const nowTime = `${now.getFullYear()}-${now.getMonth() + 1}-${now.getDate()} ${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
</script>
<style lang="less" scoped>
.node {
  padding: 0 40px 40px;
}

.title {
  padding: 20px 0;
  color: rgba(181, 183, 188, 1);
  font-size: 16px;
  font-weight: bold;
}

.item-list-wrap {
  display: flex;
  padding: 40px 20px;
  margin-bottom: 20px;
  border: 1px solid #e5e5e5;
  border-radius: 6px;
}

.item-list {
  flex: 1;
}

.item-line {
  margin: 0 40px;
  width: 2px;
  background: #f5f5f5;
}

.item {
  flex: 1;
  height: 70px;
  display: flex;
  align-items: center;
  padding: 0 20px;
  color: rgba(147, 149, 156, 1);
  font-size: 16px;
  border-bottom: 1px solid #e5e5e5;

  .icon {
    width: 30px;
    height: 30px;
    margin-right: 10px;
  }

  .node-host {
    background: url("~/assets/images/nodeHost.svg") no-repeat left center;
  }

  .chain-id {
    background: url("~/assets/images/chainId.svg") no-repeat left center;
  }

  .latest-height {
    background: url("~/assets/images/latestHeight.svg") no-repeat left center;
  }

  .protocol {
    background: url("~/assets/images/protocol.svg") no-repeat left center;
  }

  .connect-status {
    background: url("~/assets/images/connectStatus.svg") no-repeat left center;
  }

  .client {
    background: url("~/assets/images/client.svg") no-repeat left center;
  }

  .node-height {
    background: url("~/assets/images/nodeHeight.svg") no-repeat left center;
  }
}

.value {
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: end;
  padding-left: 20px;
  color: rgba(48, 48, 48, 1);
  font-weight: bold;

  .node-status {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-right: 10px;
    border-radius: 50%;

    &.green {
      background: rgba(49, 185, 158, 1);
    }

    &.red {
      background: #ff0000;
    }
  }

  .net-type {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: 70px;
    height: 25px;
    font-size: 12px;
    color: #ffffff;
    background: rgba(49, 185, 158, 1);
    border-radius: 3px;
    margin-right: 10px;
  }
}

.node-data-list {
  display: flex;
  flex-wrap: wrap;

  .data-card {
    border: 1px solid rgba(219, 220, 221, 1);
    border-radius: 6px;
    font-size: 12px;
    margin-right: 20px;
    margin-bottom: 20px;
  }

  .data-title {
    display: flex;
    align-items: center;
    height: 40px;
    color: rgba(51, 51, 51, 1);
    font-size: 14px;
    padding: 0 10px;
  }

  .sub-title {
    font-size: 12px;
  }

  .card-box {
    margin: 0 10px;
    padding: 0 10px 50px;
  }

  .card-row {
    display: flex;
    padding: 0 10px;
    height: 40px;
    line-height: 40px;
    color: rgba(147, 149, 156, 1);
    border-bottom: 1px solid #e5e5e5;
  }

  .card-value {
    flex: 1;
    text-align: right;
    color: rgba(48, 48, 48, 1);
    font-weight: bold;

    .green {
      color: rgba(49, 185, 158, 1);
    }
  }
}


@media (min-width: 1460px) {
  .data-card {
    width: calc((100% - 60px) / 4);

    &:nth-child(4n) {
      margin-right: 0;
    }
  }
}

@media (min-width: 1000px) and (max-width: 1460px) {
  .data-card {
    flex: 0 0 calc((100% - 40px) / 3);

    &:nth-child(3n) {
      margin-right: 0;
    }
  }
}

@media (min-width: 0px) and (max-width: 1000px) {
  .data-card {
    flex: 0 0 calc((100% - 20px) / 2);

    &:nth-child(2n) {
      margin-right: 0;
    }
  }
}
</style>
