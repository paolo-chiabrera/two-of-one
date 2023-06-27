import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  dir: "./src",
});
/** @type {import('jest').Config} */
const config = {};
export default createJestConfig(config);
