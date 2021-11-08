<template>
    <div class="page__update update">
        <modal-window @click="addElement" v-if="clickButton"/>
        <div class="page__header header">
            <div @click="taskView" class="header__title">{{task.title}}</div>
            <div class="header__container">
                <my-button @click="viewModal(['block', 0])">Add block</my-button>
                <my-button @click="viewModal(['task', 0])">Add task</my-button>
            </div>
        </div>
        <tasks-list :key="task.tasks ? task.tasks.length : 0" @click="viewModal" :tasks_more="task.tasks" :parentId="0"/>
    </div>
</template>

<script>
    import MyButton from "../components/MyButton.vue";
    import ModalWindow from "../widgets/ModalWindow.vue";
    import TasksList from "../widgets/TasksList.vue";

    const componentsList = {};
    componentsList[MyButton.name] = MyButton;
    componentsList[ModalWindow.name] = ModalWindow;
    componentsList[TasksList.name] = TasksList;

    export default {
        name: "PageTaskUpdate",
        components: componentsList,
        data(){
          return{
              task: [],
              clickButton: 0,
              tasks: [],
              type: '',
              parent_id: 0
          }
        },
        mounted() {
            this.task = this.outputTasks().filter(el => el.id === +this.$route.params.id)[0];
            this.tasks = this.outputTasks();
        },
        methods:{
            addElement(val){
                if (val){
                    let id = Math.floor(Math.random() * 1000000000000000000000);
                    this.task.tasks.push({
                        title: val, type: this.type, id, parent_id: this.parent_id,
                        tasks: this.type === 'block' ? [] : null,
                        checked: this.type === 'block' ? null : false,
                    });

                    this.title = this.type = '';
                    this.updateLocal(this.task.tasks);
                }

                this.clickButton = 0;
            },

            taskView(){
                this.$router.push({
                    name: `task`,
                    params: {
                        id: this.$route.params.id
                    }
                }).catch(()=>{});
            },

            viewModal([type, parent]){
                this.clickButton = 1;
                this.type = type;
                this.parent_id = parent;
            },
        },
    }
</script>

<style lang="stylus">
    .page__header
        display grid
        grid-auto-flow column
        padding 15px 25px
        justify-content space-between
        background-color white
        align-items center
        box-shadow 0 5px 20px -10px rgba(32 36 161 0.5)
        margin-bottom 50px

    .header
        &__title
            font-size 21px
            cursor pointer
        &__container .button + .button
            margin-left 25px

</style>