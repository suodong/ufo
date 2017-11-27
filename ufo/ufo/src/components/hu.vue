<template>
  <div id="boxx">
     <div id="box1">
       <div class="box2"></div>
       <div class="box3">
         <p class="box4">
           <a href="">小米商城</a>
           <span>|</span>
               <a href="">MIUI</a>
           <span>|</span>
               <a href="">米聊</a>
           <span>|</span>
               <a href="">多看书城</a>
           <span>|</span>
               <a href="">小米路由器</a>
           <span>|</span>
               <a href="">视频电话</a>
           <span>|</span>
               <a href="">小米天猫店</a>
           <span>|</span>
               <a href="">小米淘宝直营店</a>
           <span>|</span>
               <a href="">小米网盟</a>
           <span>|</span>
                 <a href="">小米移动</a>
           <span>|</span>
                 <a href="">隐私政策</a>
           <span>|</span>
                 <a href="">SelectRegion</a>
       

         </p>
         <p class="box5">@
           <a href="">mi.com</a>
           京ICP证110507号
           <a href=""> 京ICP备10046444号</a>
           <a href=""> 京公网安备11010802020134号</a>
           <a href="">京网文[2014]0059-0009号 </a>
           <br>违法和不良信息举报电话：185-0130-1238，本网站所列数据，除特殊说明，所有数据均出自我司实验室测试
         </p>
       </div>
       <div class="box6">
         <img src="../assets/7.png">
         <img src="../assets/8.png">
         <img src="../assets/9.png">
          <img src="../assets/10.png">
       </div>
     </div>
     <div class="box7"></div>
  </div>
</template>
<script>
export default {
  name: 'jiao',
  components:{

  },
  data () {
    return {
      currentPath:'', //当前要走的路径
      auths: [] //所有路由的来去监听数组
    }
  },
  methods:{
   
  },
  watch:{
    $route(to,from){
      this.currentPath = to.path;  //当前路由的监听
    }
  },
  mounted(){

  }
}
</script>


<style>   
#boxx{
  width:1349px;
  height:106px;
  position: absolute;
  top:1400px;
  padding: 30px 0;
  font-size: 12px;
  background: #fafafa;
}
#box1{
  width:1226px;height:57px;
  margin-right: auto;
  margin-left: auto;
}
.box2{
    width:57px;height:57px;
  background: url(../assets/1.png) no-repeat 50% 50%;
  float: left;
 margin-right: 10px;
 
}
.box3{
  width:780px;height:54px;
  float: left;
    color: #b0b0b0;
}
.box4{
  width:780px;height: 18px;
  line-height: 18px;

}
.box4 a{
  color: #757575;
}
.box4 span{
  margin: 0 .25em;
  font-size: 12px;
}
.box5{
  width: 749px;height: 36px;
  line-height: 18px;
  color: #b0b0b0;
}
.box5 a{
   color: #b0b0b0;
}
.box6{
  width: 375px;height: 28px;
  float: right;
  margin: 4px 0 0;
}
.box6 img{
  width: 83px;height: 28px;
}
.box7{
  width:267px;height:19px;
  margin: 30px auto 0;
  background: url(../assets/11.png) no-repeat center 0;
}
</style>
