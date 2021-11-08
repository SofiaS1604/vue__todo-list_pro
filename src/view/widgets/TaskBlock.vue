<template>
    <div class="task__block" v-if="filter_tasks.length > 0" >
        <div v-for="task in filter_tasks">
            <div  v-if="task.type === 'block'">
                <div class="task__info">
                    <div class="task__title">{{task.title}}</div>
                    <more-button @click="buttonClick" :id="task.id" :type="'block'"/>
                </div>
                <task-block @click="buttonClick" :parentId="task.id" :tasks_more="tasks"/>
            </div>
            <div class="task__info" v-else>
                <my-task class="task__title" :status="task.checked">{{task.title}}</my-task>
                <more-button @click="buttonClick" :id="task.id" :type="'task'"/>
            </div>
        </div>
    </div>
</template>

<script>
    import MyTask from "../components/MyTask.vue";
    import MoreButton from "../components/MoreButton.vue";

    const componentList = {};
    componentList[MyTask.name] = MyTask;
    componentList[MoreButton.name] = MoreButton;

    export default {
        name: "TaskBlock",
        components: componentList,
        props: ['tasks_more', 'parentId'],
        data(){
            return{
                tasks: [],
                filter_tasks: [],
                parent: null
            }
        },
        mounted() {
            this.parent = this.parentId;
            this.tasks = this.tasks_more;
            this.viewTask(this.parent)
        },
        methods:{
            viewTask(parent_id){
                this.filter_tasks = this.tasks.filter(el => el.parent_id === parent_id)
            },

            buttonClick([type, parent]){
                this.$emit('click', [type, parent])
            },
        },
    }
</script>

<style scoped>

</style>