<template>
  <div id="bo">  
      <div>盒子</div>
  </div>
</template>
<script>
export default {
  name: 'b', 
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


<style lang="scss" scope>   
#bo{
  width:100px;
  height:100px;
  background:gray;
}
</style>
