<template>
	<transition  enter-active-class="bounceInRight"  leave-active-class="bounceOutLeft">
	  <div class="shop animated">
	  	<mt-header title="购物车">
  			<router-link to="/home" slot="left">
 		   		<mt-button icon="back"></mt-button>
 		 	</router-link>
  				<mt-button icon="more" slot="right"></mt-button>
		</mt-header>
		<div class="shop-info">
			<i class="fa fa-cart-plus"></i>
			<h6>您的购物车还是空的</h6>
			<p>去挑一些中意的商品吧</p>
			<a href="">随便逛逛</a>
		</div>

	  </div>
	  
	</transition>
</template>

<script type="text/ecmascript-6">

export default {  
  name: 'page-navbar', 
 
  data() {  
    return {  
      selected: '1'  
    };  
  }  
};  
</script>

<style lang="less">
	.shop {
		.mint-header {
			background-color:  #FD3D53;
			height: 50px;
		}
		.shop-info {
			width: 100%;
			height: 198px;
			margin-top: 200px;
			text-align: center;
			i {
				display: inline-block;
				width: 68px;
				height: 68px;
				background-color: #DDDDDD;
				border-radius: 50%;
				font-size: 38px;
   				line-height: 64px;
				color: white;
				margin-bottom: 20px;
			}
			h6 {
				font-weight: 700;
				font-size: 16px;
				height: 16px;
			}
			p {
				margin: 12px 0;
				font-size: 12px;
				color: #B8B8B8;
			}
			a {
				border-radius: 12px;
				border: 1px solid #E2E2E2;
				background-color: #fff;
				font-size: 14px;
				padding: 0 3px
			}

		}
	}
</style>