const path = require('path');

module.exports = {
    
    /* 開発が環境か本番か */
    mode: 'production',
    /* バンドル時に読み込むファイル */
    entry: path.resolve(__dirname, "./frontend/src/index.jsx"),
    
    /* 出力先のディレクトリとファイル名 */
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },

    /* 開発サーバーを立ち上げる時に読み込むディレクトリ */      
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist')
        }
    },

    /* 使用するモジュール
    　　.cssで終わるファイルには、style-loader及びcss-loaderを適用 */
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.jsx$/,
                    use: {
                        loader: 'babel-loader',
                        options: {
                            //↓JSX構文を使ったjsファイルを読み込むためのpresetsを追加する
                            presets: [
                                '@babel/preset-react' //ここにpresetを追加
                            ],
                        }
                    },
            },
            {
                //拡張子がpng,jpg,gif,svgを検知したら
                test: /\.(png|jpg|gif|svg)/,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            name: './images/profile.png'
                        }
                    }
                ]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
      },

    /* サーバー側とブラウザ側、どちらにコンパイルするかの設定
    サーバー側: 'node', ブラウザ側: 'web'
    */
    target: 'web',
}

//"test": "echo \"Error: no test specified\" && exit 1"
//"start": "npx webpack serve --mode development",