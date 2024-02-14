import path from "path";
import { Configuration } from "webpack";
import { externals } from "./externals";

const dTsFiles = /(?<=(d))\.(tsx?)$/;
const tsFilesWithoutDts = /(?<!(d))\.(tsx?)/;
const outputPath = path.resolve("dist", "types");

const config: (env: Record<string, string>) => Configuration = (env) => {
  return {
    entry: "./src/index.tsx",
    mode: "development",
    devtool: "inline-source-map",
    output: {
      // filename: `index.${platform}.js`,
      filename: `index.js`,
      path: path.resolve(__dirname, "../dist"),
      library: { type: "commonjs" },
      clean: true,
    },
    externals,
    module: {
      rules: [
        {
          test: /\.d\.ts$/,
          loader: "file-loader",
          options: {
            name: "[path][name].[ext]",
          },
        },
        {
          test: /\.(tsx?)$/,
          loader: "ts-loader",
          include: /src/,
          options: {
            compilerOptions: {
              // declaration: true,
              declarationDir: outputPath,
              noEmit: false,
            },
          },
        },
      ],
    },
    resolve: {
      extensions: [".js", ".jsx", ".ts", ".tsx", ".d.ts"],
    },
  };
};

export default config;
