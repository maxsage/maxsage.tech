System.register(['path'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var path_1;
    return {
        setters:[
            function (path_1_1) {
                path_1 = path_1_1;
            }],
        execute: function() {
            exports_1("default",{
                debug: true,
                devtool: 'inline-source-map',
                noInfo: false,
                entry: [
                    path_1.default.resolve(__dirname, 'src/index')
                ],
                target: 'web',
                output: {
                    path: path_1.default.resolve(__dirname, 'src'),
                    publicPath: '/',
                    filename: 'bundle.js'
                },
                plugins: [],
                module: {
                    loaders: [
                        { test: /\.ts$/, exclude: /node_modules/, loaders: ['webpack-typescript'] },
                        { test: /\.css$/, loaders: ['style', 'css'] }
                    ]
                }
            });
        }
    }
});
//# sourceMappingURL=webpack.config.dev.js.map