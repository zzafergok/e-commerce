const CracoLessPlugin = require('craco-less-plugin')

module.exports = {
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        modifyVars: {
          hack: `true;@import "${require.resolve(
            './src/assets/less/e-commerce.less'
          )}";`
        },
        javascriptEnabled: true
      }
    }
  ]
}
