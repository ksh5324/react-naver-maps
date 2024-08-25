const path = require('path');

module.exports = {
  entry: {
    main: {
      import: './src/index.ts',
    },
  },
  output: {
    chunkLoadTimeout: 3000,
    filename: '[name].bundle.[contenthash].js',
    charset: true,
    path: path.resolve(__dirname, 'dist'),
    assetModuleFilename: 'assets/[contenthash][ext]',
    clean: true,
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/,
        exclude: /node_module/,
        use: ['babel-loader'],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        use: [{ loader: 'file-loader' }],
        // type: "asset/resource",
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  resolve: {
    modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    extensions: ['.js', '.ts', '.tsx', '.png'],
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    },
  },
};
