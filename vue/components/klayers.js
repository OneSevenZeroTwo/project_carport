Vue.component("klayers", {
	template: `
		<div data-name="navigation" :class="{'j_pic':slider==false,'j_transform':slider==true}" class="j_layer layers__layer layers__layer_navigation"></div>
	`,
	computed: {
		slider() {
			return this.$store.state.slider
		}
	}
})