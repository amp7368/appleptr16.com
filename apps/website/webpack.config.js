const { composePlugins, withNx } = require('@nrwl/webpack');
const { withReact } = require('@nrwl/react');

module.exports = composePlugins(
    withNx(),
    withReact({ svgr: true }),
    (config, { options, context }) => {
        // customize webpack config here
        return {
            ...config,
            module: {
                ...config.module,
                rules: [
                    ...config.module.rules,
                    {
                        test: [/\.(java)$/i, /\.md$/i],
                        use: 'file-loader',
                    },
                ],
            }
        };
    }
);
