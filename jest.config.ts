import type { Config } from "jest";
import nextJest from "next/jest.js";

const createJestConfig = nextJest({
  // Provide the path to your Next.js app to load next.config.js and .env files in your test environment
  dir: "./",
});

const config: Config = {
  preset: "ts-jest",
  coverageProvider: "v8",
  testEnvironment: "jest-environment-jsdom",
  // transform: {
  //   '^.+\\.(ts|tsx)$': ["ts-jest",{}], // Handle TypeScript files
  //   '^.+\\.(js|jsx)$': 'babel-jest', // Handle JavaScript/JSX files
  // },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  setupFilesAfterEnv: ["<rootDir>/jest.setup.ts"], // For Jest setup like jest-dom
  moduleNameMapper: {
    "^@/(.*)$": "<rootDir>/$1",
  },
};

export default createJestConfig(config);
