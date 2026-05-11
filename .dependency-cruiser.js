/** @type {import('dependency-cruiser').IConfiguration} */
module.exports = {
  forbidden: [],
  allowed: [{ from: {}, to: {} }],
  options: {
    doNotFollow: { path: "^node_modules" },
    tsPreCompilationDeps: true,
    combinedDependencies: false,
    exclude: {
      path: [
        "^node_modules",
        "^dist",
        "^\\.next",
        "^apps/developer-docs/\\.next",
        "^coverage",
        "^playwright-report",
        "^\\.truecourse/logs",
      ],
    },
  },
};
