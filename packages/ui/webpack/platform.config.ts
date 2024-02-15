import path from 'path';
import { Configuration, WebpackPluginInstance } from 'webpack';
import { externals, outputPath, platformsExtensions, tsFilesWithoutDts } from './config';
import TsDeclarationWebpackPlugin from 'typescript-declaration-webpack-plugin';

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
          test: tsFilesWithoutDts,
          loader: 'ts-loader',
          include: /src/,
          options: {
            compiler: 'ttypescript',
            onlyCompileBundledFiles: true,
            compilerOptions: {
              declaration: true,
              declarationDir: outputPath,
            },
          },
        },
      ],
    },
    resolve: {
      extensions: ['.js', '.jsx', '.ts', '.tsx', ...platformExtensions],
    },
    // plugins: [new TsDeclarationWebpackPlugin() as unknown as WebpackPluginInstance],
  } satisfies Configuration;
};

export default config;
