// the root component
<template>
    <div>
        <ul v-for="nav in navbar" v-bind:key="nav">
            <li>
                <a href="#">{{nav}}</a>
                <!--<slot :nav="nav">{{nav}}</slot>-->
            </li>
        </ul>
    </div>

</template>
<script>
    export default {
        props:["navbar"]
    };
</script>