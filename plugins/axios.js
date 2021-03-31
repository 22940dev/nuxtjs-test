import Cookies from 'js-cookie'
import { KEYS } from '@/constants'

export default function ({ $axios }) {
  $axios.onRequest((config) => {
    const accessToken = Cookies.get(KEYS.ACCESS_TOKEN)

    if (accessToken) {
      config.headers.common.Authorization = accessToken
    }
  })

  $axios.onResponse((res) => {
    const data = res.data
    return Promise.resolve(data)
  })

  $axios.onError((error) => {
    console.log(error)
  })
}
