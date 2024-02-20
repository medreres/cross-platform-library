import path from 'path';
import { Configuration } from 'webpack';
import { externals, platformsExtensions, tsFilesWithoutDts } from './config';
import { removePlatformExtensions } from './script';
import { AfterBundlePlugin } from './plugin';

const config = (env) => {
  const distPath = path.resolve(__dirname, '../dist');

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
      path: distPath,
      chunkFilename: 'test',
      library: { type: 'commonjs' },
    },
    externals,
    module: {
      rules: [
        {
          test: tsFilesWithoutDts,
          loader: 'ts-loader',
          options: {
            compiler: 'ttypescript',
            onlyCompileBundledFiles: true,
          },
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', ...platformExtensions],
    },
    plugins: [
      new AfterBundlePlugin({
        callback: () => removePlatformExtensions(distPath),
      }),
    ],
  } satisfies Configuration;
};

export default config;
