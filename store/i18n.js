import { LOCALES, LOCALE } from '@/constants'

export const state = () => ({
  locales: LOCALES,
  locale: LOCALE,
})

export const mutations = {
  SET_LANG(state, locale) {
    if (state.locales.includes(locale)) {
      state.locale = locale
    }
  },
}
