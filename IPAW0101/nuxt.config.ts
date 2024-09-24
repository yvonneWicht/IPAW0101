// https://nuxt.com/docs/api/configuration/nuxt-config
import { resolve } from "path";
export default defineNuxtConfig({
  //durch den Alias muss man nicht immer das Verzeichnis eingeben
  alias: {
    '@': resolve (__dirname, "/"),
  },
  css: ["~/assets/main.scss"],
  //brauche ich das?
  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {},
  //   },
  // },
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss']
})