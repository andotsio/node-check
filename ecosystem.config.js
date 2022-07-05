module.exports = {
    apps: [
        {
            name: 'NuxtAppName',
            exec_mode: 'cluster',
            instances: 'max',
            script: './.output/server/index.mjs',
            env: {
                "PORT": 3002,
                "HOST": "0.0.0.0"
            }
        },
    ],
};
