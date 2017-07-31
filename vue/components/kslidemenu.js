Vue.component("kslidemenu", {
	template: `
			<div @click="hideSlider()" class="slide_main" :class="{'silde-left':slider==false,'silde-right':slider==!false}">
				<div class="bagTop">
					<h2>书中那片枫叶</h2>
				</div>	
				<div class="slider_content">
					<p>个人信息</p>
					<p>我的钱包</p>
					<p>打扮宜夏</p>
					<p>我的收藏</p>
					<p>我的相册</p>
				</div>
				<div class="weui-uploader__bd">
			        <ul class="weui-uploader__files" id="uploaderFiles">
			            <li class="weui-uploader__file" style="background-image:url(./images/8.jpg)"></li>
			            <li class="weui-uploader__file" style="background-image:url(./images/5.jpg)"></li>
			            <li class="weui-uploader__file" style="background-image:url(./images/3.jpg)"></li>
			        </ul>
			        <div class="weui-uploader__input-box">
			            <input id="uploaderInput" class="weui-uploader__input" type="file" accept="images/*" multiple />
			        </div>
				</div>
			</div>
	`,
	computed: {
		getImages() {
			return this.$store.state.imgArr
		},
		slider() {
			return this.$store.state.slider
		},
		title() {
			//			this.$store.state.title
			return this.$store.getters.getTitle
			//			console.log(this.$store.state.title)
		}
	},
	methods:{
		hideSlider(){
//			this.$store.state.slider = false
		}
	}
})