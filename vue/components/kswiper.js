Vue.component("kswiper", {
	template: `
		<div class="swiper-container">
	        <div class="swiper-wrapper">
	            <div v-for="(n,index) in imgArr" class="swiper-slide" :style="{backgroundImage:'url('+n+')'}"></div>
	        </div>
       		<div class="swiper-pagination"></div>
   		</div>
	`,
	mounted: function() {
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			effect: 'coverflow',
			grabCursor: true,
			centeredSlides: true,
			slidesPerView: 'auto',
			coverflow: {
				rotate: 50,
				stretch: 0,
				depth: 100,
				modifier: 3,
				slideShadows: true
			}
		})
	},
	computed: {
		imgArr: function() {
//			console.log(this.$store.state.imgArr)//这种为暴力行为获取数据源的数据
			return this.$store.getters.getImg //此种为状态管理中心分发出来的数据 然后获取
		}
	}
})