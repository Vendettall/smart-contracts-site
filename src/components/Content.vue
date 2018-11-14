<template>
  <article>
    <section v-for="section in sections" :key="section.title">
      <h3>{{ section.title }}</h3>
      <div class="description">
        <p v-for="paragraph in section.description" :key="paragraph" >{{ paragraph }}</p>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Content',
  props: { sections: Array },
  data () {
    return {
      diploma: 'Інформаційна система керування ризиками на основі розумних контрактів'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
article {
  section {
    h3 {
      font-family: 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Geneva', 'Arial', sans-serif;
      margin-top: 56px;
      font-weight: 600;
      font-style: normal;
      font-size: 34px;
      margin-left: -2.13px;
      line-height: 1.15;
      letter-spacing: -.015em;
      &:first-child {
        margin-top: 0;
      }
    }
    .description p {
      margin-top: 29px;
      font-size: 18px;
      font-weight: 400;
      font-style: normal;
      line-height: 1.58;
      letter-spacing: -.004em;
      pre {
        background: rgba(0,0,0,.05);
        padding: 20px;
        white-space: pre-wrap;
        font-family: 'Menlo', 'Monaco', 'Courier New', 'Courier', monospace;
        font-size: 16px;
      }
      code {
        background: rgba(0,0,0,.05);
        padding: 3px 4px;
        margin: 0 2px;
        font-family: 'Menlo', 'Monaco', 'Courier New', 'Courier', monospace;
        font-size: 16px;
      }
      &:first-child {
        margin-top: 8px;
      }
    }
  }
}
</style>
