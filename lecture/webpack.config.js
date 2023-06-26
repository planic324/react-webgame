const path = require('path');

module.exports = {
    name: 'word-relay-ssetting',
    mode: 'development',
    devtool: 'eval',
    resolve:  {
        extensions : ['.js', '.jsx', '.css']
    },
    entry: {
        app: ['./clinent']
    }, // 입력
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.js'
    }, // 출력
}