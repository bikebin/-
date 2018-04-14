<template>
	<div class=" bottom-clear clearfix">
     
      <div class="nav-bottom ">   
          <ul >
          <li>
               <router-link   to="/home"><i class="fa fa-home"></i><span>首页</span></router-link>
          </li>
          <li>
               <router-link  to="/fenlei"><i class="fa fa-th-large"></i><span>分类</span></router-link>
          </li>
          <li>
               <router-link  to="/gouwu"><i class="fa fa-cart-plus"></i><span>购物</span></router-link>
          </li>
          <li>
                <router-link  to="/mine"><i class="fa fa-user-circle"></i><span>我的</span></router-link>

          </li>
        <!--    <li>
                <router-link  to="/vee"><i class="fa fa-user-circle"></i><span>登录</span></router-link>

          </li> -->
          </ul>
       </div>
     </div>
</template>

<script></script>

<style lang="less">
  .router-link-active {
    color: #FD3D53;
  }
.bottom-clear {
  height: 58px;
  
  .nav-bottom {
    position: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 58px;
    clear: both;
    border-top: 1px solid #F7F7F7;
    background-color: #fff;
    z-index: 20;
    li {
      display: inline-block;
      width: 24%;
      height: 100%;
      text-align: center;
      line-height: 58px;
      i {
        display: inline-block;
        font-size: 18px;
        height: 14px;
        line-height: 30px;
        width: 100%;
        float: left;

      }
      span {
        display: inline-block;
        width: 100%;
        height: 28px;
        line-height: 28px;
      }
    }
  }
}
</style>