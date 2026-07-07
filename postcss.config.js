module.exports = {
  plugins: [
    require('postcss-import')({
      path: ['styles']
    }),
    require('autoprefixer')
  ]
};