import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// import axios from 'axios'
import './assets/css/style.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { BootstrapVue, IconsPlugin, BootstrapVueIcons } from 'bootstrap-vue'
import Vuelidate from 'vuelidate'
Vue.use(Vuelidate, BootstrapVueIcons)
// Progress Number Counter
import Progress from 'easy-circular-progress';
Vue.use(Progress)
import { MediaPlugin } from 'bootstrap-vue'
Vue.use(MediaPlugin)
// This imports all the layout components such as <b-container>, <b-row>, <b-col>:
import { LayoutPlugin } from 'bootstrap-vue'
Vue.use(LayoutPlugin)
// This imports <b-modal> as well as the v-b-modal directive as a plugin:
import { ModalPlugin } from 'bootstrap-vue'
Vue.use(ModalPlugin)
// This imports <b-card> along with all the <b-card-*> sub-components as a plugin:
import { CardPlugin } from 'bootstrap-vue'
Vue.use(CardPlugin)
// This imports directive v-b-scrollspy as a plugin:
import { VBScrollspyPlugin } from 'bootstrap-vue'
Vue.use(VBScrollspyPlugin)
// This imports the dropdown and table plugins
import { DropdownPlugin, TablePlugin } from 'bootstrap-vue'
Vue.use(DropdownPlugin)
Vue.use(TablePlugin)
// Install BootstrapVue
Vue.use(BootstrapVue)
// Optionally install the BootstrapVue icon components plugin
Vue.use(IconsPlugin)
import FlatSurfaceShader from 'vue-flat-surface-shader'
Vue.use(FlatSurfaceShader)
// International Telephone Input with Vue.
import VueTelInput from 'vue-tel-input'
Vue.use(VueTelInput)
import vueCountryRegionSelect from 'vue-country-region-select'
Vue.use(vueCountryRegionSelect)
// Number animation import.
import AnimatedNumber from 'animated-number-vue'
Vue.use(AnimatedNumber)
import VueNumber from 'vue-number-animation'
Vue.use(VueNumber)
import '@fortawesome/fontawesome-free/css/all.css'
import '@fortawesome/fontawesome-free/js/all.js'

Vue.use(IconsPlugin)



//Input field component to display a formatted currency value 
import VueNumeric from 'vue-numeric-currency'
Vue.use(VueNumeric)


Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
