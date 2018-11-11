<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
#app {
  width: 100%;
  overflow-x: hidden;
  font-family: 'Georgia', 'Cambria', 'Times New Roman', 'Times', serif;
  font-size: 20px;
  line-height: 1.4;
  color: rgba(0,0,0,.84);
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
