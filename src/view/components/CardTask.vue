<template>
    <div class="card__item" @click="$emit('click', task.id)">
        <div class="card__title">{{task.title}}</div>
        <div class="card__info card__tasks">Tasks: {{task.tasks.length}}</div>
        <div class="card__info card__date">Date: {{task.date}}</div>
    </div>
</template>

<script>
    export default {
        name: "CardTask",
        props: ["task"],
    }
</script>

<style lang="stylus">
    .card
        &__item
            padding 20px 25px
            background-color white
            box-shadow 0 5px 20px -10px rgba(32 36 161 0.5)
            transition 0.2s box-shadow ease-in-out
            outline none
            display grid
            border-radius 7px
            align-items center
            width 240px
            cursor pointer
        &__info
            font-size 14px
            color dimgray
        &__title
            margin-bottom 5px
            font-size 18px
</style>