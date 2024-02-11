module.exports = {
  roots: ["<rootDir>/src"],
  clearMocks: true,
  coverageProvider: "v8",
  transform: {
    "^.+\\.ts?$": "@swc/jest",
  },
};
