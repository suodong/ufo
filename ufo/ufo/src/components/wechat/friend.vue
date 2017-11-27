<template>
  <div>
      <div class='froend_boot'>
    哈哈哈
      </div>
      <div class="view">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>
// import store from '../vuex/vuex'
export default {
  name: 'friend',
  components:{
   
  },
  data () {
   return{
   
   }
  },
  methods:{
   
   },
  watch:{
    
  },
  mounted(){

  }
}
</script>


<style lang="scss" scope>   
  .froend_boot{
    width: 100%;
    height: 500px;
    background: red;
  }

</style>