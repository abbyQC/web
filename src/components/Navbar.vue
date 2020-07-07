// the root component
<template>
    <div>
        <ul v-for="nav in navbar" v-bind:key="nav">
            <li>{{nav}}</li>
        </ul>
    </div>

</template>
<script>
    export default {
        props: ["navbar"]
    };
</script>
