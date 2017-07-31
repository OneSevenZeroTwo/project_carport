Vue.component("kloopMovie", {
	template: `
				<div class="swiper-container">
			        <div class="swiper-wrapper">
			            <div v-for="(i,index) in movieInfo" class="swiper-slide">
			            	<img :src="movieInfo?i.images.large:''" style="width:350px;height:200px"/>
			            	<a :href="i.alt"><p style="color:white;">{{i.title}}</p></a>
			            </div>
			        </div>
			        <!-- Add Pagination -->
			        <div class="swiper-pagination"></div>
			        <!-- Add Arrows -->
			        <div class="swiper-button-next"></div>
			        <div class="swiper-button-prev"></div>
			    </div>
			`,
	methods: {
		movieLoad() {
			return this.$store
		}
	},
	mounted() {
		var swiper = new Swiper('.swiper-container', {
			pagination: '.swiper-pagination',
			nextButton: '.swiper-button-next',
			prevButton: '.swiper-button-prev',
			paginationClickable: true,
			spaceBetween: 30,
			centeredSlides: true,
			autoplay: 5500,
			autoplayDisableOnInteraction: false
		})
	},
	computed: {
		movieInfo() {
			return this.$store.state.movieInfo
		}
	}
})