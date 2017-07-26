Vue.component("kdetail",{
	template:`
		<p>内容页面</p>
	`,
	methods: {
		loadDetail: function() {
			//			console.log(this.loads)
			this.$store.dispatch("setDetail")
		}
	},
	mounted(){
		this.loadDetail()
	},
	computed:{
		
	}
})
