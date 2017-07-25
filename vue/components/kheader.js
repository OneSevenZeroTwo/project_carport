//建立组件
Vue.component("kheader", {
	template: `
		<div>
			<header>
				{{title}}
			</header>
		</div>
	`,
	computed: {
		title() {
			//			this.$store.state.title
			return this.$store.getters.getTitle
//			console.log(this.$store.state.title)
		}
	}
})