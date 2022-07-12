import {useState} from "#app";

export const useRpcConfigStore = () => useState<RpcConfig>('rpcConfig', () => ({
    host: '',
    port: '',
    metricsPort: ''
}));

export const useToastStore = () => useState<{ show: boolean, msg: string, type: string }>('toast', () => ({
    show: false,
    msg: 'Successfully added',
    type: 'success'
}));

export const useChainInfoStore = () => useState<ChainInfo>('chainInfo', () => ({
    chainId: null,
    client: '',
    protocolVersion: null,
    host: '',
    port: '',
    metricsPort: '',
    peerCount: 0,
    nodeBlockNumber: 0,
    mostRecentBlockNumber: 0,
    synced: true,
    pending: 0,
    queued: 0,
}));
