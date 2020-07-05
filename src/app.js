// the application entry point
import Vue from 'vue'
import Navbar from './components/Navbar.vue'
import Info from "./components/Info";
import AboutMe from "./components/AboutMe";
import Testimonial from "./components/Testimonial";
import Form from "./components/Form";
Vue.component('nav-bar',Navbar);
Vue.component("info",Info);
Vue.component('about-me',AboutMe);
Vue.component('testimonial', Testimonial);
Vue.component('contact-form', Form);
new Vue({
    el:'#app'
})