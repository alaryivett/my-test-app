<template lang='pug'>
.pagination(v-if='sections.users')
    button(type='button', v-for='(page, index) in dataByPages.usersByPages', v-bind:page='page', v-bind:index='index', v-on:click='setPage' v-bind:class='{ pagination__btn_selected: selectedPage==index }') {{index+1}}

.pagination(v-else-if='sections.posts')
    button(type='button', v-for='(page, index) in dataByPages.postsByPages', v-bind:page='page', v-bind:index='index', v-on:click='setPage' v-bind:class='{ pagination__btn_selected: selectedPage==index }') {{index+1}}
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex';
import { store } from '@/store';

export default {
    components: {

    },

    computed: mapGetters(['sections', 'dataByPages', 'selectedPage']),



    methods: mapActions(['setPage', 'fetchData']),

    async mounted() {
       this.fetchData();

   }
}
</script>

<style lang='sass'>
    .pagination
        display: flex
        width: 100%
        justify-content: center
        padding: 10px

        button
            border: none
            padding: 10px 15px
            margin: 0 5px
            border-radius: 10px
            cursor: pointer

        .pagination__btn_selected
            background: linear-gradient(to bottom right, #ff6b70, #ffbe6f)


</style>
