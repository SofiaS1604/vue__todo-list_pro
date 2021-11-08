<template>
    <label class="task__container">
        <input @checked="status" class="task__checkbox" type="checkbox"/>
        <span class="task__text"><slot/></span>
    </label>
</template>

<script>
    export default {
        name: "MyTask",
        props: ["status", "id"],
    }
</script>

<style scoped>

</style>