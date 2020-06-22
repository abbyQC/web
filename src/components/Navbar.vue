
<template>
    <ul>
        <li><a href="#about">{{msg[0]}}</a></li>
        <li><a href="#testimonials">{{msg[1]}}</a></li>
        <li><a href="#work">{{msg[2]}}</a></li>
    </ul>
</template>
<script>
    export default {
        data() {
            return {
                msg: [
                    "about me",
                    "testimonials",
                    "work"
                ]

            }
        }
    }
</script>