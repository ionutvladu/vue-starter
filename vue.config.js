module.exports = {
  transpileDependencies: [
    'vuetify'
  ],
  devServer: {
    proxy: {
      '/api/': {
        target: 'http://localhost:3000/',
        logLevel: 'debug',
        changeOrigin: true,
        pathRewrite: { '^/api': '/' }
      }
    }
  }
}
