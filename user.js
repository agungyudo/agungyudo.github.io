
const table = Vue.createApp({
    data (){
        return{
            table : false,
            id : 1,
			namaJob : '',
			link : '',
			jobs : []
        }
    },
    methods:{
        button(){
            this.table = !this.table
        },
        submitJobs(){
            this.jobs.push({
                id : this.id++,
                namaJob : this.namaJob,
                link : this.link 
            })
            this.namaJob = '',
            this.link = ''
        }
    }
})

table.mount('#table')
