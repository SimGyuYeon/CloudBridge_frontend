const { defineConfig } = require("@vue/cli-service");

const target = "http://127.0.0.1:8000";

module.exports = defineConfig({
  transpileDependencies: true,
  devServer: {
    port: 8080,
    proxy: {
      //proxy 요청을 보낼 api 시작 부분
      "^/api": {
        target,
        changeOrigin: true,
      },
      "^/media": {
        target,
        changeOrigin: true,
      },
    },
  },
});
