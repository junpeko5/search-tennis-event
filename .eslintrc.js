module.exports = {
  env: {
    browser: true,
    es6: true
  },
  extends: ["plugin:react/recommended", "airbnb"],
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly"
  },
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 2018,
    sourceType: "module"
  },
  plugins: [
    "@typescript-eslint",
    "jest",
    "prettier",
    "prefer-arrow",
    "react",
    "react-hooks"
  ],
  root: true,
  settings: {
    "import/resolver": {
      node: {
        extensions: [".js", "jsx", ".ts", ".tsx"]
      }
    },
    react: {
      version: "detect"
    }
  },
  rules: {
    "import/extensions": [
      "error",
      "always",
      {
        js: "never",
        jsx: "never",
        ts: "never",
        tsx: "never"
      }
    ],
    "react/jsx-filename-extension": [1, { extensions: [".jsx", ".tsx"] }]
  }
};