import {useHttp} from "~/composables/useHttp";

export default defineEventHandler(async (event) => {
    const {httpService} = useHttp();
    const query = useQuery(event);
    const rpcBody = {"jsonrpc": "2.0", "method": "klay_chainID", "id": 1};
    return await httpService(query.baseUrl, rpcBody);
});
