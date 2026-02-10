<template> 
  <HelloWorld id="hello-world" msg="Welcome Stranger!"/>
  <NavLinks></NavLinks>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavLinks from './components/Links.vue';

export default {
  name: 'App',
  components: {
    HelloWorld,
    NavLinks
  }
}


</script>

<style>
body {
  margin:0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #dfe4ea;
  background-color: #2e2e2e;
  height:100vh;
  padding:0%;
    margin: 0%;
}
#hello-world {
  padding-top:45%;
  
}
</style>
