<template>
    <div class="about-me-info">
        <p> I am a forth-year undergraduate student at Carleton University, where I found my pasion in web design
            and
            web development.</p>
        <p> I am an organized, result-orientated person who is committed to get the job done.</p>
        <p> Outside of work, I live it up by kickboxing, and asian-food cooking. I tend to combine the beauty of
            calligraphy into the front-end web design.</p>
        <p> I am interested in the entire front end spectrum and working on ambitious projects with positive
            people.</p>
    </div>
</template>

<script>
    export default {
        name: "AboutMe"
    }
</script>

<style scoped>
    .about-me-info{
        max-width: 800px;
        box-shadow: 0 0 1.2rem rgba(139, 130, 130, 0.25);
        padding: 50px;
        position: relative;
        top: -50px;
        left: 50%;
        right: 50%;
        transform: translateX(-50%);
        z-index: 1;
        font-size: 1.3rem;
        color: #BEBEBE;
    }
</style>