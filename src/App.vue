<template>
  <div class="container">
    <HelloWorld id="hello-world" msg="Welcome Stranger!" />
    <NavLinks></NavLinks>
  </div>
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
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #4a90e2;
  background-color: #2e2e2e;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>
