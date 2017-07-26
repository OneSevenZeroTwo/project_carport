Vue.component("klayers", {
	template: `
		<div data-name="navigation" :class="{'j_pic show_layers':slider==false,'j_layer j_transform':slider==true}" class="layers__layer layers__layer_navigation"></div>
	`,
	computed: {
		slider() {
			return this.$store.state.slider
		}
	}
})