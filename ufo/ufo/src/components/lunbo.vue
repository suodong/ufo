<template>
  <div class="y">

<!-- <swiper :options="swiperOption" ref="mySwiper">

 <swiper-slide><img src="../assets/2.jpg"></swiper-slide>
 <swiper-slide><img src="../assets/3.jpg"></swiper-slide>
 <swiper-slide><img src="../assets/7.jpg"></swiper-slide>
 <swiper-slide><img src="../assets/5.jpg"></swiper-slide>
 <swiper-slide><img src="../assets/6.jpg"></swiper-slide>
 <swiper-slide><img src="../assets/7.jpg"></swiper-slide>


 <div class="swiper-pagination"  slot="pagination"></div>
 <div class="swiper-button-prev" slot="button-prev"></div>
 <div class="swiper-button-next" slot="button-next"></div>
 <div class="swiper-scrollbar"   slot="scrollbar"></div>

</swiper> -->


<div class="y1">
    <ul class="y2">
    <li class="y3"><a href="">手机 电话卡</a>
   <div class="v">
     <img src="../assets/11.jpg">
   </div>  
    </li>
    <li class="y3"><a href="">笔记本</a>
       <div class="v">
     <img src="../assets/12.jpg">
   </div>  
 </li>
    <li class="y3"><a href="">电视 盒子</a>
           <div class="v">
     <img src="../assets/13.jpg">
   </div>  
    </li>
    <li class="y3"><a href="">路由器 智能硬件</a>
        <div class="v">
     <img src="../assets/12.jpg">
   </div>  
    </li></li>
    <li class="y3"><a href="">移动电源 电池 插线板</a>
         <div class="v">
     <img src="../assets/11.jpg">
   </div> 
    </li></li>
    <li class="y3"><a href="">耳机 音响</a>
   <div class="v">
     <img src="../assets/11.jpg">
   </div> 
    </li></li>
    <li class="y3"><a href="">保护套 贴膜</a>
         <div class="v">
     <img src="../assets/11.jpg">
   </div> 

    </li></li>
    <li class="y3"><a href="">线材 支架 储存卡</a>
         <div class="v">
     <img src="../assets/11.jpg">
   </div> 

    </li></li>
    <li class="y3"><a href="">箱包 服饰 鞋 眼镜</a>
         <div class="v">
     <img src="../assets/11.jpg">
   </div> 

    </li></li>
    <li class="y3"><a href="">米兔 生活周边</a>
         <div class="v">
     <img src="../assets/11.jpg">
   </div> 

    </li></li>
 
  </ul>
 
</div>

</div> 

</template>
<script>
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  name: 'lunbo',
 data() {
   return {
     swiperOption: {
       notNextTick: true,
       autoplay: 3000,
       effect:"coverflow",
       grabCursor : true,
       setWrapperSize :true,
       pagination : '.swiper-pagination',
       paginationClickable :true,
       prevButton:'.swiper-button-prev',
       nextButton:'.swiper-button-next',
       mousewheelControl : true,
       observeParents:true,

     }
   }
 },
 components: {
 swiper,
 swiperSlide
},

 computed: {
   swiper() {
     return this.$refs.mySwiper.swiper
   }
 },
 mounted() {

 }
}
</script>
<style lang="scss" scope>
  .swiper-container{
    width:1226px;height:460px;
    margin:0 auto;
    overflow: hidden; 
  }
  .swiper-wrapper{
   width:7600px;height:460px;

  }
  .swiper-slide{
    width:1226px;height:460px;
    float: left; 
  }
 
  .y{
    width:1226px;height: 460px;
    margin:0 auto;
    position: relative;
  }
  .y1{
    width:234px;height:460px;
    position: absolute;
    top:0px;
  }
  .y2{
    width:234px;height:420px;
    border: 0;
    padding: 20px 0;
    color: #fff;
    background: #333;
    background: rgba(0,0,0,0.6);
  }
  .y3{
    width:234px;height:42px;
  }
  .y3:hover{
      background: #ff6700;
  }
  .y3 a{
    width:204px;height:42px;
    position: relative;
    display: block;
    padding-left: 30px;
    line-height: 42px;
    color: #fff;
    font-size: 14px;
  }
  .v{
    width:540px;height:460px;
    position: absolute;
    top:0;left:234px;  
    display: none;
  }

 li:hover{
      .v{
     display: block;
  }
}

</style>  