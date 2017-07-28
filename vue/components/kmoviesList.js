Vue.component("kmoviesList", {
	template: `
		<div id="pullrefresh" class="mui-content mui-scroll-wrapper">
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
	methods: {
		movieLoad(){
			this.$store.dispatch("testJsonp")
		},
		movieList() {
			Vue.http.jsonp("https://api.douban.com//v2/movie/top250",{
						params:{
							count:10
						}
				}).then(function(data) {
					this.store.state.movieInfo = data.body.subjects
//					console.log(state.movieInfo)
				}, function(err) {
					console.log(err)
				})
		}
	},
	mounted(){
		this.movieLoad();
		this.movieList();
		mui.init({
				pullRefresh: {
					container: '#pullrefresh',
					down: {
						callback: pulldownRefresh
					},
					up: {
						contentrefresh: '正在加载...',
						callback: pullupRefresh
					}
				}
			});
			/**
			 * 下拉刷新具体业务实现
			 */
			function pulldownRefresh() {
				setTimeout(function() {
					var table = document.body.querySelector('.mui-table-view');
					var cells = document.body.querySelectorAll('.mui-table-view-cell');
					for (var i = cells.length, len = i + 3; i < len; i++) {
						var li = document.createElement('li');
						li.className = 'mui-table-view-cell';
						li.innerHTML = '<a class="mui-navigate-right">Item ' + (i + 1) + '</a>';
						//下拉刷新，新纪录插到最前面；
						table.insertBefore(li, table.firstChild);
					}
					mui('#pullrefresh').pullRefresh().endPulldownToRefresh(); //refresh completed
				}, 1500);
			}
			var count = 0;

			function pullupRefresh() {
				setTimeout(function() {
					mui('#pullrefresh').pullRefresh().endPullupToRefresh((++count > 2)); //参数为true代表没有更多数据了。
					var table = document.body.querySelector('.mui-table-view');
					var cells = document.body.querySelectorAll('.mui-table-view-cell');
					for (var i = cells.length, len = i + 20; i < len; i++) {
						var li = document.createElement('li');
						li.className = 'mui-table-view-cell';
						li.innerHTML = '<a class="mui-navigate-right">Item ' + (i + 1) + '</a>';
						table.appendChild(li);
					}
				}, 1500);
			}
			if (mui.os.plus) {
				mui.plusReady(function() {
					setTimeout(function() {
						mui('#pullrefresh').pullRefresh().pullupLoading();
					}, 1000);

				});
			} else {
				mui.ready(function() {
					mui('#pullrefresh').pullRefresh().pullupLoading();
				});
			}
	},
	computed: {
		movieInfo() {
			//			console.log(this.$store.state.movieInfo.images)
			return this.$store.state.movieInfo
		}
	},
	components: {
		kclacontent: {}
	}
})