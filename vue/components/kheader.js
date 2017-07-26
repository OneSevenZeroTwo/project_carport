//建立组件
Vue.component("kheader", {
	template: `
		<div>
			<header>
				<div @click="setMenu()" :class="{'cross':changeMenu}" class="menu-button">
					<div class="bar"></div>
					<div class="bar"></div>
					<div class="bar"></div>
				</div>
				{{title}}
			</header>
		</div>
	`,
	computed: {
		title() {
			//			this.$store.state.title
			return this.$store.getters.getTitle
			//			console.log(this.$store.state.title)
		},
		changeMenu() {
			return this.$store.state.changeMenu
		},
		slider() {
			return this.$store.getters.getMenu
		}
	},
	methods: {
		setMenu() {
			this.$store.state.slider = !(this.$store.state.slider)
			this.$store.state.changeMenu = !(this.$store.state.changeMenu)
		}
	}
})