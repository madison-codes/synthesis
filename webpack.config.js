const path = require("path");
module.exports = {
    entry: path.join(__dirname, "src", "entry.tsx"),
    output: {
        path: path.join(__dirname, "dist"),
        filename: "build.js"
    },
    devtool: "source-map",
    resolve: {
        extensions: [" ", ".webpack.js", ".web.js", ".ts", ".tsx", ".js"]
    },
    devServer: {
        contentBase: path.join(__dirname, "src")
    },
    module: {
        rules: [{
                test: /\.tsx?$/,
                loader: "awesome-typescript-loader"
            },
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                include: [/src/, /node_modules/]
            },
            {
                test: /\.m?jsx$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader",
                    loader: "source-map-loader"

                }
            },
            {
                test: /\.m?js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.json$/,
                loader: "json-loader",
                include: "/build/contracts/"
            },
            {
                test: /\.mp3$/,
                loader: 'file-loader'
            }
        ]
    }
};