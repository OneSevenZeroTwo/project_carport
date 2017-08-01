Vue.component("kmoviesList", {
	template: `
		<div id="pullrefresh">

			<div class="title" @click="movieList()">
				Top100电影榜
			</div>
			<div class="mui-scroll">
				<ul class="mui-table-view mui-table-view-chevron">
					<li v-for="(m,index) in movieInfo" class="mui-table-view-cell mui-media">
						<a :href="'#/moviedetail/'+m.id" @click="putmovieDetail(m.id)">
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
	data() {
		return {
			count: 10
		}
	},
	methods: {
		movieLoad() {
			this.$store.dispatch("testJsonp")
		},
		putmovieDetail(index) {
			this.$store.state.movie_id = index;
			this.$store.dispatch("movieMessage")
			this.$store.dispatch("setmovieMsg")
		},
		movieList() {
//			console.log(this)
			this.count += 10
			console.log(this.count)
			Vue.http.jsonp("https://api.douban.com//v2/movie/top250", {
				params: {
					count: this.count
				}
			}).then(function(data) {
				this.store.state.movieInfo = data.body.subjects
				//					console.log(state.movieInfo)
			}, function(err) {
				console.log(err)
			})
		}
	},
	mounted() {
		this.movieLoad();
		this.movieList();
	},
	computed: {
		movieInfo() {
			//			console.log(this.$store.state.movieInfo.images)
			return this.$store.state.movieInfo
		}
	}
})