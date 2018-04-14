<template>
	<transition  enter-active-class="zoomInUp" leave-active-class="zoomOutDown">
	<div class="fenlei animated">  
    	<div class="top-clear clearfix">
    		<i class="fa fa-angle-left"></i>
			<mt-search
				class="mt-search"
  				v-model="value"
  				cancel-text="取消"
  				placeholder="搜索">
			</mt-search>
			<i class="fa fa-ellipsis-h"></i>
		</div>
    	<div class="fenlei-pin">
    		<div class="scroll-fenlei" ref="scroll">
    			<div class="scroll-top">
    				<div class="left-list">
    			<ul>
    				<li class="leftList" @click="path(index)" v-for="(val,index) in leftList.data" :class="{'active':ind===index}"><i class="fa fa-star-o "></i> <p :class="{'active':ind===index}">{{val.name}}</p><span class=" heng"></span></li>
    			</ul>
    				</div>
    			</div>
    		</div>
    	
    			<div class="right-info ">
    					<div class="rightInfo0"  v-if="!ind">
    						<ul>
    							<li><img  src="../../static/img/right-info01.png" alt=""></li>
    							<li><img   src="../../static/img/right-info02.jpg" alt=""></li>
    							<li><img   src="../../static/img/right-info01.png" alt=""></li>
    						</ul>
    					</div>
    					
    					<transition  enter-active-class="zoomInUp" leave-active-class="zoomOutDown">
    						<router-view v-if="ind" class=" animated"  :zi="rightInfo"></router-view>
    					</transition>
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
  					leftList: {},
  					rightInfo: {},
  					ind: 0
  				}
  			},
  			mounted() {
  				this.$ajax({
  					method: 'get',
  					url: '/api/leftList',
  				}).then(function (res) {
  		  		  	this.leftList = res.data; 
  		  		    this.$nextTick(() => {
           				 this.initScroll();
					});
  		  		 }.bind(this)).catch(function(err){
  		  		  	console.log(err)
  		  		})

  			},
  			methods: {
  				path(index) {

  					// console.log(index)
  					this.ind = index;

  					this.$router.push({path:'/fenlei/'+index+''})
  					
  					this.$ajax({
  						method: 'get',
  						url: '/api/rightInfo'+index+''
  					}).then(function (res) {
  						this.rightInfo = res.data;
  						
  						
  						// console.log(this.rightInfo.data);
  					}.bind(this)).catch(function(err){
  						console.log(err)
  					})
  				
  				},
  				initScroll() {
					this.homeScroll = new BScroll(this.$refs.scroll,{
						click: true
					})
				}

  			},
  			computed: {
  				
  			}
  
 
};  
</script>

<style lang="less">
		
		.top-clear {
			height: 50px;
			text-align: center;
			.mint-searchbar, .mint-search {
				position: fixed;
				width: 100%;
				top: 0;
				left: 0;
				background-color: #FD3D53;
				height: 50px;
				z-index: 9;
				padding: 0 32px;
			}
			.fa-angle-left {
				position: fixed;
				z-index: 10;
				width: 10%;
				height: 50px;
			    top: 7px;
   				left: -5px;
   				font-size: 30px;
   				color: white;
				display: inline-block;
			}
			.fa-ellipsis-h {
				position: fixed;
			    right: -3px;
    			top: 15px;
    			font-size: 18px;
    			color: white;
				display: inline-block;
				width: 10%;
				height: 50px;
			}
		}
		.fenlei-pin {

			width: 100%;
			height: 628px;
			display: flex;
			
		

		.scroll-fenlei {
			width: 23%;
			position: fixed;
 			left: 0;
			top: 0;
			bottom: 48px;
			
			.scroll-top {
				position: fixed;
 				left: 0;
				top: 0;
				width: 23%;
				.left-list {
					width: 100%;				
					margin-top: 50px;

						li {
							text-align: center;
							width: 80%;
							height: 54px;
							padding: 8px 8px;
							vertical-align: middle;
							background-color: #F5F5F5;
							color: #B0B0B0;
							&.active {
									color: red;
									background-color: #f5eaea;
								}
							.fa-star-o {
								margin-bottom: 4px;
								&.active {
									color: red;
								}
							}
							p {
								height: 37px;    			   
			    			    font-size: 14px;
			    			    border-bottom: 2px solid #F2F2F2;
			    			    &.active {
			    			    	 border-bottom: 2px solid red;
			    			    }
							}
							
							
			
						}
					}
				}
			}
			.right-info {
			width: 75%;
			position: fixed;
			float: left;
			left: 23%;
			height: auto;

			li {
				margin: 8px 0;
				width: 33.33%;
				height: 95px;
				float: left;
				text-align: center;
				img {
					width: 93px;
					height: 50px;
				
					box-sizing: border-box;
				}

			}
		}
}
</style>