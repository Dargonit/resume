<template>
  <div id="app" >
    <nav class="navbar">
      <div class="nav-container">
        <router-link to="/" class="nav-link">Home</router-link>
        <router-link to="/about" class="nav-link">About Me</router-link>
      </div>
    </nav>
    
    <main class="main-content hide-scrollbar">
      <router-view></router-view>
    </main>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
  font-family: Avenir, Helvetica, Arial, sans-serif;
}

#app {
  background-color: #2e2e2e;
  color: #4a90e2;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  overflow-y: auto;
}
.hide-scrollbar {
  /* WebKit browsers */
  -ms-overflow-style: none; /* IE and Edge */
  scrollbar-width: none; /* Firefox */
  /* WebKit browsers */
  &::-webkit-scrollbar {
    display: none;
  }
}

.navbar {
  background-color: #2e2e2e;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 100;
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.nav-link {
  color: #4a90e2;
  text-decoration: none;
  font-size: 1.2rem;
  padding: 0.5rem 1rem;
  border-radius: 4px;
  transition: all 0.3s ease;
}

.nav-link:hover {
  background-color: rgba(74, 144, 226, 0.1);
  color: #ffffff;
}

.nav-link.router-link-active {
  background-color: #4a90e2;
  color: #ffffff;
}

.main-content {
  flex: 1;
  width: 100%;
  overflow-y: auto;
}
</style>
