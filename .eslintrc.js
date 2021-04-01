module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: [
    "@nuxtjs",
    "prettier",
    "plugin:prettier/recommended",
    "plugin:nuxt/recommended",
    "plugin:@intlify/vue-i18n/recommended",
  ],
  plugins: [],
  // add your custom rules here
  rules: {
    "no-console": "off",
    "@intlify/vue-i18n/no-raw-text": ["error"],
    "@intlify/vue-i18n/no-missing-keys": ["off"],
    "@intlify/vue-i18n/key-format-style": [
      "error",
      "camelCase",
      {
        allowArray: true,
      },
    ],
  },
};
