import {useHttp} from "~/composables/useHttp";

export default defineEventHandler(async (event) => {
    const {httpService} = useHttp();
    const rpcBody = {"jsonrpc": "2.0", "method": "klay_blockNumber", "params": [], "id": 83};
    const data = await httpService("", rpcBody);
    console.log('main', data);
    return data;
});
