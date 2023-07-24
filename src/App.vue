<template>
  <div id="app">
    <header >
      <router-link class="link" to="/">Calculator </router-link>
      <router-link class="link" to="/history">History</router-link>
    </header>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'app',
}
</script>

<style scoped>

header{
  margin-top: 50px;
  display: flex;
  justify-content: center;
}

a.router-link-active {
  background: rgba(255, 153, 0,0.4);
  border-radius: 30px;
}

.link {
  text-decoration: none;
  font-size: 30px;
  font-weight: bold;
  color: #000000;
  padding: 15px;
  margin-right: 15px;
}

</style>
