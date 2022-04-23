<template lang='pug'>
ul.user-list
    UserElement(v-for='user in dataByPages.usersByPages[selectedPage]', v-bind:user='user')
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { store } from '@/store';
import UserElement from '@/components/UsersInterface/UserElement';

export default {
    components: {
        UserElement
    },

    computed: mapGetters(['allUsers', 'dataByPages', 'selectedPage']),

    methods: mapActions(['fetchData']),

    async mounted() {
       this.fetchData();

   }
}

</script>

<style lang='sass'>
.user-list
    list-style: none
    max-width: 900px
    margin: 0 auto
    padding: 10px 20px

</style>
