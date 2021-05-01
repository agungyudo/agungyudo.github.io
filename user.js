const table = Vue.createApp({
    data (){
        return{
            // Data Table 
            table : false,
            id : 1,
            lovecode : 1,
			namaJob : '',
            status : '',
            jobs : [],
            // Data Rank
            jumlahJobs: '',
            namaRank : '',
            tobe : '',
            bar : '',
            images : {ninjaakademi: './assets/ninjaakademi.png',genin : 'assets/genin.png', chunin: 'assets/chunin.png',
            jonin : './assets/jonin.png', ninjas :'./assets/ninjas.png', righthand : './assets/righthand.png'
        }
    }
    },
    mounted () {
        axios
        .get('http://localhost:3000/jobs')
        .then(response => (this.jobs = response.data))
      },
    methods:{ 
        button(){
            this.table = !this.table
        },
        submitJobs(){
            axios.post('http://localhost:3000/jobs',{
                nama_job : this.namaJob,
                lovecode : '#' + this.lovecode++,
                status : this.status,
                tanggal : this.id
            })
            .then((response) => {
                console.log(response)
                this.namaJob = ''
                this.status = ''
            });
        }
    },
    computed : {
        jumlah(){
            return this.jumlahJobs = this.jobs.length
        },
        rank(){            
            const jumlahJobs = this.jumlahJobs
            if(jumlahJobs < 100){
                this.namaRank = 'Ninja Akademi'
                this.tobe = 200 - this.jumlahJobs + ' ' + 'to be a Genin Ninja!'
                this.bar = this.jumlahJobs / 100 * 100
                this.bar = Math.floor(this.bar); 
                return this.images.ninjaakademi 
            }
            else if (jumlahJobs < 200){
                this.namaRank = 'Genin Ninja'
                this.tobe = 400 - this.jumlahJobs + ' ' + 'to be a Chunin Ninja!' 
                this.bar = this.jumlahJobs - 100 / 100 * 100
                this.bar = Math.floor(this.bar);
                return this.images.genin
            }
            else if (jumlahJobs < 400){
                this.namaRank = 'Chunin Ninja'
                this.tobe = 800 - this.jumlahJobs + ' ' + 'to be a Jonin Ninja!'
                this.bar = this.jumlahJobs / 400 * 100
                this.bar = Math.floor(this.bar);
                console.log(this.bar)
                return this.images.chunin
            }
            else if (jumlahJobs < 800){
                this.namaRank = 'Jonin Ninja'
                this.bar = this.jumlahJobs / 800 * 100
                this.bar = Math.floor(this.bar);
                this.tobe = 1300 - this.jumlahJobs + ' ' + 'to be a Ninja S Class!' 
                return this.images.jonin
            }
            else if (jumlahJobs < 1300){
                this.namaRank = 'Ninja S Class'
                this.bar = this.jumlahJobs / 1300 * 100
                this.tobe = 1600 - this.jumlahJobs + ' ' + 'to be a Right Hand Hokage!' 
                return this.images.ninjas
            }
            else if (jumlahJobs < 1600){
                this.namaRank = 'Right Hand Hokage'
                this.bar = this.jumlahJobs / 1600 * 100
                this.tobe = 1601 - this.jumlahJobs + ' ' + 'to be a Dewa Shinobi!' 
                return this.images.righthand
            }
            else {
                this.namaRank = 'Dewa Shinobi'
                this.bar = 100
                this.tobe = 'Road to Hokage' 
                return this.images.dewashinobi
            }
        }
    }
})
table.mount('#profile')
const button = document.getElementById('button')







