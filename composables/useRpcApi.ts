import {useChainInfoStore, useRpcConfigStore} from "~/composables/useStore";
import {useToast} from "~/composables/useToast";
import {useFetch} from "nuxt/app";
import {SymbolKind} from "vscode-languageserver-types";
import Number = SymbolKind.Number;

export const useRpcApi = () => {
    const rpcConfig = useRpcConfigStore();
    const chainInfo = useChainInfoStore();
    const {showToast} = useToast();

    const connectRpcHandle = () => {
        const baseUrl = `http://${rpcConfig.value.host}:${rpcConfig.value.port}`;
        chainInfo.value = {...chainInfo.value, ...rpcConfig.value};
        if (!rpcConfig.value.host || !rpcConfig.value.port) {
            showToast("please input your node ip or port", "error")
            return;
        }
        klay_chainID(baseUrl);
        klay_client(baseUrl);
        klay_protocolVersion(baseUrl);
        klay_peer(baseUrl);
    }

    const klay_chainID = async (baseUrl) => {
        const {data} = await useFetch(`/api/klay_chainID`, {params: {baseUrl}});
        if (data.value?.result) {
            chainInfo.value.chainId = +(data.value?.result).toString(10);
        } else {
            showToast("connect error", "error")
        }
    }

    const klay_client = async (baseUrl) => {
        const {data} = await useFetch(`/api/klay_client`, {params: {baseUrl}});
        chainInfo.value.client = data.value?.result;
    }

    const klay_protocolVersion = async (baseUrl) => {
        const {data} = await useFetch(`/api/klay_protocolVersion`, {params: {baseUrl}});
        chainInfo.value.protocolVersion = +(data.value?.result).toString(10);
    }

    const klay_peer = async (baseUrl) => {
        const {data} = await useFetch(`/api/klay_peer`, {params: {baseUrl}});
        chainInfo.value.peerCount = +(data.value?.result).toString(10);
    }

    const admin_nodeInfo = async (baseUrl) => {
        await useFetch(`/api/admin_nodeInfo`, {params: {baseUrl}});
    }

    return {
        connectRpcHandle,
    }
}
