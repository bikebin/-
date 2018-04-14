<template>
	<transition  enter-active-class="zoomInLeft" leave-active-class="zoomOutRight">
	<div class="scroll animated" ref="scroll">
		<div class="scroll-top">
			<div class="mine">
				<mt-header>
  			<router-link to="/" slot="left">
  			  <mt-button icon="back"></mt-button>
  			</router-link>
  			<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="login" >
  				<img ref="img" src="" alt="">
  				<p @click="login" ref="per">点击登录</p>
  				<div class="qiandao">
  					<span class="fa fa-pencil"></span>
  					<span>签到</span>
  				</div>
  		</div>
  		<div class="Shoplove">
  			<ul>
  				<li><p>0</p>商品收藏</li>
  				<li><p>0</p>店铺收藏</li>
  				<li><p>1</p>我的足迹</li>
  			</ul>
  		</div>
  		<div class="xiaoxi">
  			<div class="top-book">
  				<ul>
  					<li class="fl">我的订单</li>
  					<li class="fr">查看全部订单 > </li>
  				</ul>
  			</div>
  			<div class="loadingsomething">
  				<ul>
  					<li><img src="../assets/icon-topay.png" alt=""><p>待付款</p></li>
  					<li><img src="../assets/icon-toget.png" alt=""><p>待发货</p></li>
  					<li><img src="../assets/icon-tohave.png" alt=""><p>待收货</p></li>
  					<li><img src="../assets/icon-toview.png" alt=""><p>待评价</p></li>
  					<li><img src="../assets/icon-toback.png" alt=""><p>退款/退货</p></li>
  				</ul>
  			</div>
  		</div>
  			<div class="person-moneny">
  				<div class="moneny">
  					<ul>
  						<li class="fl"><img src="../assets/icon-m.png" alt="">我的财产</li>
  						<li class="fr">查看全部财产 ></li>
  					</ul>
  				</div>
  				<div class="per-moneny">
  					<ul>
  						<li><p><img src="../assets/icon-banl.png" alt=""><span>余额</span></p><span>￥0</span></li>
  						<span class="tiao"></span>
  						<li><p><img src="../assets/icon-inter.png" alt=""><span>积分</span></p><span>0</span></li>
  					</ul>
  				</div>
  				<div class="daijinjuan"><img src="../assets/icon-v.png" alt=""><span>代金券</span><span class="fr jiantou">></span></div>
  			</div>
  			<div class="other">
  				<div class="daijinjuan"><img src="../assets/icon-a.png" alt=""><span>收货地址管理</span><span class="fr jiantou">></span></div>
  				<div class="daijinjuan"><img src="../assets/icon-u.png" alt=""><span>用户设置</span><span class="fr jiantou">></span></div>
  			</div>
  		
			</div>
		</div>
	</div>
	</transition>

</template>

<script type="text/ecmascript-6">
import bus from '../assets/middlebus'
import BScroll from "better-scroll";
		export default {
			data(){
				return {
					msg: {},
					
				}
			},
			methods: {
				login() {
					this.$router.push({path:'/login'})
					
				},
				initScroll() {
				this.homeScroll = new BScroll(this.$refs.scroll,{
					click: true
				})
				}
			},
			mounted() {
				var self = this;
				this.$nextTick(() => {
                		this.initScroll();
                		});
				bus.$on("loginUseInfo",function(msg){
					self.msg = msg.data;
					// self.tomsg =  JSON.stringify(msg);
					if(msg){
						// self.$refs.per.value = JSON.stringify(msg[0].usename);
						self.$refs.per.innerHTML = JSON.stringify(msg[0].usename);
						 // self.$refs.img.innerHTML = "<img  src='../../static/img/sort01.png'>";
					}
					console.log(msg)
				});
			}
	}
</script>

<style lang="less">
	.scroll {
		width: 100%;
		position: fixed;
 		left: 0;
		top: 0;
		bottom: 48px;
		.scroll-top {
			width: 100%;
			position: fixed;
 			left: 0;
			top: 0;
			.mine{
				width: 100%;
				height: auto;
				.mint-header {
					background:  url('../assets/head_bg.png');
					position: relative;
					height: 170px;
					.mint-header-button {
						margin-top: -120px;
					}
				}
				.login {
					width: 100%;
					height: 130px;
					text-align: center;
					position: absolute;
					left: 0px;
    				top: 38px;
					img {
						display: inline-block;
						width: 97px;
						height: 97px;
						border-radius: 50%;
						background-color: rgba(56,91,97,0.8);
					}
					p, input {
						font-size: 16px;
						margin: 4px 0;
						color: white;
					}
					.qiandao {
						display: inline-block;
						position: absolute;
						width: 79px;
						height: 29px;
						line-height: 29px;
						top: 72px;
						right: 20px;
						border-radius: 12px;
						background-color: #EC5B87;
						span {
							color: white;
						}
					}
				}
				.Shoplove {
					width: 100%;
					height: 72px;
					li {
						display: inline-block;
						width: 33.33%;
						height: 72px;
		
						text-align: center;
						float: left;
						p {
							margin: 13px 0;
						}
					}
				}
				.xiaoxi {
					width: 100%;
					height: 150px;
					border-top: 14px solid #f7f7f7;
					.top-book {
						width: 100%;
						height: 48px;
						border-bottom: 2px solid #f2eded;
						li {
							display: inline-block;
							height: 48px;
							line-height: 48px;
							padding: 0 13px;
						}
					}
					.loadingsomething {
						width: 100%;
						height: 86px;
						li {
							display: inline-block;
							width: 20%;
							height: 86px;
							line-height: 26px;
							float: left;
							text-align: center;
							img {
								margin-top: 22px;
								width:28px;
								height:25px;
								box-sizing: border-box;
							}
						}
					}
				}
				.person-moneny {
					width: 100%;
					height: 210px;
					border-top: 14px solid #f7f7f7;
					.moneny { 
						width: 100%;
						height: 47px;
							border-bottom: 2px solid #f7f7f7;
						li {
							display: inline-block;
							height: 47px;
							line-height: 47px;
							padding: 0 14px;
		
							img {
								width: 25px;
								height: 25px;
								margin-right: 4px;
								box-sizing: border-box;
								vertical-align: middle;
							}
						}
					}
					.per-moneny {
						width: 100%;
						height: 98px;
						border-bottom: 1px solid #f5f5f5;
						.tiao {
							display:inline-block;
							width: 2px; 
							height: 68px;
    						margin-top: 18px;
    						background-color:#F5F5F5;
							float:left;
						}
						li {
							display: inline-block;
							height: 98px;
							width: 49%;
							float: left;
							text-align: center;
							p {
								height: 70px;
								line-height: 70px;
								img {
		
									width:30px;
									height: 26px;
									margin-right: 4px;
									box-sizing: border-box;
									vertical-align: middle;
								}
							}
						}
					}
					.daijinjuan {
						width: 100%;
						height: 48px;
						line-height: 48px;
							img {
								width: 24px;
								height: 24px;
								box-sizing:border-box;
								vertical-align: middle;
								margin: 0 8px 0 13px;
							}
							.jiantou {
								font-size: 16px;
								margin-right: 13px;
							}
						
					}
				}
				.other {
					width: 100%;
					height: 96px;
					line-height: 48px;
					border-top: 14px solid #f7f7f7;
					img {
						width: 24px;
						height: 24px;
						box-sizing:border-box;
						vertical-align: middle;
						margin: 0 8px 0 13px;
					}
					.jiantou {
						font-size: 16px;
						margin-right: 13px;
					}
					
				}
			}	
		}
	}
</style>