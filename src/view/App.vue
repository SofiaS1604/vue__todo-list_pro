<template>
    <router-view :key="$route.path"/>
</template>

<script>
    import Vue from 'vue';

    export default {
        name: "App",
     }

    Vue.mixin({
        methods: {
            outputTasks(){
                return JSON.parse(localStorage.getItem('tasks')) || []
            },
        }
    })
</script>

<style scoped>

</style>