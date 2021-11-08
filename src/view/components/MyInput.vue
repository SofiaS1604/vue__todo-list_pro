<template>
    <label class="input__container">
        <span class="input__text"><slot/></span>
        <input v-model="value" @input="$emit('input', value)" class="input" type="text"/>
    </label>
</template>

<script>
    export default {
        name: "MyInput",
        data(){
            return{
                value: '',
            }
        }
    }
</script>

<style lang="stylus">
    .input
        display grid
        width 450px
        font-size 16px
        padding 8px 10px
        border-radius 7px
        border-color: #648aa5
        border-style solid
        outline none
        box-shadow 0 2px 5px rgba(32 36 161 0.3)
        transition 0.2s box-shadow ease-in-out
        &:focus
            box-shadow 0 2px 5px rgba(32 36 161 0.5)
            transition 0.2s box-shadow ease-in-out
        &__container
            display block
        &__text
            width fit-content
            padding 0 3px
            background-color white
            transform translateX(10px) translateY(10px)
            display block
            color #134f7a


</style>