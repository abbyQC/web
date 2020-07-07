// the application entry point
import Vue from 'vue';
import Router from 'vue-router';
import Navbar from './components/Navbar.vue'
import Info from "./components/Info";
import AboutMe from "./components/AboutMe";
import Testimonial from "./components/Testimonial";
import Form from "./components/Form";


Vue.use(Router);
Vue.component('nav-bar', Navbar);
Vue.component("info", Info);
Vue.component('about-me', AboutMe);
Vue.component('testimonial', Testimonial);
Vue.component('contact-form', Form);

new Vue({
    el: '#app'
})

export default new Router({
    mode: "history",
    routes: [
        {
            path: "/",
            name: "EE",
            alias: "/ee",
            component: Navbar
        },
        {
            path: "/info",
            name: "info",
            component: Info
        },
        {
            path: "/about-me",
            name: "about-me",
            component: AboutMe
        },

        {
            path: "/testimonial",
            name: "testimonial",
            component: Testimonial
        },
        {
            path: "/contact-me",
            name: "contact-me",
            component: Form
        }
    ]
});
