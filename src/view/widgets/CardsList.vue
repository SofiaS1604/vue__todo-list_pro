<template>
    <div class="cards__container" v-if="tasks_more.length > 0 && typeof tasks_more[0] === 'object' && tasks_more[0] !== null ">
        <card-task @click="openTask" v-for="task in tasks_more" :key="task.id" :task="task"/>
    </div>
</template>

<script>

    import CardTask from "../components/CardTask.vue";

    const componentsList = {};
    componentsList[CardTask.name] = CardTask;

    export default {
        name: "CardsList",
        components: componentsList,
        props: ['tasks'],
        data() {
            return {
                tasks_more: []
            }
        },
        methods: {
            openTask(id){
                this.tasks_more = this.outputTasks();

                this.$router.push({
                    name: `task`,
                    params: {
                        id: id,
                        task: this.tasks_more.filter(el => el.id === id)
                    }
                }).catch(()=>{})
            }
        },
        mounted() {
            this.tasks_more = this.tasks.length ? this.tasks : this.outputTasks()
        }
    }
</script>

<style lang="stylus">
    .cards__container
        margin-top 50px
        margin-left 25px
        margin-right 25px
        display grid
        grid-template-columns repeat(auto-fill, 240px)
        grid-gap 20px
</style>