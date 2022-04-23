export default {
    actions: {
        async fetchData(ctx) {
            const resUsers = await fetch('https://jsonplaceholder.typicode.com/users');
            const users = await resUsers.json();

            const resPosts = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=20');
            const posts = await resPosts.json();

            const data = {users, posts};

            ctx.commit('updateData', data)
        },

        changeList (ctx, selected) {
            ctx.commit('selectList', selected)
        },

        sortBy(ctx, ev) {
            ctx.commit('sortActiveListBy', ev)
        },

        setPage(ctx, ev) {
            ctx.commit('setPage', ev)
        },

        searchBy(ctx, ev) {
            ctx.commit('searchBy', ev)
        }
    },
    mutations: {
        updateData(state, data) {
            const userPageSize = 5;
            const usersByPages = [];
            for (let i = 0; i <Math.ceil(data.users.length/userPageSize); i++){
                usersByPages.push(data.users.slice((i*userPageSize), (i*userPageSize) + userPageSize));
            }

            const postPageSize = 3;
            const postsByPages = [];
            for (let i = 0; i <Math.ceil(data.posts.length/postPageSize); i++){
                postsByPages.push(data.posts.slice((i*postPageSize), (i*postPageSize) + postPageSize));
            }

            const dataByPages = {usersByPages, postsByPages};

            state.dataByPages = dataByPages
            state.data = data

            console.log(state)
        },

        selectList(state, selected) {
            state.isSelected.users = false
            state.isSelected.posts = false

            state.isSelected[selected.path[0].id] = true
            state.pageOfSelected = 0
        },

        sortActiveListBy(state, ev) {
            const list = state.isSelected.users?'usersByPages':'postsByPages'
            const datalist = state.isSelected.users?'users':'posts'
            const param = ev.path[0].id

            let res = state.dataByPages[list].flat()

            res = (JSON.stringify(res)==JSON.stringify(res.sort(function (a, b) {
                if (a[param] > b[param]) {
                    return 1;
                }
                if (a[param] < b[param]) {
                    return -1;
                }

                return 0;
            })))?res.reverse():res.sort(function (a, b) {
                if (a[param] > b[param]) {
                    return 1;
                }
                if (a[param] < b[param]) {
                    return -1;
                }

                return 0;
            })

            if (list=='usersByPages') {
                const userPageSize = 5;
                const usersByPages = [];
                for (let i = 0; i <Math.ceil(res.length/userPageSize); i++){
                    usersByPages.push(res.slice((i*userPageSize), (i*userPageSize) + userPageSize));
                }

                state.dataByPages.usersByPages = usersByPages
            }
            else if (list=='postsByPages') {
                const postPageSize = 3;
                const postsByPages = [];
                for (let i = 0; i <Math.ceil(res.length/postPageSize); i++){
                    postsByPages.push(res.slice((i*postPageSize), (i*postPageSize) + postPageSize));
                }

                state.dataByPages.postsByPages = postsByPages
            }

            console.log(state.dataByPages.usersByPages)
        },

        setPage(state, ev) {
            state.pageOfSelected = ev.path[0].innerHTML-1
        },

        searchBy(state, ev) {
            const inputId = ev.path[0].id
            const inputValue = document.getElementById(inputId).value
            const param = inputId.split('-')[inputId.split('-').length-1]

            if(state.isSelected.users) {
                const res = state.data.users.filter( a =>a[param].toString().toLowerCase().includes(inputValue.toLowerCase()))

                const userPageSize = 5;
                const usersByPages = [];
                for (let i = 0; i <Math.ceil(res.length/userPageSize); i++){
                    usersByPages.push(res.slice((i*userPageSize), (i*userPageSize) + userPageSize));
                }

                state.dataByPages.usersByPages = usersByPages
            }
            else {
                const res = state.data.posts.filter( a =>a[param].toString().toLowerCase().includes(inputValue.toLowerCase()))

                const postPageSize = 3;
                const postsByPages = [];
                for (let i = 0; i <Math.ceil(res.length/postPageSize); i++){
                    postsByPages.push(res.slice((i*postPageSize), (i*postPageSize) + postPageSize));
                }

                state.dataByPages.postsByPages = postsByPages
            }


        }
    },
    state: {
        data: [],
        dataByPages: [],
        isSelected: {
            users: false,
            posts: false
        },
        pageOfSelected: 0
    },
    getters: {
        allUsers(state) {
            return state.data.users
        },

        allPosts(state) {
            return state.data.posts
        },

        sections(state) {
            return state.isSelected
        },

        dataByPages(state) {
            return state.dataByPages
        },

        selectedPage(state) {
            return state.pageOfSelected
        }
    }
}
