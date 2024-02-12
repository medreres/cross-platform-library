import fs from 'fs';
import path from 'path';

import { externals } from './externals.mjs';

const packageJson = JSON.parse(fs.readFileSync('./package.json'));

const platformsExtensions = {
  web: ['.web.ts', '.web.tsx'],
  mobile: ['.native.ts', '.native.tsx'],
};

const tsConfigFilename = 'tsconfig.webpack.json';

/**
 * @return {import('webpack').Configuration}
 */
export default (env) => {
  const platform = env.PLATFORM;
  const platformExtensions = platformsExtensions[platform];
  const outputPath = path.resolve('dist');

  return {
    mode: 'production',
    entry: path.resolve('src', 'index.ts'),
    output: {
      filename: `index.${platform}.js`,
      path: outputPath,
      publicPath: path.resolve('dist'),
      library: { type: 'commonjs' },
    },
    externals,
    module: {
      rules: [
        {
          test: /\.(tsx?)$/,
          loader: 'ts-loader',
          options: {
            configFile: tsConfigFilename,
            compiler: 'ttypescript',
            onlyCompileBundledFiles: true,
            compilerOptions: {
              declaration: false,
              declarationDir: null,
            },
          },
          include: /src/,
          exclude: new RegExp(`${packageJson.name}/node_modules`),
        },
        {
          test: /\.(png)$/i,
          loader: 'url-loader',
        },
      ],
    },
    resolve: {
      extensions: ['.ts', '.tsx', '.js', ...platformExtensions],
    },
  };
};
