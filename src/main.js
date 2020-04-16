import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Progress from 'easy-circular-progress';
import {MediaPlugin,LayoutPlugin,ModalPlugin,CardPlugin,VBScrollspyPlugin,DropdownPlugin, TablePlugin,BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import VueTelInput from 'vue-tel-input'
import vueCountryRegionSelect from 'vue-country-region-select'
import AnimatedNumber from 'animated-number-vue'
import VueNumber from 'vue-number-animation'
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'
import VueParticles from 'vue-particles'
import VueParticlesBg from "particles-bg-vue";
import VueNumeric from 'vue-numeric-currency'
import {Vuelidate} from 'vuelidate'
import NProgress from 'vue-nprogress'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

Vue.use(Loading);
Vue.use(BootstrapVueIcons)
Vue.use(Progress)
Vue.use(MediaPlugin)
Vue.use(LayoutPlugin)
Vue.use(ModalPlugin)
Vue.use(CardPlugin)
Vue.use(VBScrollspyPlugin)
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(VueTelInput)
Vue.use(vueCountryRegionSelect)
Vue.use(AnimatedNumber)
Vue.use(VueNumber)
Vue.use(IconsPlugin)
Vue.use(VueParticles)
Vue.use(VueParticlesBg);
Vue.use(VueNumeric)
Vue.use(Vuelidate)
Vue.use(NProgress)

// eslint-disable-next-line no-unused-vars
const options = {
  latencyThreshold: 200, // Number of ms before progressbar starts showing, default: 100,
  router: true, // Show progressbar when navigating routes, default: true
  http: false // Show progressbar when doing Vue.http, default: true
};

Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
