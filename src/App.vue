<template>
    <div id="app" class="container-fluid">
        <nav>
            <router-link class="btn btn-primary" to="/">EE</router-link>
            <router-link class="btn btn-primary" to="/info">Info</router-link>
            <router-link class="btn btn-primary" to="/about-me">About Me</router-link>
            <router-link class="btn btn-primary" to="/testimonial">Testimonials</router-link>
            <router-link class="btn btn-primary" to="/contact-me">Contact Me</router-link>
        </nav>
        <br/>
        <router-view/>
    </div>
</template>
ß
<script>
    export default {
        name: "App"
    }
</script>

<style scoped>
    .btn-primary {
        color: white;
        margin-right: 5px;
        background: #181818;
    }

    .container-fluid {
        text-align: center;
    }

</style>