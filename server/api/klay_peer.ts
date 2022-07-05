import {useHttp} from "~/composables/useHttp";

export default defineEventHandler(async (event) => {
    const {httpService} = useHttp();
    const query = useQuery(event);
    const rpcBody = {"jsonrpc":"2.0","method":"net_peerCount","params":[],"id":74};
    return await httpService(query.baseUrl, rpcBody);
});
