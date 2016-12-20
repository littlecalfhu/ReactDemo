/**
 * Created by Administrator on 2016/12/15.
 */
module.exports = {
    entry: __dirname + "/app/app.js",
    output: {
        path: __dirname+"/build",
        filename:"bundle.js"
    },
    module:{
        loaders:[
            {
                test: /\.json$/,
                loader:"json"
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader:"babel",
                query:{
                    presets :['es2015','react']
                }
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: 'url-loader?limit=8192' // 这里的 limit=8192 表示用 base64 编码 <= ８K 的图像
            },
            {
                test: /\.css$/,
                loader: 'style!css'
            }
        ]
    },
    devServer:{
        contentBase:"./build",
        colors:true,
        histroyApiFallback: true,
        inline:true,
        port:3000
    }
}