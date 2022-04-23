<template lang='pug'>
.user-sorting
    button(type='button' v-on:click='sortBy')
        span#id.user-sorting__btn_content ID
    button(type='button' v-on:click='sortBy')
        span#name.user-sorting__btn_content Имя
    button(type='button' v-on:click='sortBy')
        span#username.user-sorting__btn_content Никнейм
    button(type='button' v-on:click='sortBy')
        span#email.user-sorting__btn_content email
</template>

<script>
import { mapMutations, mapActions } from 'vuex';
import { store } from '@/store';

export default {
    computed: mapMutations(['sortActiveListBy']),

    methods: mapActions(['sortBy']),
}
</script>

<style lang='sass'>
.user-sorting
    display: flex
    margin-top: 10px

    button
        flex-basis: 30%
        background-color: transparent
        border: none
        border-radius: 10px
        margin: 0 1px
        font-family: 'Roboto'
        font-size: 18px
        color: white
        background-repeat: no-repeat
        cursor: pointer

        &:first-child
            flex-basis: 10%

.user-sorting__btn_content::after
    content: ''
    background-image: url('@/img/arrows.png')
    padding: 0 12px

</style>
