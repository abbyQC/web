// the application entry point
import Vue from 'vue'
import Navbar from './components/Navbar.vue'
import Info from "./components/Info";
Vue.component('navbar',Navbar);
Vue.component("info",Info);

new Vue({
    el:'#app'
})