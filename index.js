module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    browser: true,
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["import", "jsx-a11y", "prettier", "react", "react-hooks"],
  rules: {
    "react-hooks/rules-of-hooks": "error",
    "import/extensions": [
      "error",
      "always",
      {
        "js": "never",
        "jsx": "never"
      }
    ],
    "import/prefer-default-export": 0,
    "no-underscore-dangle": 0,
    "no-console": 1,
    "prettier/prettier": "error",
    "react/jsx-filename-extension": 0
  },
  settings: {
    "import/resolver": {
      webpack: {
        config: "webpack.config.js",
        extensions: [
          ".js",
          ".jsx"
        ]
      }
    }
  }
};
