Vue.component("kmovienav", {
	template: `
		<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
			<div class="mui-scroll">
				<a class="mui-control-item mui-active" href="javascript:;">
					推荐
				</a>
				<a class="mui-control-item" href="javascript:;">
					喜剧
				</a>
				<a class="mui-control-item" href="javascript:;">
					悲剧
				</a>
				<a class="mui-control-item" href="javascript:;e">
					剧情
				</a>
				<a class="mui-control-item" href="javascript:;">
					犯罪
				</a>
				<a class="mui-control-item" href="javascript:;">
					动作
				</a>
				<a class="mui-control-item" href="javascript:;">
					历史
				</a>
				<a class="mui-control-item" href="javascript:;">
					灾难
				</a>
				<a class="mui-control-item" href="javascript:;">
					科幻
				</a>
			</div>
		</div>
	`,
	mounted(){
	}
})