<template>
    <div class="more__container">
        <div class="more__button" @click="click = click ? 0 : 1">
            <div class="button__item"></div>
        </div>
        <div v-show="click" class="more__list list">
            <div @click="$emit('click', ['delete', id])" class="list__item">Delete</div>
            <div @click="$emit('click', ['update', id])" class="list__item">Update</div>
            <div v-if="type === 'block'" @click="$emit('click', ['task', id])" class="list__item">Add task</div>
            <div v-if="type === 'block'" @click="$emit('click', ['block', id])" class="list__item">Add block</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MoreButton",
        props: ["type", "id"],
        data(){
            return{
                click: 0,
            }
        }
    }
</script>

<style lang="stylus">
    .button__item, .button__item::before, .button__item::after{
        width: 7px;
        height: 7px;
        border: 1px solid;
        border-radius: 50%;
        position: relative;
        display: block;
        background: white;
        box-shadow: 1px 3px 10px rgba(1,1,1, 0.2);
        transition: 0.3s all ease-in-out;
    }

    .button__item{
        width: 9px;
        height: 9px;
        margin-left: 13px;
    }

    .more__list{
        width: 175px;
        padding: 10px;
        border-radius: 10px;
        box-shadow: 1px 3px 10px rgba(1,1,1, 0.2);
        margin-top: 15px;
        z-index 4
        background-color white
        position absolute
    }

    .more__list::before{
        content ''
        display block
        z-index 2
        width: 15px;
        height: 15px;
        top: -6px;
        position absolute
        transform rotate(45deg)
        background-color white
    }

    .list__item{
        padding: 5px 5px 2px 5px;
        transition: 0.3s all ease-in-out;
    }

    .list__item+.list__item{
        border-top: 1px solid rgba(1,1,1, 0.3);
    }

    .button__item::before{
        position: absolute;
        right: -15px;
        top: -1px;
        content: '';
    }

    .container{
        margin-top 20px
    }

    .button__item::after{
        position: absolute;
        left: -15px;
        top: -1px;
        content: '';
    }

    .more__button{
        width 50px
        position relative
    }
</style>