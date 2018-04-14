<template>

  <div class="test " >
  	<div class="topname" v-for="top in zi.data">
  		<div>
  			<ul class="topSort">
  				<li  class="fl "><p><i class="circle"></i>{{top.name}}</p> <a href="">></a> </li>
  			
  			</ul>
  		</div>
	 	<ul class="bottom-sort" >
	 		<li ><img v-if="zi.data.id===0" :src="top.pic" alt=""><p>{{top.item[0]}}</p><p>{{top.item[1]}}</p><p>{{top.item[2]}}</p><p>{{top.item[3]}}</p></li>
	 	</ul>
  	</div>

	
  </div>

</template>
 
<script>
	export default {
		data() {
			return{
				
			}
		},
		props: {
			zi: {
			
			}
		},
		methods: {

		}
	}
</script>
 
<style lang="less">
	.test {
		.topname {
			width: 100%;
			height: 84px;
			.topSort {
				height: 33px;
				li {
					padding: 0 12px;
					width: 100%;
					height: 33px;
					line-height:33px;
					background-color: #FCFCFC;
					margin:0;
					p {
						text-align: left;
						width: 80%;
						
						float: left;
						.circle {
							display: inline-block;
							width: 8px;
							height: 8px;
							line-height: 8px;
							border-radius: 50%;
							margin-right: 4px;
							background-color: blue;
							vertical-align: middle;
						}
					}
				
					
				}
				
			}
			.bottom-sort {
				width: 100%;
				height: 50px;
				li {
					display: inline-block;
					width: 100%;
					height: 50px;
					margin: 0;
					p {
						display: inline-block;
						width: 33.33%;
						height: 25px;
   						line-height: 25px;
					}
				}

			}
		}
	}
</style>