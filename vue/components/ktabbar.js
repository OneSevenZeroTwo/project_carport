Vue.component("ktabbar", {
	template: `
		<div class="weui-tab">
		    <div class="weui-tab__panel">
		    </div>
		    <div class="weui-tabbar">
		        <a href="#/index" @click="changTab(0)" :class="{'weui-bar__item_on':tabbar==0}" class="weui-tabbar__item">
		            <img src="./images/icon_nav_dialog.png" alt="" class="weui-tabbar__icon">
		            <p class="weui-tabbar__label">交流</p>
		        </a>
		        <a href="#/movie" @click="changTab(1)" :class="{'weui-bar__item_on':tabbar==1}" class="weui-tabbar__item">
		            <img src="./images/icon_nav_article.png" alt="" class="weui-tabbar__icon">
		            <p class="weui-tabbar__label">鎏战</p>
		        </a>
		        <a href="javascript:;" @click="changTab(2)" :class="{'weui-bar__item_on':tabbar==2}" class="weui-tabbar__item">
		            <img src="./images/icon_nav_search.png" alt="" class="weui-tabbar__icon">
		            <p class="weui-tabbar__label">发现</p>
		        </a>
		        <a href="#/index" @click="changTab(3)" :class="{'weui-bar__item_on':tabbar==3}" class="weui-tabbar__item">
		            <img src="./images/icon_nav_button.png" alt="" class="weui-tabbar__icon">
		            <p class="weui-tabbar__label">我</p>
		        </a>
		    </div>
		</div>
	`,
	mounted: function() {
//		console.log(this.$store)
	},
	computed: {
		tabbar: function() {
//			console.log(this.$store.getters.getTabbar)
			return this.$store.getters.getTabbar
		}
	},
	methods:{
		changTab(idx){
			this.$store.state.tabbar = idx;
//			console.log(this.$store.state.tabbar)
		}
	}
})