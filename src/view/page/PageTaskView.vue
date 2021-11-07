<template>
    <div class="page__view view">
        <div class="view__header header">
            <div class="header__title">{{task.title}}</div>
            <div class="header__container">
                <my-button @click="taskUpdate()">Update task</my-button>
            </div>
        </div>
    </div>
</template>

<script>
    import MyButton from "../components/MyButton.vue";
    export default {
        name: "PageTaskView",
        components: {MyButton},
        data(){
            return{
                task: []
            }
        },
        methods:{
            taskUpdate(){
                this.$router.push({
                    name: `update`,
                    params: {
                        id: this.task.id,
                        task: this.task
                    }
                }).catch(()=>{})
            }
        },
        mounted() {
            this.task = this.outputTasks().filter(el => el.id === +this.$route.params.id)[0]
        }
    }
</script>

<style scoped>

</style>