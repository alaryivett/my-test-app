<template lang='pug'>
nav
    ul
        li#users(v-on:click='changeList') Users
        li#posts(v-on:click='changeList') Posts
</template>

<script>
    import { mapMutations, mapActions } from 'vuex';
    import { store } from '../store';

    export default {
        computed: mapMutations(['selectList']),

        methods: mapActions(['changeList'])
    }
</script>

<style lang='sass'>
nav
    color: white
    font-weight: bold

    ul
        list-style: none
        padding: 0
        margin: 0
        display: flex

        li
            display: block
            text-align: center
            width: 100%
            padding: 20px
            &:hover
                text-decoration: underline

</style>
