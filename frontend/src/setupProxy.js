const { createProxyMiddleware } = require('http-proxy-middleware');
module.exports = function (app) {
    app.use(
        '/api',
        createProxyMiddleware({
            target: 'https://to-do-list-00q9.onrender.com:2000/data',
            changeOrigin: true,
        })
    );
};