<template>
  <div class="container">
    <header>
      <h1>
        <span class="title">{{ topic }}</span>
        <span class="author">Автор: {{ author }}</span>
      </h1>
      <header-menu />
    </header>
    <main>
      <main-content :sections="sections" />
    </main>
  </div>
</template>

<script>
import Menu from './Menu.vue'
import Content from './Content.vue'

export default {
  name: 'Header',
  props: { sections: Array },
  components: {
    'header-menu': Menu,
    'main-content': Content
  },
  data () {
    return {
      author: 'Кулинич Юрій',
      topic: 'Магістерська робота'
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
    padding-bottom: 100px;
  }
}
</style>
