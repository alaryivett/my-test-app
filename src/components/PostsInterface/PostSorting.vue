<template lang='pug'>
.post-sorting
    button(type='button' v-on:click='sortBy')
        span#id.post-sorting__btn_content ID
    button(type='button' v-on:click='sortBy')
        span#title.post-sorting__btn_content Заголовок
    button(type='button' v-on:click='sortBy')
        span#body.post-sorting__btn_content Текст
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
.post-sorting
    display: flex
    margin-top: 10px

    button
        flex-basis: 45%
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

.post-sorting__btn_content::after
    content: ''
    background-image: url('@/img/arrows.png')
    padding: 0 12px

</style>
