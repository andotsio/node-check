interface RpcConfig {
    host: string;
    port: string;
    metricsPort: string;
}

interface ChainInfo {
    chainId: number;
    client: string;
    protocolVersion: number;
    host: string;
    port: string;
    metricsPort: string;
    peerCount: number;
}
