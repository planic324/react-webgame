const path = require('path');
const webpack = require('webpack');

module.exports = {
    name: 'word-relay-setting',
    mode: 'development', // 실서비스 : production
    devtool: 'eval', // 속도 빠르게
    resolve:  {
        extensions : ['.js', '.jsx']
    },

    entry: {
        app: ['./client']
    }, // 입력

    module: {
        rules: [{
            test: /\.jsx?/,
            loader: 'babel-loader',
            options: {
                presets: [
                    ['@babel/preset-env', {
                        targets: {
                            browsers: ['> 5% in KR', 'last 2 chrome versions'],
                        },
                        debug: true,
                    }], // preset-env 내에 추가적으로 설정을 하는 경우 객채로 만들어서 setting을 한다.
                    '@babel/preset-react'
                ],
                plugins: ['@babel/plugin-proposal-class-properties'],
            },
        }],
    },

    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js',
    }, // 출력
}