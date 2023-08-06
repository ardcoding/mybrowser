const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');

const app = express();

app.use('/external-site', createProxyMiddleware({
  target: 'https://app.mobalytics.gg',
  changeOrigin: true,
}));

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Proxy server running on port ${PORT}`);
});
