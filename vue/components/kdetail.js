Vue.component("kdetail", {
	template: `
		<div class="detailArticle">
			<article class="weui-article">
			    <h1>{{newsDetail?newsDetail.title:""}}</h1>
			    <section>
			    	<img :src="newsDetail?newsDetail.author.avatar_url:''" alt="" />
			        <h2 class="title">来自于:<a href="#/index">{{newsDetail?newsDetail.author.loginname:""}}</a></h2>
			        <section>
			            <kfirstContent :detailContent="newsDetail?newsDetail.content:''"></kfirstContent>
			            <!--<p>
			            	<img src="./images/pic_article.png" alt="">
                			<img src="./images/pic_article.png" alt="">
			            </p>-->
			        </section>
			    </section>
			</article>
		</div>
	`,
	methods: {
		loadDetail: function() {
			//			console.log(this.loads)
			this.$store.dispatch("setDetail");
		},
		loadContent() {
			var id = (this.$route.path).slice(8)
			Vue.http.get("https://cnodejs.org/api/v1/topic/" + id)
				.then((data) => {
					this.$store.state.newsDetail = data.data.data
					console.log(this.$store.state.newsDetail)
				}, (err) => {
					console.log(err)
				})
		}
	},
	mounted() {
		this.loadContent();
		this.loadDetail()		
	},
	computed: {
		newsDetail() {
			//			console.log(this.$store.state.newsDetail)
			if(this.$store.state.newsDetail) {
				return this.$store.state.newsDetail
			}
		}
	},
	components: {
		kfirstContent: {
			props: ["detailContent"],
			template: `
				<p v-html="detailContent"></p>
			`
		}
	}
})