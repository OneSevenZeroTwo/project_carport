Vue.component("ksearch", {
	template: `
		<div id="box">
			<div :abc="searchBar" :class="{'weui-search-bar_focusing':searchBar}" class="weui-search-bar" id="search_Bar">
				<form class="weui-search-bar__form">
					<div class="weui-search-bar__box">
						<i class="weui-icon-search"></i>
						<input v-model="searchNews" type="search" class="weui-search-bar__input" id="search_input" placeholder="搜索" />
						<a v-range="{fn:clear}" href="javascript:" class="weui-icon-clear" id="search_clear"></a>
					</div>
					<label @click="searchBar=true" for="search_input" class="weui-search-bar__label" id="search_text">
            <i class="weui-icon-search"></i>
            <span>搜索</span>
        </label>
				</form>
				<a href="javascript:" @click="searchBar=false" class="weui-search-bar__cancel-btn" id="search_cancel">取消</a>
			</div>
		</div>
	`,
	data() {
		return {
			searchBar: false,
			searchNews: ""
		}
	},
	directives: {
		range: {
			bind: function(el, binding, vnode) {
				el.addEventListener("click", function() {
					binding.value.fn();
					document.getElementById("search_input").focus();
				})
			}
		}
	},
	methods: {
		clear: function() {
			this.searchNews = ""
		}
	},
	computed:{
		imgAr: function() {
			return this.$store.getters.getImg
//			console.log(this.$store.state.arrImg)
		}
	}
})