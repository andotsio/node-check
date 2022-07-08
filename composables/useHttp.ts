import axios from 'axios';

export const useHttp = () => {
    const httpService = async (baseURL = "https://public-node-api.klaytnapi.com/v1/cypress", rpcBody) => {
        console.log(baseURL)
        try {
            let httpService = axios.create({
                baseURL,
                headers: {
                    'Content-Type': 'application/json',
                },
            });

            httpService.interceptors.request.use(function (request: any) {
                request.requestStart = Date.now();
                return request;
            });

            httpService.interceptors.response.use(
                function (response: any) {
                    response.latency = Date.now() - response.config.requestStart;
                    return response;
                },
                function (error) {
                    if (error.response) {
                        error.response.latency = null;
                    }

                    return Promise.reject(error);
                }
            );

            // @ts-ignore
            const {data, latency} = await httpService.post('', rpcBody);
            return {...data, latency}
        } catch (error) {
            console.log(baseURL, error);
            return null;
        }
    };
    return {
        httpService,
    }
}
