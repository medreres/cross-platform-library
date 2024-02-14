import path from "path";
import { Configuration } from "webpack";
import { externals } from "./externals";
import TypescriptDeclarationPlugin from "typescript-declaration-webpack-plugin";

const dTsFiles = /(?<=(d))\.(tsx?)$/;
const tsFilesWithoutDts = /(?<!(d))\.(tsx?)/;

const platformsExtensions = {
  web: [".web.ts", ".web.tsx"],
  mobile: [".native.ts", ".native.tsx"],
} satisfies Record<string, string[]>;

const config: (env: Record<string, string>) => Configuration = (env) => {
  const platform = env.PLATFORM as keyof typeof platformsExtensions;

  const platformExtensions = platformsExtensions[platform];

  return {
    entry: "./src/index.tsx",
    mode: "development",
    devtool: "inline-source-map",
    output: {
      // filename: `index.${platform}.js`,
      filename: `index.js`,
      path: path.resolve(__dirname, "../dist"),
      chunkFilename: (pathData, assetInfo) => {
        console.log("pathData", pathData);

        console.log("assetInfo", assetInfo);

        return "test";
      },
      library: { type: "commonjs" },
      clean: true,
    },
    externals,
    module: {
      rules: [
        {
          test: tsFilesWithoutDts,
          use: "ts-loader",
          include: /src/,
        },
        // {
        //   test: dTsFiles,
        //   loader: "file-loader",
        //   options: {
        //     name: "[name].[ext]",
        //   },
        // },
      ],
    },
    resolve: {
      extensions: ["", ".js", ".jsx", ".ts", ".tsx", ...platformExtensions],
    },
    plugins: [
      new TypescriptDeclarationPlugin({
        removeMergedDeclarations: true,
        out: "index.d.ts",
        removeComments: false,
      }),
    ],
  };
};

export default config;
