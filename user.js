
const table = Vue.createApp({
    data (){
        return{
            table : false
        }
    },
    methods:{
        button(){
            this.table = !this.table
        }
    }
})

table.mount('#table')






