<template lang='pug'>
.elements-amount
    span(v-if='sections.users') {{allUsers.length}}
    span(v-else-if='sections.posts') {{allPosts.length}}
    span(v-else) Выберите список
</template>

<script>
export default {
    props: {
        allUsers: {
            required: true
        },
        allPosts: {
            required: true
        },
        sections: {
            required: true
        }
    }
}
</script>

<style lang='sass'>
.elements-amount
    padding: 10px 60px
    box-sizing: border-box
    background-image: url('@/img/list.png')
    background-repeat: no-repeat
    background-position: 20px 10px
    background-color: white
    border-radius: 10px

</style>
