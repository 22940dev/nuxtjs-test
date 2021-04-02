export default {
  // Disable server-side rendering: https://go.nuxtjs.dev/ssr-mode
  ssr: false,

  // Target (https://go.nuxtjs.dev/config-target)
  target: "static",

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "nuxt-pwa-codebase",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
    ],
    link: [{ rel: "icon", type: "image/x-icon", href: "/favicon.ico" }],
  },

  // Progressive Web App: https://pwa.nuxtjs.org/
  pwa: {
    // Meta module: https://pwa.nuxtjs.org/meta
    meta: {
      theme_color: "#ffffff",
      lang: "en",
    },
    // Manifest module: https://pwa.nuxtjs.org/manifest
    manifest: {
      short_name: "Nuxt-pwa",
      name: "Nuxt pwa codebase",
      description: "An example of nuxt progressive web application codebase",
      background_color: "#000000",
      lang: "en",
      useWebmanifestExtension: false,
      // Disable Add to Home Screen button (the mini-infobar)
      // display: 'browser',
      // Basic Auth
      // crossorigin: 'use-credentials',
    },
    // Workbox module: https://pwa.nuxtjs.org/workbox
    workbox: {
      enabled: true,
      // cacheNames: {
      //   prefix: 'my-app',
      //   suffix: 'v1',
      //   precache: 'custom-precache-name',
      //   runtime: 'custom-runtime-name',
      //   googleAnalytics: 'custom-google-analytics-name',
      // },
      // runtimeCaching: [
      //   {
      //     urlPattern: 'https://fonts.googleapis.com/.*',
      //     handler: 'cacheFirst',
      //     method: 'GET',
      //     strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      //   },
      //   {
      //     urlPattern: 'https://cdn.snipcart.com/.*',
      //     method: 'GET',
      //     strategyOptions: { cacheableResponse: { statuses: [0, 200] } },
      //   },
      // ],
      importScripts: ["custom-sw.js"],
    },
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["@/styles/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    "@/plugins/sw.client.js",
    "@/plugins/i18n",
    "@/plugins/constants",
    "@/plugins/utils",
    "@/plugins/axios",
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    "@nuxtjs/eslint-module",
    // https://go.nuxtjs.dev/stylelint
    "@nuxtjs/stylelint-module",
    // https://pwa.nuxtjs.org/setup
    "@nuxtjs/pwa",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    // Simple usage
    "@nuxtjs/localtunnel",
  ],

  // Disable create eslintcache
  eslint: {
    cache: false,
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    postcss: {
      plugins: {
        "postcss-responsive-type": {},
        "postcss-pxtorem": {
          propList: ["*", "!border*"],
        },
      },
    },
  },

  server: {
    port: process.env.NUXT_ENV_PORT, // default: 3000
    host: process.env.NUXT_ENV_HOST, // default: localhost
  },
};
