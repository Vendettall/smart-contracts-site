<template>
  <nav>
    <li>Home</li>
  </nav>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      msg: 'Розумні контракти'
    }
  }
}
</script>

<style lang="scss" scoped>
  nav {
    display: flex;
    list-style: none;
    line-height: 20px;
    font-size: 16px;
    text-align: left;
    white-space: nowrap;
    color: rgba(0,0,0,.54);
    font-family: 'Lucida Grande','Lucida Sans Unicode','Lucida Sans', 'Geneva', 'Arial', sans-serif;
    letter-spacing: 0;
    font-weight: 400;
    font-style: normal;
    li {
      margin-left: 24px;
      transform: translateY(1.8px);
      letter-spacing: .05em;
      text-transform: uppercase;
      transition: color .3s ease;
      cursor: pointer;
      &:hover {
        color: rgba(0,0,0,.84);
      }
      &:first-child {
        margin-left: 0;
      }
      .active {
        color: rgba(0,0,0,.84);
      }
    }
  }
</style>
