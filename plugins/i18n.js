import Vue from 'vue'
import VueI18n from 'vue-i18n'
import { LOCALE } from '@/constants'

Vue.use(VueI18n)

export default ({ app, store }) => {
  app.i18n = new VueI18n({
    locale: store.state.i18n.locale,
    fallbackLocale: LOCALE,
    messages: {
      en: require('~/locales/en.json'),
    },
  })
}
