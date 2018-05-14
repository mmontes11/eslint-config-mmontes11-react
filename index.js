module.exports = {
  parser: "babel-eslint",
  env: {
    es6: true,
    browser: true,
  },
  extends: ["airbnb", "prettier", "prettier/react"],
  plugins: ["import", "jsx-a11y", "prettier", "react"],
  rules: {
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
  "import/resolver": {
    webpack: {
      config: "webpack.config.js",
      extensions: [
        ".js",
        ".jsx"
      ]
    }
  }
};
