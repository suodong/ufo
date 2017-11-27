<template>
	<div id="navs">
		<div class="p">

	        <el-row class="tac">
  <el-col :span="8">
    <el-menu default-active="2" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose">
      <el-submenu index="1">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item-group>
          <template slot="title"><i class="el-icon-message"></i>分组一</template>
          <el-menu-item index="1-1">选项1</el-menu-item>
          <el-menu-item index="1-2">选项2</el-menu-item>
        </el-menu-item-group>
        <el-submenu index="1-4">
          <template slot="title">选项4</template>
          <el-menu-item index="1-4-1">选项1</el-menu-item>
        </el-submenu>
      </el-submenu>
   
    </el-menu>
  </el-col>
</el-row>
</div>

	</div>
</template>
<script>
	export default{
		name:'navs',
		components:{
		
		},

		data(){
			return{

			}
		},
	 methods: {
      handleOpen(key, keyPath) {
        console.log(key, keyPath);
      },
      handleClose(key, keyPath) {
        console.log(key, keyPath);
      }
    },
	
		watch:{

		},
		mounted(){

		}
	}
</script>
<style>
	#navs{
		width: 1000px;height: 500px;
	/*	background: red;*/
		position: absolute;
		top:1500px;left:200px;
	}
.el-menu-vertical-demo{
	width:246px;height: 400px;

}

</style>