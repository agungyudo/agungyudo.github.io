 //  Siang dan Malam 
  jam = new Date().getHours();
  if (jam >= 6 && jam <= 17) {
  document.getElementById('backgroundCard').style.backgroundImage = "url('./assets/konoha.jpeg')";
  } else {
    document.getElementById('backgroundCard').style.backgroundImage = "url('./assets/konohamidnight.jpeg')";
  }


// Vue JS 
const app = Vue.createApp({
	data(){
		return{
			cards : [{
				nama : 'Agung Yudo Ardianto',
				namaJob : 'ABC Move',
				image : './assets/agung.jpeg'
			},{
				nama : 'Raihan',
				namaJob : 'Meraih',
				image : './assets/raihan.jpeg'
			},{
				nama : 'Muchlishina Madani',
				namaJob : 'Muchlis',
				image : './assets/muchlish.jpeg'
			},{
				nama : 'Sabda Maulana',
				namaJob : "Sab's Job",
				image : './assets/sabda.jpeg'
			},{
				nama : 'I Komang Mertayasa',
				namaJob : "KI'PAP Job",
				image : './assets/komang.jpeg'
			},{
				nama : 'Alfian Dimas',
				namaJob : 'Ara',
				image : './assets/alfian.jpeg'
			},{
				nama : 'Iqbal',
				namaJob : 'Iqbal',
				image : './assets/iqbal.jpeg'
			},{
				nama : 'Suzaki',
				namaJob : "Zahran's Job",
				image : './assets/suzaki.jpg'
			},{
				nama : 'Eva',
				namaJob : 'JoyJob',
				image : './assets/eva.jpeg'
			},{
				nama : 'Millah',
				namaJob : 'Milons',
				image : './assets/millah.jpeg'
			},{
				nama : 'Viola',
				namaJob : 'ViJob',
				image : './assets/viola.jpeg'
			},{
				nama : 'Nesti',
				namaJob : 'Job AngkaSa',
				image : './assets/nesti.jpg'
			},{
				nama : 'Tarisya Ramadhan',
				namaJob : 'iJob',
				image : './assets/ica.jpeg'
			},{
				nama : 'Dwi',
				namaJob : 'Athena Job',
				image : './assets/dwi.jpg'
			}]
		}

	},
	methods: {

	}
})

app.mount('#card-row')