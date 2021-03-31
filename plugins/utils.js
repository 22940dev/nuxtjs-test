import Vue from 'vue'
import format from 'string-format'
import Cookies from 'js-cookie'
import * as Utils from '@/utils'
import moment from 'moment'

Vue.prototype.$format = format
Vue.prototype.$moment = moment
Vue.prototype.Cookies = Cookies
Vue.prototype.Utils = Utils
