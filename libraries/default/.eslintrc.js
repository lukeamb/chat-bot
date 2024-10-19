require("@rushstack/eslint-patch/modern-module-resolution")

module.exports = {
  extends: ["@lukeamb/eslint-config/src/node"],
  parserOptions: { tsconfigRootDir: __dirname },
}
