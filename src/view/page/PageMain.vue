<template>
    <div class="page">
        <main-form @click="submitForm"/>
        <cards-list :key="tasks.length" :tasks="tasks"/>
    </div>
</template>

<script>
    import MainForm from "../widgets/MainForm.vue";
    import CardsList from "../widgets/CardsList.vue";

    const componentsList = {};
    componentsList[MainForm.name] = MainForm;
    componentsList[CardsList.name] = CardsList;

    export default {
        name: "PageMain",
        components: componentsList,
        data(){
            return{
                value: '',
                tasks: []
            }
        },

        methods: {
            submitForm(tasks){
                this.tasks = tasks;
            }
        },

    }
</script>
<style scoped>

</style>