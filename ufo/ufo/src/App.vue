<template>
  <div id="app" v-cloak>
    <router-view></router-view>
  </div>
</template>

<script>
import Vue from 'vue';
import router from './router';
import Element from 'element-ui';
import 'element-ui/lib/theme-default/index.css';

Vue.use(Element);
export default {
  name: 'app'
}
</script>

<style>
[v-cloak]{display: none;}
*{margin:0px;padding:0px;text-decoration:none;list-style: none;}
body{
  font: 12px/150% Arial,Verdana,"\5b8b\4f53";
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
