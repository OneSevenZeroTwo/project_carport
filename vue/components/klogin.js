Vue.component("klogin",{
	template:`
		<div id="containet_login">
			<div class="login_register">
				<p>
					<a href="#">登陆</a>
				</p>
				<p>
					<a href="#">注册</a>
				</p>
			</div>
			<div class="putdown">
				<img src="./images/4.jpg" alt="" />
				<fieldset>
					<legend>登陆</legend>
					<label for="usename">帐号：<input type="text" id="usename" autofocus /><br></label>
					<label for="psd">密码：<input type="password" id="psd" /></label>
				</fieldset>
			</div>
			<span><a class="qq">Q Q 登陆</a></span>
			<span><a class="weixin">微博登陆</a></span>
		</div>
	`,
	methods:{
		
	}
})
