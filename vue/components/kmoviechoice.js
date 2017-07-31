Vue.component("kmoviechoice",{
	template: `
		<div id="pullrefresh">

			<div class="title">
				Top100电影榜
			</div>
			<div class="mui-scroll">
				<ul class="mui-table-view mui-table-view-chevron">
					<li v-for="(m,index) in movieInfoChoice" class="mui-table-view-cell mui-media">
						<a href="javascript:;">
							<img class="mui-media-object mui-pull-right" :src="m.images.medium">
							<div class="mui-media-body">
								{{m.title}}/{{m.original_title}}
								<p class='mui-ellipsis'>
									<span v-for="(n,idx) in m.genres">{{n}} </span>
									 <p>年代:{{m.year}}</p>
								</p>
							</div>
						</a>
					</li>
				</ul>
			</div>
		</div>
	`,
	methods:{
		getChoiceMovie(temp) {
			console.log(temp);
			Vue.http.jsonp("https://api.douban.com//v2/movie/top250?count=30&genres=" + temp)
				.then(function(data) {
					this.store.state.movieInfoChoice = data.body.subjects
					//					console.log(state.movieInfo)
				}, function(err) {
					console.log(err)
				})
		}
	},
	computed:{
		choiceMovice(){
			console.log(choiceMovice)
			return this.$store.state.choiceMovice;
		}
	},
	mounted(){
		this.getChoiceMovie(choiceMovice)
	}
})
