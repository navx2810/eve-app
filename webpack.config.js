module.exports = {

    entry: "./src/index",
    output: {
        path: `${__dirname}/dist`,
        filename: "bundle.js"
    },

    resolve: {
        extensions: ['', '.ts', '.tsx', '.js', '.jsx'],

        alias: { vue: `${__dirname}/node_modules/vue/dist/vue.js` }
    },

    devtool: 'source-map',

    module: {
        loaders: [
            { test: /\.tsx?$/, loader: "awesome-typescript-loader" },
        ]
    }
}