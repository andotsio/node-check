<template>
  <div class="node">
    <section class="node-info">
      <h2 class="title">Node Info</h2>
      <div class="item-list">
        <div class="item">
          <div class="key">Node Host</div>
          <div class="value">
            {{ chainInfo.host || '-' }}
          </div>
        </div>
        <div class="item">
          <div class="key">Connect Status</div>
          <div class="value" v-if="chainInfo.chainId">
            {{ chainInfo.chainId ? 'Connected' : 'DisConnected' }}
            <span class="node-status" :class="{green: chainInfo.chainId, red: !chainInfo.chainId}"></span>
          </div>
          <div class="value" v-else>-</div>
        </div>
        <div class="item">
          <div class="key">Chain ID</div>
          <div class="value" v-if="chainInfo.chainId">
            <span class="net-type">{{ chainInfo.chainId === 8217 ? 'Mainnet' : 'Testnet' }}</span>
            {{ chainInfo.chainId }}
          </div>
          <div class="value" v-else>-</div>
        </div>
        <div class="item">
          <div class="key">Client</div>
          <div class="value">
            {{ chainInfo.client || '-' }}
          </div>
        </div>
        <div class="item">
          <div class="key">Protocol Version</div>
          <div class="value">
            {{ chainInfo.protocolVersion || '-' }}
          </div>
        </div>
        <div class="item">
          <div class="key">Latest Block Height</div>
          <div class="value">
            {{ chainInfo.mostRecentBlockNumber || '-' }}
          </div>
        </div>
        <div class="item">
          <div class="key">Node Block Height</div>
          <div class="value">
            {{ chainInfo.nodeBlockNumber || '-' }}
          </div>
        </div>
      </div>
    </section>
    <section class="node-data" v-if="chainInfo.chainId">
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
              <div class="card-value">no data</div>
            </div>
            <div class="card-row">
              <div class="card-title">Timestamp</div>
              <div class="card-value">{{ now }}</div>
            </div>
            <div class="card-row">
              <div class="card-title">Ledger Version</div>
              <div class="card-value">no data</div>
            </div>
            <div class="card-row">
              <div class="card-title">Epoch</div>
              <div class="card-value">no data</div>
            </div>
            <div class="card-row">
              <div class="card-title">Peer Count</div>
              <div class="card-value">{{ chainInfo.peerCount }}</div>
            </div>
            <div class="card-row">
              <div class="card-title">Chain ID</div>
              <div class="card-value">{{ chainInfo.chainId }}</div>
            </div>
          </div>
        </div>
        <div class="data-card">
          <h3 class="data-title">SYNC / CONSENSUS STATUS</h3>
          <div class="card-box">
            <h3 class="sub-title">SYNC STATE</h3>
            <div class="card-row" v-for="item of syncState">
              <div class="card-title">{{ item.name }}</div>
              <div class="card-value">no data</div>
            </div>
            <h3 class="sub-title">CONSENSUS</h3>
            <div class="card-row" v-for="item of consensus">
              <div class="card-title">{{ item.name }}</div>
              <div class="card-value">no data</div>
            </div>
          </div>
        </div>
        <div class="data-card">
          <h3 class="data-title">CONNECTIONS</h3>
          <div class="card-row" v-for="item of connections">
            <div class="card-title">{{ item.name }}</div>
            <div class="card-value">no data</div>
          </div>
        </div>
        <div class="data-card">
          <h3 class="data-title">REQUESTS / RESPONSES</h3>
          <div class="card-row" v-for="item of requestsResponses">
            <div class="card-title">{{ item.name }}</div>
            <div class="card-value">no data</div>
          </div>
        </div>
        <div class="data-card">
          <h3 class="data-title">LEDGER STORAGE</h3>
          <div class="card-row" v-for="item of ledgerStorage">
            <div class="card-title">{{ item.name }}</div>
            <div class="card-value">no data</div>
          </div>
        </div>
        <div class="data-card">
          <h3 class="data-title">TRANSACTIONS</h3>
          <div class="card-row" v-for="item of transactions">
            <div class="card-title">{{ item.name }}</div>
            <div class="card-value">no data</div>
          </div>
        </div>
        <div class="data-card">
          <h3 class="data-title">MEMPOOL TRANSACTIONS</h3>
          <div class="card-row" v-for="item of mempoolTransactions">
            <div class="card-title">{{ item.name }}</div>
            <div class="card-value">no data</div>
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
import {ledgerInfo, syncState, consensus, connections, requestsResponses, ledgerStorage, transactions, mempoolTransactions, systemInfo} from '../assets/data/data';
import {useChainInfoStore} from '../composables/useStore';

const chainInfo = useChainInfoStore();
const now = new Date().toGMTString();
</script>
<style lang="less" scoped>
.node {
  padding: 0 100px 100px;
}

.title {
  margin-top: 50px;
  margin-bottom: 10px;
  font-size: 14px;
}

.node-info {
  margin: 0 auto;
}

.node-status {
  margin: 0 auto;
}

.item-list {
  display: flex;
  flex-direction: column;
  width: 100%;
  border: 1px solid #e5e5e5;
}

.item {
  flex: 1;
  display: flex;
  padding: 10px 20px;
  color: #666666;

  &:last-child {
    border-bottom: 0;
  }
}

.value {
  flex: 1;
  text-align: right;
  padding-left: 20px;
  color: #333333;

  .node-status {
    display: inline-block;
    width: 8px;
    height: 8px;
    margin-left: 10px;
    border-radius: 50%;

    &.green {
      background: #00ff00;
    }

    &.red {
      background: #ff0000;
    }
  }

  .net-type {
    color: #07d;
    margin-right: 20px;
  }
}

.node-data-list {
  display: flex;
  flex-wrap: wrap;

  .data-card {
    border-radius: 4px;
    box-shadow: 0 2px 5px 0 rgb(0 0 0 / 30%);
    font-size: 12px;
    margin-right: 10px;
    margin-bottom: 10px;
  }

  .data-title {
    height: 50px;
    line-height: 50px;
    padding-left: 10px;
    font-size: 14px;
    background: #0077dd;
    color: #fff;
  }

  .sub-title {
    font-size: 12px;
  }

  .card-box {
    padding: 20px 10px 10px;
  }

  .card-row {
    display: flex;
    padding: 0 10px;
    height: 40px;
    line-height: 40px;
    border-bottom: 1px solid #e5e5e5;
  }

  .card-value {
    flex: 1;
    text-align: right;
  }
}


@media (min-width: 1460px) {
  .data-card {
    width: calc((100% - 30px) / 4);

    &:nth-child(4n) {
      margin-right: 0;
    }
  }
}

@media (min-width: 1000px) and (max-width: 1460px) {
  .data-card {
    flex: 0 0 calc((100% - 20px) / 3);

    &:nth-child(3n) {
      margin-right: 0;
    }
  }
}

@media (min-width: 0px) and (max-width: 1000px) {
  .data-card {
    flex: 0 0 calc((100% - 10px) / 2);

    &:nth-child(2n) {
      margin-right: 0;
    }
  }
}
</style>
