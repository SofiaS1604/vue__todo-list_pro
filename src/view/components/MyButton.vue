<template>
    <button @click="$emit('click', this)" class="button"><slot/></button>
</template>

<script>
    export default {
        name: "MyButton"
    }
</script>

<style lang="stylus">
    .button
        border-radius: 7px
        padding 8.5px 20px 7.5px
        border-color #0fb2a3
        height 41px
        background-color #fff
        cursor pointer
        outline none
        border-style solid
        font-size 16px
        box-shadow 0 2px 5px rgba(32 36 161 0.3)
        color #0fb2a3
        transition 0.2s box-shadow ease-in-out
        &:focus
            box-shadow 0 2px 5px rgba(32 36 161 0.5)
            transition 0.2s box-shadow ease-in-out
</style>