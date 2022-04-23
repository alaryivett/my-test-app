<template lang='pug'>
.app
    .header
        Nav

        ElementsAmount(v-bind:allUsers='allUsers' v-bind:allPosts='allPosts' v-bind:sections='sections')

        UserSearchForm(v-if='sections.users')
        PostSearchForm(v-else-if='sections.posts')

        UserSorting(v-if='sections.users')
        PostSorting(v-else-if='sections.posts')

    UserList(v-if='sections.users')
    PostList(v-else-if='sections.posts')
    EmptyList(v-else)

    Pagination


</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { store } from '@/store';

import Nav from '@/components/Nav';
import ElementsAmount from '@/components/ElementsAmount';
import EmptyList from '@/components/EmptyList';
import Pagination from '@/components/Pagination';

import UserList from '@/components/UsersInterface/UserList';
import UserSearchForm from '@/components/UsersInterface/UserSearchForm';
import UserSorting from '@/components/UsersInterface/UserSorting';

import PostList from '@/components/PostsInterface/PostList';
import PostSearchForm from '@/components/PostsInterface/PostSearchForm';
import PostSorting from '@/components/PostsInterface/PostSorting';


export default {
    components: {
        Nav, ElementsAmount, UserSearchForm, UserSorting, UserList, PostList, EmptyList, PostSearchForm, PostSorting, Pagination
        },

    computed: mapGetters(['sections', 'allUsers', 'allPosts']),

    methods: mapActions(['changeList', 'fetchData']),

    async mounted() {
       this.fetchData();
   }
}
</script>

<style lang='sass'>
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap')

body
    height: 100vh
    font-size: 20px
    background-color: #f4f3fb
    font-family: 'Roboto'

.app
    background-color: white
    border-radius: 10px
    max-width: 900px
    margin: 0 auto

.header
    background: linear-gradient(to bottom right, #ff6b70, #ffbe6f)
    border-radius: 10px
    padding: 10px 20px
</style>
