#!/usr/bin/env node

const { execSync } = require("child_process");
const runCommand = (command) => {
  try {
    execSync(command, { stdio: "inherit" });
  } catch (e) {
    console.error(e);
    return false;
  }
  return true;
};

const repoName = process.argv[2];
const gitCheckoutCommand = `git clone --depth 1 https://github.com/techunicorn-dxb/templateReactApp ${repoName}`;
const gitInstallDepsCommand = `cd ${repoName} && npm install`;

console.log(`Creating new project ${repoName}`);
const success = runCommand(gitCheckoutCommand);
if (!success) {
  console.error("Failed to clone template repo");
  process.exit(1);
}

console.log("Installing dependencies");
const installSuccess = runCommand(gitInstallDepsCommand);
if (!installSuccess) {
  console.error("Failed to install dependencies");
  process.exit(1);
}

console.log("Successfully created new project");
console.log(
  "To get started, run the following commands:\ncd ${repoName} && npm start"
);
