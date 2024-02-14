const path = require("path");
import { Configuration } from "webpack";

export const externals = [
  "react-native",
  "react",
  "react-dom",
  "react-native-date-picker",
  "@expo/vector-icons/AntDesign",
  "react-native-safe-area-context",
  "react-native-svg",
  "lottie-react-native",
  "native-base",
  "expo-haptics",
  "@loticai/lotic-analytics-service",
  "react-native-gesture-handler",
  "react-native-modalize",
  "react-native-snap-carousel",
];

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
    module: {
      rules: [
        {
          test: /\.(tsx?)$/,
          loader: "babel-loader",
          include: /src/,
        },
      ],
    },
    resolve: {
      extensions: [".ts", ".tsx", ".js", ...platformExtensions],
    },
    output: {
      filename: "index.js",
      path: path.resolve(__dirname, "dist"),
      library: { type: "commonjs" },
    },
    externals,
  };
};

export default config;
