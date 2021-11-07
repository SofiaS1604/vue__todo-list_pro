<template>
    <div class="page__modal">
        <div class="modal__container">
            <div @click="$emit('click', null)" class="modal__cross">&#10008;</div>
            <div class="modal__title">Add or Update</div>
            <my-input @input="inputValue">Name task or block</my-input>
            <my-button @click="$emit('click', value), value = ''" class="modal__button">Save</my-button>
        </div>
    </div>
</template>

<script>
    import MyInput from "../components/MyInput.vue";
    import MyButton from "../components/MyButton.vue";

    const componentsList = {};
    componentsList[MyInput.name] = MyInput;
    componentsList[MyButton.name] = MyButton;

    export default {
        name: "ModalWindow",
        components: componentsList,
        data(){
            return{
                value: ''
            }
        },
        methods:{
            inputValue(val){
                this.value = val;
            }
        }
    }
</script>

<style lang="stylus">
        .page__modal
            position fixed
            width 100vw
            height 100vh
            display grid
            justify-content center
            align-items center
            background-color rgba(133,133,133, 0.3)
            z-index: 100;

        .modal
            &__container
                width fit-content
                padding 25px
                background-color white
                display grid
                grid-row-gap 15px
                box-shadow 0 5px 20px -10px #0418a9
                border-radius 7px
            &__button
                margin-top 10px
                margin-left: auto;
                margin-right auto
            &__cross
                font-size 25px
                margin-left auto
                cursor pointer
                width fit-content
                color #134f7a
                margin-top -10px
                z-index 1
            &__title
                color #134f7a
                text-align center
                font-size 18px
                text-transform capitalize
                margin-top -30px


</style>