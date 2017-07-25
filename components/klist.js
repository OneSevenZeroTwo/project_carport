Vue.component("klist", {
	template: `
		<div  class="weui-panel weui-panel_access">
		    <div class="weui-panel__hd">文章列表</div>
		    <div class="weui-panel__bd">
		        <a href="javascript:void(0);" v-for="(n,index) in news" class="weui-media-box weui-media-box_appmsg">
		            <kimgdirective :img_url="n.author.avatar_url"></kimgdirective>
		            <div class="weui-media-box__bd">
		                <h4 class="weui-media-box__title">{{n.title}}</h4>
		                <kcontentdirective :msg="n.content"></kcontentdirective>
		            </div>
		        </a>
		    </div>
		    <div class="weui-panel__ft">
		        <a href="javascript:void(0);" class="weui-cell weui-cell_access weui-cell_link">
		            <div class="weui-cell__bd">查看更多</div>
		            <span class="weui-cell__ft"></span>
		        </a>    
		    </div>
		</div>
	`,
	methods: {
		loadMore: function() {
			this.$store.dispatch("setNews")
		}
	},
	computed: {
		news() {
			console.log(this.$store.state.news)
			return this.$store.state.news
		}
	},
	mounted() {
		this.loadMore();
	},
	components:{
		kimgdirective:{
			props:["img_url"],
			template:`
				<div class="weui-media-box__hd">
		            <img class="weui-media-box__thumb" :src="img_url" alt="">
		        </div>
			`
		},
		kcontentdirective:{
			props:["msg"],
			template:`
				<p class="weui-media-box__desc" v-html="msg"></p>
			`,
			computed:{
				newsMsg(){
					return this.msg
				}
			}
		}
	}
})