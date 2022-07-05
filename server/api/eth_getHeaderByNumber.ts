import {useHttp} from "~/composables/useHttp";

export default defineEventHandler(async (event) => {
    const {httpService} = useHttp();
    const query = useQuery(event);
    const rpcBody = {"jsonrpc": "2.0", "method": "eth_getHeaderByNumber", "params": ["0x1b4"], "id": 1};
    return await httpService(query.baseUrl, rpcBody);
});
