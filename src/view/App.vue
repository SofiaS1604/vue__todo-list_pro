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
            updateLocal(tasks){
                let tasks_all = this.outputTasks();
                tasks_all.map(el => {
                    if(el.id === +this.$route.params.id){
                        el.tasks = tasks
                    }
                });

                localStorage.setItem('tasks', JSON.stringify(tasks_all))
            }
        }
    })
</script>

<style scoped>

</style>