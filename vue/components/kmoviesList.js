Vue.component("kmoviesList", {
	template: `
		<div id="pullrefresh">

			<div class="title">
				Top100电影榜
			</div>
			<div class="mui-scroll">
				<ul class="mui-table-view mui-table-view-chevron">
					<li v-for="(m,index) in movieInfo" class="mui-table-view-cell mui-media">
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
	data() {
		return {
			count: 10
		}
	},
	methods: {
		movieLoad() {
			this.$store.dispatch("testJsonp")
		},
		movieList() {
//			console.log(this)
			this.count += 10
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
//		mui.init({
//			pullRefresh: {
//				container: '#pullrefresh',
//				down: {
//					callback: pulldownRefresh
//				},
//				up: {
//					contentrefresh: '正在加载...',
//					callback: pullupRefresh
//				}
//			}
//		});
		//		if(mui.os.plus) {
		//			mui.plusReady(function() {
		//				setTimeout(function() {
		//					mui('#pullrefresh').pullRefresh().pullupLoading();
		//				}, 1000);
		//
		//			});
		//		} else {
		//			mui.ready(function() {
		//				mui('#pullrefresh').pullRefresh().pullupLoading();
		//			});
		//		}
	},
	computed: {
		movieInfo() {
			//			console.log(this.$store.state.movieInfo.images)
			return this.$store.state.movieInfo
		}
	}
})