<template>
	<div>
		<div class='header'>
			<span class='headers'>微信</span>
			<span class='header_add'>+</span>
		</div>
		<ul v-for='(item,index) in $router.options.routes'>
			<li v-for='items in item.children'>{{items.list}}</li>
		</ul>			
		
		
		<div class='boot'>明天</div>
			
		
		<div>
			<ul class='footer'>
				<li v-for='(item,index) in $router.options.routes'>
					<router-link :to="{path:item.path+'/'}">{{item.text}}</router-link>
					
				</li>
			</ul>
		</div>
		
		<div class="view">
			<router-view></router-view>
		</div>
	</div>
</template>

<style lang="scss" scope>
	*{
		margin: 0;
		padding: 0;
		list-style: none;
		text-decoration: none;
	}
	.div{
		width: 100%;
		height: 500px;
		background: red;
	}
	.header{
		display: flex;
		width: 100%;
		height: 50px;
		background: #000;
		position: fixed;
		top: 0;
		color: #fff;
		font-size: 20px;
		.headers{
			flex:11;
			line-height: 50px;
			text-align: left;
			padding-left: 20px;
		};
		.header_add{
			flex:1;
			line-height: 50px;
		};
	}
	.boot{
		width: 100%;
		height: 500px;
		background: #ccc;
		
		li{
			width: 100%;
			height: 50px;
			margin-top: 1px;
			line-height: 50px;
			text-align: left;
			/*padding-left: 20px;*/
		}
	}
	.footer{
		display: flex;
		width: 100%;
		height: 50px;
		background: #fff;
		border-top: 1px solid #ccc;
		position: fixed;
		bottom: 0;
		li{
			flex:1;
			line-height: 50px;
		};
		a{
			color: #666;
		}
		/*a:visited{

		}*/
		a:hover{
			color: pink;
		}
		a:active{
			color: orange;
		}
	}
</style>

<script >
// import store from '../vuex/vuex'
// import { mapState,mapMutations,mapGetters } from 'vuex'
export default {
  name: 'message',
  components:{

  },
  data () {
   	return{
   		
   	}
  }
 
}
</script>