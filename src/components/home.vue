<template>
	<transition  enter-active-class="fadeIn " leave-active-class="fadeOut" >
		
		<div class="home animated">
		<div class="top-clear clearfix">
			<mt-search
				class="mt-search"
  				v-model="value"
  				cancel-text="取消"
  				placeholder="搜索">
			</mt-search>
		</div>
		<div class="scroll"  ref="scroll">
			<div class="scroll-top">
				<div class="swiper">
			<mt-swipe :auto="3000">
  			<mt-swipe-item :class="{slide1:true}">
  				<img src="../assets/swiper01.png" alt="">
  			</mt-swipe-item>
  			<mt-swipe-item :class="{slide2:true}">
  				<img src="../assets/swiper02.png" alt="">
  			</mt-swipe-item>
  			<mt-swipe-item :class="{slide3:true}">
  				<img src="../assets/swiper03.png" alt="">
  			</mt-swipe-item>
  				<mt-swipe-item :class="{slide4:true}">
  				<img src="../assets/swiper04.png" alt="">
  			</mt-swipe-item>
		</mt-swipe>
		</div>
		<div class="give">
			<ul >
				<li><a href=""><img src="../assets/jifen.png" alt=""></a><span>积分商城</span></li>
				<li><a href=""><img src="../assets/gouwu.png" alt=""></a><span>团购中心</span></li>
				<li><a href=""><img src="../assets/jingxuan.png" alt=""></a><span>店铺精选</span></li>
				<li><a href=""><img src="../assets/qiandao.png" alt=""></a><span>每日签到</span></li>
			</ul>
		</div>
		<div class="cheap"><img src="../assets/youhuiquan.png" alt=""></div>
		<div class="sort">
			<ul >
				<li v-for="item in homeSort.data">
					<img :src="item.pic" alt="">
					
				</li>
			</ul>
		</div>
		<div class="info">
			<ul>
				<li><img src="../assets/guibin.jpg" alt=""></li>
				<li><img src="../assets/Wechat.jpg" alt=""></li>
				
			</ul>
		</div>
		<div class="shangpin">
			<ul>
				<li v-for="val in shangpin.data"><img :src="val.pic" alt=""><p>{{val.name}}</p><span>￥{{val.pay}}</span></li>
			</ul>
		</div>
			</div>
		</div>
		</div>
		
	</transition>
</template>

<script type="text/ecmascript-6">
import BScroll from "better-scroll";


	export default {

	
		 data () {
      		return {
      			value: '',
      			homeSort: {},
      			shangpin: {}	
    		}
		},
		mounted() {
    	 this.$ajax({
      		method: 'get',
      		url: '/api/homeSort' 
  			}).then(function (response) {
  		     	this.homeSort = response.data; 
  		        // console.log(this.homeSort.data); 
  		        this.$nextTick(() => {
                		this.initScroll();
                		});
  		    }.bind(this)).catch(function(err){
  		     	console.log(err)
  		   }),
  		  this.$ajax({
  		  	method: 'get',
  		  	url: '/api/shangpin'
  		  }).then(function (response) {
  		     	this.shangpin = response.data; 
  		        // console.log(this.shangpin.data); 
  		    }.bind(this)).catch(function(err){
  		     	console.log(err)
  		   })

		},
		methods: {												
			initScroll() {
				this.homeScroll = new BScroll(this.$refs.scroll,{
					click: true
				})
			}
		}
		
	}
</script>

<style lang="less">
	.home {
		
		width: 100%;

		.top-clear {
			height: 50px;
			.mint-searchbar, .mint-search {
				position: fixed;
				width: 100%;
				top: 0;
				left: 0;
				background-color: #FD3D53;
				height: 50px;
				clear: both;
				z-index: 20;
			}
		}
		.scroll {

		position: fixed;
		left: 0;
		top: 0;
		bottom: 48px;
		.scroll-top {
		position: fixed;
		left: 0;
		top: 0;
		width: 100%;
		.swiper {
			margin-top: 62px;
			height: 160px;
			img {
				width: 100%;
				height: 160px;
				box-sizing: border-box;
			}
		}
		.give {
			width: 100%;
			height: 114px;
			li {
				display: inline-block;
				text-align: center;
				width: 24%;
				height: 100%;
				a {
					display: inline-block;
					padding: 10px 0;
					width: 100%;
					height: 100%;
				}
			}
		}
		.cheap {
			width: 100%;
			height: 176px;
			border-top: 12px solid #f7f7f7;
			img {
				width: 100%;
				height: 148px;
				box-sizing: border-box;
				padding: 0 8px;
			}
		}
		.sort {
			width: 100%;
			height: 218px;
			li {
				display: inline-block;
				float: left;
				width: 50%;
				height: 112px;
				text-align: center;
				img {
					width: 168px;
					height: 98%;
					box-sizing: border-box;

				}
			}
		}
		.info {
			width: 100%;
			height: 412px;
			border-top: 18px solid #f7f7f7;

			li {
				margin: 4px 0;
				width: 100%;
				height: 184px;
				border-bottom: 1px solid #f7f7f7;
				img {
					width: 100%;
					height: 153px;
					padding: 0 8px;
					margin-top: 17px;
					box-sizing: border-box;

				}
			}
		}
		.shangpin {
			width: 100%;
			height: 480px;
			li {
				float: left;
				display: inline-block;
				width: 50%;
				height: 230px;
				text-align: center;
				img {
					transition: all 0.6s linear;
					width: 164px;
					height: 164px;
					margin: 0 10px;
				    background-size: cover;
          			box-sizing: border-box;
					&:hover {
						   transform: scale(1.08); 
					}
				}
				p {
					margin: 7px 10px;
					font-size: 12px;
					line-height: 15px;
				}
				span {
					color: red;
					font-size: 10px;
					margin: 0 10px;
				}

			}
		}
	}
	}
}

</style>