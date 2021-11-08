<template>
    <div class="page__view view">
        <div class="page__header header">
            <div class="header__title">{{task.title}}</div>
            <div class="header__container">
                <my-button @click="taskUpdate()">Update task</my-button>
            </div>
        </div>
        <tasks-list :key="task.tasks ? task.tasks.length : 0" :tasks_more="task.tasks" :parentId="0"/>
    </div>
</template>

<script>
    import MyButton from "../components/MyButton.vue";
    import TasksList from "../widgets/TasksList.vue";


    export default {
        name: "PageTaskView",
        components: {MyButton, TasksList},
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
                        id: this.task.id
                    }
                }).catch(()=>{})
            }
        },
        mounted() {
            this.task = this.outputTasks().filter(el => el.id === +this.$route.params.id)[0];
        }
    }
</script>

<style lang="stylus">
    .page__view .more__container
        display none
</style>