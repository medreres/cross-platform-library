import fs from 'fs';
import path from 'path';

// Function to recursively traverse directories
export const removePlatformExtensions = (dir: string) => {
  const files = fs.readdirSync(dir);
  files.forEach((file) => {
    const filePath = path.join(dir, file);

    const stat = fs.statSync(filePath);

    if (stat.isDirectory()) {
      // Recursively traverse subdirectories
      removePlatformExtensions(filePath);
    } else {
      // Rename files with extension .web.ts or .native.ts to .ts
      if (file.includes('.web')) {
        const newFileName = file.split('.web').join('');
        const newPath = path.join(dir, newFileName);
        fs.renameSync(filePath, newPath);
        console.log(`Renamed: ${filePath} -> ${newPath}`);
      }

      if (file.includes('.native')) {
        const newFileName = file.split('.native').join('');
        const newPath = path.join(dir, newFileName);
        fs.renameSync(filePath, newPath);
        console.log(`Renamed: ${filePath} -> ${newPath}`);
      }
    }
  });
};
