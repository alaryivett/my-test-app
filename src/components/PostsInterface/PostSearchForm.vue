<template lang='pug'>
.post-search
    input.id(id='post-search-id', type='search', placeholder='id', v-on:keyup='searchBy')
    input(id='post-search-title', type='search', placeholder='заголовок', v-on:keyup='searchBy')
    input(id='post-search-body', type='search', placeholder='текст', v-on:keyup='searchBy')
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { store } from '@/store';

export default {
    computed: mapGetters(['allUsers', 'dataByPages', 'selectedPage']),

    methods: mapActions(['searchBy']),


}
</script>

<style lang='sass'>
.post-search
    display: flex
    margin-top: 10px

    input
        height: 40px
        border: none
        border-radius: 10px
        font-size: 18px
        padding: 0 20px
        min-width: 30px
        flex-basis: 45%
        margin: 0 1px
        font-family: 'Roboto'

        &:first-child
            flex-basis: 10%

        &::placeholder
            color: #e7e7e7
            font-family: 'Roboto'
</style>
