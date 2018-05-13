module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    browser: true,
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["import", "jsx-a11y", "prettier", "react"],
  rules: {
    "import/prefer-default-export": 0,
    "no-underscore-dangle": 0,
    "no-console": 1,
    "prettier/prettier": "error",
  },
};
