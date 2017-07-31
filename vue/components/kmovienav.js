Vue.component("kmovienav", {
	template: `
		<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
			<div class="mui-scroll">
				<a href="#/movie/movielistcla/" class="mui-control-item" v-for="n,index in movieNav" @click="getEle(index,n)">
					{{n}}
				</a>
			</div>
		</div>
	`,
	methods: {
		getEle(index,n){
			this.$store.state.choiceMovie = n;
			console.log(this.$store.state.choiceMovie)
		}
	},
	mounted() {

	},
	computed: {
		movieNav() {
			return this.$store.state.movieNav
		}
	}
})