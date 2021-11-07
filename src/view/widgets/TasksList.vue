<template>
    <div :key="filter_tasks ? filter_tasks.length : 0" v-if="filter_tasks && filter_tasks.length" class="update__tasks">
        <div v-for="task in filter_tasks">
            <div v-if="task.type === 'block'">
                <div class="task__info">
                    <div class="task__title">{{task.title}}</div>
                    <more-button @click="buttonClick" :id="task.id" :type="'block'"/>
                </div>
                <task-block @click="buttonClick" :parentId="task.id" :tasks_more="tasks"/>
            </div>
            <div v-else>
                <my-task class="task__title" :status="false">{{task.title}}</my-task>
                <more-button @click="buttonClick" :id="task.id" :type="'task'"/>
            </div>
        </div>
    </div>
</template>

<script>
    import MyTask from "../components/MyTask.vue";
    import MoreButton from "../components/MoreButton.vue";
    import TaskBlock from "./TaskBlock.vue";

    const componentList = {};
    componentList[MyTask.name] = MyTask;
    componentList[MoreButton.name] = MoreButton;
    componentList[TaskBlock.name] = TaskBlock;


    export default {
        name: "TasksList",
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
            if (this.tasks)
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

<style lang="stylus">
    .task__info
        display flex
        align-items center
        margin-left 30px
    .task__block
        margin-left: 50px;
    .task__title
        margin-right 25px
</style>