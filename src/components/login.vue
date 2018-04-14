<template>
  <div class="login">
  	<transition  enter-active-class="fadeInUp" leave-active-class="fadeOutUp">
  		<div  class="error-top animated"  v-show="top">
  			请填写完整用户信息哦~~
  		</div>
  	</transition>	
  	<transition  enter-active-class="fadeInLeft" leave-active-class="fadeOutRight">
  		<div  class="error-top animated"  v-show="bingo">
  			请填写正确的用户信息哦！！
  		</div>
  	</transition>
  	<mt-header title="账户登录">
  			<router-link to="/mine" slot="left">
 		   		<mt-button icon="back"></mt-button>
 		 	</router-link>
  				<mt-button slot="right"></mt-button>
		</mt-header>
<!-- 		<form class="login-witer"> 没有验证功能
			<ul>
				<li>
					<img src="../../static/img/user.png" alt=""><input type="text" name="" placeholder="邮箱/用户名/已验证手机">
			
				</li>
				<li>
					<img src="../../static/img/password.png" alt=""><input type="password" placeholder="密码">
				</li>
			</ul>
			<mt-button class="submit" type="default">登录</mt-button>
		</form> -->
		<!-- 具有验证功能的表单begin -->

		<div class="login-witer" >
			<ul>
				<li>
					<img src="../../static/img/user.png" alt="">
					<div class="control-group" v-bind:class="{ 'form-group--error': $v.name.$error }">
						<!-- <label class="control-label">用户名</label> -->
						
						<input name="name"
						    placeholder="邮箱/用户名/已验证手机"
						    v-model.trim="name"
						    @input="$v.name.$touch()"
						>
						</input>
					</div>
					<span class="form-group__message" v-if="!$v.name.required">用户名不能为空</span>
					<span class="form-group__message" v-if="!$v.name.minLength">用户名不能太短</span>
				</li>
				<li>
					<img src="../../static/img/password.png" alt="">
					<div class="control-group" v-bind:class="{ 'form-group--error': $v.password.$error }">
						<!-- <label class="control-label">邮箱</label> -->
						
						<input name="password"
						    placeholder="密码"
						    v-model.trim="password"
						    @input="$v.password.$touch()"
						>
						</input>
					</div>
					<span class="form-group__message" v-if="!$v.password.required">密码不能为空</span>
					<span class="form-group__message" v-if="!$v.password.minLength">请填写正确的密码</span>
				</li>
			</ul>
			<mt-button  @click="submit($event)"  ref="sub"   class="submit" type="default">登录</mt-button>
		</div>
		
		<!-- 具有验证功能的表单end -->
		<div class="login-other">
		
			<ul>
				<li class="tr">立即注册</li>
				<span></span>
				<li class="tl">忘记密码</li>
			</ul>
		</div>
		<div class="fangshi">
			<p class="deng">其他登录方式</p>
			<ul>
				<li class="tr"><a href="https://graph.qq.com/oauth2.0/show?which=Login&display=pc&response_type=code&client_id=101438328&redirect_uri=http%3A%2F%2Fucenter.minihou.com%2Flogin.php&client_secret=ad44c137114423d4d57e406b51011851&state=http%3A%2F%2Fwww.minihou.com%3Fctl%3DLogin%26met%3Dcheck%26typ%3De%26redirect%3Dhttp%253A%252F%252Fm.minihou.com&cope=get_user_info,get_info&callback=http%3A%2F%2Fwww.minihou.com%3Fctl%3DLogin%26met%3Dcheck%26typ%3De%26redirect%3Dhttp%253A%252F%252Fm.minihou.com"><img src="../../static/img/wap-qq.png" alt=""></a></li>
				<li><a href="https://open.weixin.qq.com/connect/qrconnect?appid=wx199a024be3cb2855&redirect_uri=http%3A%2F%2Fucenter.minihou.com%2Findex.php%3Fctl%3DConnect_Bind%26met%3Dcallback%26from%3Dwap%26callback%3Dhttp%253A%252F%252Fwww.minihou.com%253Fctl%253DLogin%2526met%253Dcheck%2526typ%253De%2526redirect%253Dhttp%25253A%25252F%25252Fm.minihou.com%26type%3Dweixin&response_type=code&scope=snsapi_login&state=STATE#wechat_redirect"><img src="../../static/img/wap-WeChat.png" alt=""></a></li>
				<li class="tl"><a href="https://api.weibo.com/oauth2/authorize?client_id=2950433990&redirect_uri=http%3A%2F%2Fucenter.minihou.com%2Findex.php%3Fctl%3DConnect_Bind%26met%3Dlogin%26type%3Dweibo&state=http%3A%2F%2Fwww.minihou.com%3Fctl%3DLogin%26met%3Dcheck%26typ%3De%26redirect%3Dhttp%253A%252F%252Fm.minihou.com"><img src="../../static/img/wap-weibo.png" alt=""></a></li>
			</ul>
		</div>


  </div>
	
