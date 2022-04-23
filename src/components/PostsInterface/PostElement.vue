<template lang='pug'>
li.post-list__item
    span {{post.id}}
    span {{post.title}}
    span {{post.body}}
</template>

<script>
    export default {
        props: {
            post: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang='sass'>
.post-list__item
    display: flex
    border-radius: 10px
    border: 1px solid #e7e7e7
    text-align: center
    margin-bottom: 5px

    span
        flex-basis: 45%
        border-left: 1px solid #e7e7e7
        padding: 20px
        overflow: hidden
        text-overflow: ellipsis
        box-sizing: border-box

        &:first-child
            flex-basis: 10%
            border-left: none
            background: linear-gradient(to bottom right, #ff6b70, #ffbe6f)
            border-radius: 10px 0 0 10px
            color: white
</style>
