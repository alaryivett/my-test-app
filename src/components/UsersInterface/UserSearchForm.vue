<template lang='pug'>
.user-search
    input(id='user-search-id', type='search', placeholder='id', v-on:keyup='searchBy')
    input(id='user-search-name', type='search', placeholder='имя', v-on:keyup='searchBy')
    input(id='user-search-username', type='search', placeholder='никнейм', v-on:keyup='searchBy')
    input(id='user-search-email', type='search', placeholder='email', v-on:keyup='searchBy')
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
.user-search
    display: flex
    margin-top: 10px

    input
        height: 40px
        border: none
        border-radius: 10px
        font-size: 18px
        padding: 0 5px 0 20px
        min-width: 30px
        flex-basis: 30%
        margin: 0 1px
        font-family: 'Roboto'

        &:first-child
            flex-basis: 10%

        &::placeholder
            color: #e7e7e7
            font-family: 'Roboto'
</style>
