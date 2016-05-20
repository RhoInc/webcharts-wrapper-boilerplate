module.exports = {
  entry: './src/chartfoundry/bin/Renderer.js',
  format: 'umd',
  globals: {
    webcharts: 'webCharts',
    d3: 'd3',
    react: 'React'
  }
}; 