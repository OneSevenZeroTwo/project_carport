Vue.component("klist", {
	template: `
		<div  class="weui-panel weui-panel_access">
		    <div class="weui-panel__hd">文章列表</div>
		    <div class="weui-panel__bd">
		        <a :href="'#/detail/'+n.id" @click="putDetail(n.id)" v-for="(n,index) in news" class="weui-media-box weui-media-box_appmsg">
		            <kimgdirective :img_url="n.author.avatar_url"></kimgdirective>
		            <div class="weui-media-box__bd">
		                <h4 class="weui-media-box__title">{{n.title}}</h4>
		                <kcontentdirective :msg="n.content"></kcontentdirective>
		                <kinformation :timeAge="n.create_at" :tabShare="n.tab"></kinformation>	
		            </div>
		        </a>
		    </div>
			<div class="weui-panel__ft">
				<a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
					<div @click="loadMore()" class="weui-cell__bd">查看更多</div>
					<span class="weui-cell__ft"></span>
				</a>
			</div>
			<div class="weui-loadmore weui-loadmore_line" style="display:none;">
				<span class="weui-loadmore__tips">暂无数据</span>
			</div>
			<div id="loadingToast" :class="{'showLoadmore':loads==0}">
				<div class="weui-mask_transparent"></div>
				<div class="weui-toast">
					<i class="weui-loading weui-icon_toast"></i>
					<p class="weui-toast__content">数据加载中</p>
					</div>
				</div>
			</div>
		</div>
	`,
	methods: {
		loadMore: function() {
			//			console.log(this.loads)
			this.$store.dispatch("setNews")
		},
		putDetail(index){
			this.$store.state.id = index;
		}
	},
	computed: {
		news() {
			//			console.log(this.$store.state.news)
			return this.$store.state.news
		},
		loads() {
			//			console.log(this.$store.state.loads)
			return this.$store.state.loads
		}
	},
	mounted() {
		this.loadMore();
	},
	components: {
		kimgdirective: {
			props: ["img_url"],
			template: `
				<div class="weui-media-box__hd">
		            <img class="weui-media-box__thumb" :src="img_url" alt="">
		        </div>
			`
		},
		kcontentdirective: {
			props: ["msg"],
			template: `
				<p class="weui-media-box__desc" v-html="msg"></p>
			`,
			computed: {
				newsMsg() {
					return this.msg
				}
			}
		},
		kinformation: {
			props: ["timeAge", "tabShare"],
			template: `
				<div class="list_foot_cot">
					<p style="display:inline-block">发布于:{{timeAge|setDate}}前</p>
					<p style="float: right;">
						<a href="javascript:void(0);"  :class="{'share_Bg_b':tabShare=='share','share_Bg_r':tabShare=='ask','share_Bg_t':tabShare==undefined}">{{tabShare|t_w_Share}}</a>
					</p>
				</div>
			`,
			computed: {
				nowDate() {
					return this.tabShare
				}
			},
			filters: {
				setDate(input) {
					if(Math.floor((Date.parse(new Date()) - Date.parse(input)) / 60000) < 60) {
						input = Math.floor((Date.parse(new Date()) - Date.parse(input)) / 60000) + "分"
					} else if(Math.floor((Date.parse(new Date()) - Date.parse(input)) / 60000) > 60 && Math.floor((Date.parse(new Date()) - Date.parse(input)) / 3600000) < 24) {
						input = Math.floor((Date.parse(new Date()) - Date.parse(input)) / 3600000) + "小时"
					} else if(Math.floor((Date.parse(new Date()) - Date.parse(input)) / 3600000) > 24 && Math.floor((Date.parse(new Date()) - Date.parse(input)) / 86400000) < 30) {
						input = Math.floor((Date.parse(new Date()) - Date.parse(input)) / 86400000) + "天"
					} else if(Math.floor((Date.parse(new Date()) - Date.parse(input)) / 86400000) > 30) {
						input = Math.floor((Date.parse(new Date()) - Date.parse(input)) / 86400000 / 30) + "月"
					}
					return input
				},
				t_w_Share(input) {
					if(input == "share") {
						input = "分享";
					} else if(input == "ask") {
						input = "热帖"
					} else {
						input = "其他"
					}
					//					console.log(input)
					return input
				}
			}
		}
	}
})