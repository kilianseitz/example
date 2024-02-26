// https://nuxt.com/docs/api/configuration/nuxt-config
import * as fs from "fs";

export default defineNuxtConfig({
  devtools: { enabled: true },

  modules: ['@nuxt/content', '@nuxtjs/i18n', "nuxt-build-cache"],

  ssr: true,

  content:{
    documentDriven: true
  },

  i18n:{
    differentDomains: false,
    locales:[
        { code:'de', domain: 'example.de:3000' },
        { code:'en', domain: 'example.com:3000' }
    ],
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'locale',
      alwaysRedirect: true,
      redirectOn: 'all',
    },
  }
})
