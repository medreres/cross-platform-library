import path from 'path';
import { Configuration } from 'webpack';
import { externals, platformsExtensions } from './config';

const config = (env) => {
  const platform = env.PLATFORM as keyof typeof platformsExtensions;

  if (!platform) {
    throw new Error('Specify the bundle platform!');
  }

  const platformExtensions = platformsExtensions[platform];

  return {
    entry: './src/index.tsx',
    mode: 'development',
    devtool: 'inline-source-map',
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, '../dist'),
      chunkFilename: 'test',
      library: { type: 'commonjs' },
      clean: true,
    },
    externals,
    module: {
      rules: [
        {
          test: /\.(tsx?)$/,
          loader: 'ts-loader',
          include: /src/,
          exclude: /node_modules/,
          options: {
            compiler: 'ttypescript',
            onlyCompileBundledFiles: true,
            compilerOptions: {
              declaration: true,
              declarationDir: path.resolve(__dirname, '../dist'),
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', ...platformExtensions],
    },
    plugins: [],
  } satisfies Configuration;
};

export default config;
