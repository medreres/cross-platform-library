import path from "path";
import { Configuration } from "webpack";
import { externals } from "./externals";

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
      library: { type: "commonjs" },
      clean: true,
    },
    externals,
    module: {
      rules: [
        {
          test: dTsFiles,
          use: "ts-loader",
          include: /src/,
        },
        {
          test: tsFilesWithoutDts,
          use: "ts-loader",
          include: /src/,
        },
      ],
    },
    resolve: {
      extensions: ["", ".js", ".jsx", ".ts", ".tsx", ...platformExtensions],
    },
  };
};

export default config;
