import path from 'path';
import { Configuration } from 'webpack';

export const externals = ['react-native', 'react', 'react-dom'];

const config = () => {
  const distPath = path.resolve(__dirname, '../dist');

  return {
    entry: './src/index.tsx',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      filename: 'index.js',
      path: path.resolve('dist'),
      library: { type: 'commonjs' },
    },
    externals,
    module: {
      rules: [
        {
          test: /\.d\.ts$/,
          loader: 'file-loader',
          options: {
            name: (name) => {
              return name.split('src')[1];
            },
          },
        },
        {
          test: /(?<!d).tsx?$/,
          loader: 'ts-loader',
          options: {
            compiler: 'ttypescript',
            onlyCompileBundledFiles: true,
            compilerOptions: {
              declaration: true,
              declarationDir: distPath,
            },
          },
          include: /src/,
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.d.ts'],
    },
  } satisfies Configuration;
};

export default config;