</template>
 
<script>

import bus from '../assets/middlebus'
import { required,minLength,between,email } from 'vuelidate/lib/validators'
	export default {
		data() {
			return {
				// newUser: {
    		    name:'',
    		    email:'',
    		    password:'',
    		    confirm_pwd:'',
    			top: false,
    		    bingo: false,
    		    user:{}
    		  }
    		 
			// }
		},													
		validations: {
 			// newUser:{
 				  name: {
 				    required,
 				    minLength: minLength(2)
 				  },
 				  password: {
 				    required,
 				    minLength: minLength(6)
 				  }
 			// }
		},
		methods: {
			submit() {
				if(this.name==''||this.password == '') {
					// alert('请输入你的用户名')
					this.top = true  //如果没有输入完成让top显示出来
					let _this = this
					setTimeout(function(){
						_this.top = false;//注意this的指向
					},1800)        //让它两秒钟后消失

				}else if(this.name.length<2||this.password.length<6){
					this.bingo = true  //如果没有输入完成让top显示出来
					let _this = this
					setTimeout(function(){
						_this.bingo = false;//注意this的指向
					},1800) 
				}else {
					this.bingo = false;
					this.$router.push({path:'/mine'})
					// console.log(this.name)
					// console.log(this.password)
					
					// var obj=JSON.stringify(this.newUser)
					 // var obj=this.newUser
					// console.log(obj) 
					this.$ajax({
      					method: 'get',
      					url: '/api/user' 
  						}).then(function (response) {
  		  			   	this.user = response.data; 
  		  			      // console.log(this.user.data); 
  		  			  bus.$emit("loginUseInfo",this.user.data)
  		  			  }.bind(this)).catch(function(err){
  		  			   	console.log(err)
  		  			 }),
  		  			  
  		  		  
					this.$ajax({
						method: 'post',
						url: 'http://127.0.0.1/login',
						headers: {
                            'Content-Type': 'application/x-www-form-urlencoded'
                      },
                     params: {
    					name: this.name,
    					password: this.password
  					},
						
					}).then(function(res) {
						this.info = res.data;
						// for(let i =0; i<this.info.length;i++){
						// 	if(res.data.name == this.name){
						// 		return res.data.name 
						// 	}
						// }
						
						console.log(res.data)
						// console.log(this.res.data.name)
					}).catch(function(err){
						// console.log(err)
					})
				}
			}
		}
	}
	
</script>
 	
<style lang="less">
	.error-top {
		text-align: center;
		width: 100%;
		height: 200%;
		background-color: rgba(22,22,22,0.3);
		line-height: 300px;
		
		z-index: 90;
		position: absolute;
		top: 0;
		left: 0;
		color:#f11c3a;
		font-size: 20px;
		font-weight: 700;
	}
	.login {
		.mint-header {
			background-color:  #FD3D53;
			border: none;
		}
		.login-witer {
			width:100%;
			height: 290px;
			margin: 0 auto;
			ul {
				padding: 33px 0 39px 0;
				height:130px;
				li {
					width: 90%;
					height: 48px;
					margin: 0 22px 24px 22px;
					border-bottom: 1px solid #EAEAEA;
					img {
						margin: 14px 21px 0 7px;
						display: inline-block;
						vertical-align: top;
						float: left;
					}
					input {
						border: none;
						width: 80%;
						height: 48px;
						outline: none;
						color: #D1D1D1;
					}
					.form-group__message{
						display: none;
  					    font-size: .95rem;
  						color: #CC3333;
  						margin-bottom: 12px;
					}
					.form-group--error+.form-group__message {
   						 display: block;
   						 color: #CC3333;
   						 margin: 2px 0 0 12%;
					}

				}
			}
			.submit {
				width: 90%;
				margin: 0 22px;
				background-color: #F11C3A;
				color: white;
			}
		}
		.login-other {
			width: 100%;
			height: 60px;
			ul {
				height: 100%;
				text-align: center;
				li {
					display: inline-block;
					width:40%;
					height: 100%;
					float: left;
					padding: 0 4%;
					color: #9F9F9F;
					font-size: 16px;
				}
				span {
					display: inline-block;
					width: 2px;
					height: 18px;
					margin-top: 2px;
					background-color: #f5f5f5;
					float: left;
				}

			}
		}
		.fangshi {
			width: 100%;
			height: 120px;
			text-align: center;
			.deng {
				color: #9F9F9F;
				margin-bottom: 20px;
			}
			ul {
				width: 100%;
				height: 60px;
				li {
					display: inline-block;
					width: 33.33%;
					float: left;
					a {
						display: inline-block;
						width: 45px;
						height: 45px;
						img {
							display: inline-block;
							width: 45px;
							height: 45px;
							box-sizing: border-box;
						}
					}
					
				}
			}
		}
	}
</style>