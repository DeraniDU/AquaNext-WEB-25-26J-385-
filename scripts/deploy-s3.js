#!/usr/bin/env node

const { execSync } = require("node:child_process");
const { existsSync } = require("node:fs");
const path = require("node:path");

const DEFAULT_REGION = "ap-south-1";

function run(command) {
  execSync(command, { stdio: "inherit" });
}

function getArg(name) {
  const flag = `--${name}`;
  const shortFlag = `-${name}`;
  const args = process.argv.slice(2);

  for (let i = 0; i < args.length; i += 1) {
    if ((args[i] === flag || args[i] === shortFlag) && args[i + 1]) {
      return args[i + 1];
    }
  }

  return undefined;
}

function main() {
  const bucket = getArg("bucket") || getArg("BucketName") || process.env.S3_BUCKET;
  const region = getArg("region") || getArg("Region") || process.env.AWS_REGION || DEFAULT_REGION;
  const outputDir = path.resolve(process.cwd(), "out");

  if (!bucket) {
    console.error("Missing S3 bucket. Use --bucket <name> or set S3_BUCKET.");
    process.exit(1);
  }

  console.log("Building static site...");
  run("npm run build");

  if (!existsSync(outputDir)) {
    console.error('Build output folder "out" not found.');
    console.error('Set `output: "export"` in next.config.ts to generate static files.');
    process.exit(1);
  }

  console.log(`Uploading ${outputDir} to s3://${bucket} ...`);
  run(`aws s3 sync "${outputDir}" "s3://${bucket}" --delete --region "${region}"`);

  console.log("Deployment complete.");
}

main();
