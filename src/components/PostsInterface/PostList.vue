<template lang='pug'>
ul.post-list
    PostElement(v-for='post in dataByPages.postsByPages[selectedPage]', v-bind:post='post')
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import { store } from '@/store';
import PostElement from '@/components/PostsInterface/PostElement';

export default {
    components: {
        PostElement
    },

    computed: mapGetters(['dataByPages', 'selectedPage']),

    methods: mapActions(['fetchData']),

    async mounted() {
       this.fetchData();
   }
}

</script>

<style lang='sass'>
.post-list
    list-style: none
    max-width: 900px
    margin: 0 auto
    padding: 10px 20px

</style>
