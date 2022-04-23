<template lang='pug'>
li.user-list__item
    span {{user.id}}
    span {{user.name}}
    span {{user.username}}
    span {{user.email}}
</template>

<script>
    export default {
        props: {
            user: {
                type: Object,
                required: true
            }
        }
    }
</script>

<style lang='sass'>
.user-list__item
    display: flex
    border-radius: 10px
    border: 1px solid #e7e7e7
    text-align: center
    margin-bottom: 5px

    span
        flex-basis: 30%
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
