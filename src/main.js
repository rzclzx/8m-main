// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Filter from './plugins/filter'
// import Swiper from 'swiper'
// import 'swiper/dist/css/swiper.min.css'
import $ from 'jquery';
Vue.config.productionTip = false
/* eslint-disable no-new */

import StUIRow from '../node_modules/st-ui/packages/row'
import ApiConfig from '../myConfig/api.config'
Vue.use(StUIRow)
// Vue.use(Swiper)

// 配置过滤器
Object.keys(Filter).forEach(key => {
  Vue.filter(key, Filter[key])
})


var browser = {
  versions: (function () {
    var u = navigator.userAgent;
    // console.log(u)
    return {  // 移动终端浏览器版本信息
      trident: u.indexOf('Trident') > -1, // IE内核
      presto: u.indexOf('Presto') > -1, // opera内核
      webKit: u.indexOf('AppleWebKit') > -1, // 苹果、谷歌内核
      gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1, // 火狐内核
      mobile: !!u.match(/AppleWebKit.*Mobile/i) || !!u.match(/MIDP|SymbianOS|NOKIA|SAMSUNG|LG|NEC|TCL|Alcatel|BIRD|DBTEL|Dopod|PHILIPS|HAIER|LENOVO|MOT-|Nokia|SonyEricsson|SIE-|Amoi|ZTE|Android/), //是否为移动终端
      ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
      android: u.indexOf('Android') > -1 || u.indexOf('Linux') > -1, // android终端或者uc浏览器
      iPhone: u.indexOf('iPhone') > -1 || u.indexOf('Mac') > -1, // 是否为iPhone或者QQHD浏览器
      iPad: u.indexOf('iPad') > -1, // 是否iPad
      webApp: u.indexOf('Safari') == -1 // 是否web应该程序，没有头部与底部
    };
  })()
};
if (!browser.versions.mobile) {
  window.location.href = ApiConfig.mainDomain
} else {
  new Vue({
    el: '#app',
    router,
    store,
    components: { App},
    template: '<App/>'
  })
}

