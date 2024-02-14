import { Configuration } from 'webpack';
import path from 'path';

const config: Configuration = {
  mode: 'development',
  entry: path.resolve('src/index.tsx'),
  devtool: 'inline-source-map',
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
    ],
  },
  resolve: {
    extensions: ['.tsx', '.ts', '.js'],
  },
  externals: { 'react-native': true },
  output: {
    filename: 'index.js',
    clean: true,
  },
};

export default config;
