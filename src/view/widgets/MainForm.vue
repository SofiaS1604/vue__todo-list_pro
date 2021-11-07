<template>
    <div class="form">
        <my-input @input="valueInput"> Title Task </my-input>
        <my-button @click="buttonAddTask">Add Task</my-button>
        <my-button @click="buttonSearch">Search Task</my-button>
    </div>
</template>

<script>
    import MyInput from "../components/MyInput.vue";
    import MyButton from "../components/MyButton.vue";

    const componentsList = {};
    componentsList[MyInput.name] = MyInput;
    componentsList[MyButton.name] = MyButton;

    export default {
        name: "MainForm",
        components: componentsList,
        data(){
            return{
                value: '',
                tasks: []
            }
        },
        methods:{
            valueInput(val){
                this.value = val
            },

            buttonSearch(){
                this.tasks = this.outputTasks();
                if (this.value.length)
                    this.tasks = this.tasks.filter(el => el.title.split(this.value).length > 1);

                this.$emit('click', this.tasks)
            },

            buttonAddTask(){
                this.tasks = this.outputTasks();
                let id = this.tasks.length ? this.tasks[this.tasks.length - 1].id + 1 : 1;

                this.tasks.push({
                    id, title: this.value,
                    tasks: [], date: new Date().toLocaleDateString()
                });

                localStorage.setItem('tasks', JSON.stringify(this.tasks));
                this.value = '';
                this.$emit('click', this.tasks)
            },
        }
    }
</script>

<style lang="stylus">
    .form
        width fit-content
        background-color white
        padding 20px
        padding-bottom 30px
        border-radius 7px
        margin-left auto
        margin-right auto
        margin-top 75px
        box-shadow 0 5px 20px -10px rgba(32 36 161 0.5)
        display grid
        grid-column-gap 20px
        grid-auto-flow column
        align-items end
</style>