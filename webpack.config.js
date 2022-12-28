module.exports = {
    entry : "./app.js",
    output : {
        path : __dirname + "/dist",
        filename : "bundle.js"
    }
    ,
    resolve: {
       
    fallback: {   
    "fs": false,
    "tls": false,
    "net": false,
    "path": false,
    "zlib": false,
    "http": false,
    "https": false,
    "stream": false,
    "crypto": false,
    "http": require.resolve("stream-http"),
    "crypto": require.resolve("crypto-browserify") }
  }
  

};
