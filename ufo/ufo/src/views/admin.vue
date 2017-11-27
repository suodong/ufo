<template>
  <div>

     <!--  <headers></headers> -->
      <lunbo></lunbo>
<!--       <jiao></jiao> -->
     
  </div>
</template>
<script>
// import headers from '../components/headers'
import lunbo from '../components/lunbo'

// import jiao from '../components/jiao'
export default {
  name: 'admin',
  components:{
   lunbo

 
    
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

</style>
