import path from "path";

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

export const platformsExtensions = {
  web: [".web.ts", ".web.tsx"],
  mobile: [".native.ts", ".native.tsx"],
} satisfies Record<string, string[]>;

export const dTsFiles = /(?<=(d))\.(tsx?)$/;
export const tsFilesWithoutDts = /(?<!(d))\.(tsx?)/;

export const outputPath = path.resolve("dist");
