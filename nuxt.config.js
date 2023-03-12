export default {
  target: "static",
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: "Dental",
    htmlAttrs: {
      lang: "en",
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "" },
      { name: "format-detection", content: "telephone=no" },
    ],

    link: [
      { rel: "icon", type: "image/x-icon", href: "/fav.svg" },
      { hid: "canonical", rel: "canonical", href: "https://vardandental.in/" },
      {
        hid: "alternate",
        rel: "alternate",
        hreflang: "en-IN",
        href: "https://vardandental.in",
      },
    ],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ["~assets/scss/main.scss"],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    "@nuxtjs/sanity/module",
    "@nuxtjs/eslint-module",
    "@nuxtjs/fontawesome",
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    "@nuxtjs/axios",
    "@nuxtjs/sitemap",
    "@nuxtjs/robots",
  ],
  robots: {
    UserAgent: "*",
    Allow: "/",
    Sitemap: "https://vardandental.in/sitemap.xml",
  },

  sanity: {
    // module options
  },

  sitemap: {
    // options
    hostname: "http://vardandental.in/",
    gzip: true,
    exclude: [],
    routes: [],
  },

  fontawesome: {
    icons: {
      solid: true,
      brands: true,
      faSolid: true,
      faUserGradute: true,
    },
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: "/",
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},

  generate: {
    fallback: true,
  },
};
