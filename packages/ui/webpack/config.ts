export const externals = ['react-native', 'react', 'react-dom'];

export const platformsExtensions = {
  web: ['.web.ts', '.web.tsx'],
  mobile: ['.native.ts', '.native.tsx'],
} satisfies Record<string, string[]>;

export const dTsFiles = /(?<=(d))\.(tsx?)$/;
export const tsFilesWithoutDts = /(?<!(d))\.(tsx?)/;
