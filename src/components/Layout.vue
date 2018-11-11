<template>
  <div class="container">
    <header>
      <h1>
        <span class="title">Smart Contracts</span>
        <span class="author">Author</span>
      </h1>
      <header-menu />
    </header>
    <main>
      <main-content />
    </main>
  </div>
</template>

<script>
import Menu from './Menu.vue'
import Content from './Content.vue'

export default {
  name: 'Header',
  components: {
    'header-menu': Menu,
    'main-content': Content
  },
  data () {
    return {
      msg: 'Розумні контракти'
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  header {
    max-width: 700px;
    width: 100%;
    padding: 0 20px;
    h1 {
      display: flex;
      justify-content: space-between;
      padding: 15px 0;
      font-family: 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Open Sans', 'Helvetica Neue', sans-serif;
      font-size: 22px;
      font-weight: 900;
      color: #000;
    }
  }
  main {
    max-width: 700px;
    padding: 0 20px;
    margin-top: 50px;
  }
}
</style>
