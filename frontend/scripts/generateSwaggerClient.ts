import { exec } from 'child_process';
import 'dotenv/config';
import * as fs from 'fs';
import path from 'path';
import { exit } from 'process';

// Configurable options
// =========================
const tempDirName = `.openapi-temp`;
const outputDir = `src/api`;
// =========================

const outDir = path.join(__dirname, '..', outputDir);
const tempDir = path.join(__dirname, '..', tempDirName);

// Make the directory if it doesn't exist
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

const specURL = path.join(__dirname, '..', '..', 'backend/spec.yaml');

console.log(`Generating client API from spec at ${specURL}`);

// Generate the client api
exec(
  `openapi-generator-cli generate -g typescript-axios --additional-properties=withoutPrefixEnums=true -i ${specURL} -o ${tempDir}`,
  (err, stdout, stderr) => {
    if (err) {
      console.log(err);
      exit(err.code);
    }
    if (stdout) console.log(stdout);
    if (stderr) console.log(stderr);

    // Copy only .ts files to output dir
    fs.readdirSync(tempDir).forEach((file) => {
      if (file.endsWith('.ts')) {
        fs.copyFileSync(`${tempDir}/${file}`, `${outDir}/${file}`);
      }
    });

    // Delete temp directory
    fs.rmSync(tempDir, { recursive: true });
  }
);
