/* eslint-disable no-undef */
module.exports = {
 root: true,
 extends: ["@igorkowalczyk/eslint-config"],
 env: {
  node: true,
  browser: true,
 },
 parserOptions: {
  ecmaVersion: "latest",
  sourceType: "module",
 },
 settings: {
  next: {
   rootDir: ["apps/*/"],
  },
 },
};