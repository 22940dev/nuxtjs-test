import Vue from 'vue'
import * as Constants from '@/constants'
import { ROUTE, ROUTE_API } from '@/constants/route'

Vue.prototype.Constants = Constants
Vue.prototype.$routePage = ROUTE
Vue.prototype.$routeApi = ROUTE_API
