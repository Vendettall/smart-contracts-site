<template>
  <article>
    <section v-for="section in sections" :key="section.title">
      <h3>{{ section.title }}</h3>
      <div v-for="paragraph in section.description" :key="paragraph.text" class="paragraph">
        <p v-html="paragraph.text"></p>
        <img v-if="images && 'image' in paragraph" :src="images[paragraph.image]" />
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Content',
  props: {
    sections: Array,
    images: {
      type: Object,
      required: false
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
article {
  section {
    margin-top: 56px;
    h3 {
      font-family: 'Lucida Grande', 'Lucida Sans Unicode', 'Lucida Sans', 'Geneva', 'Arial', sans-serif;
      font-weight: 600;
      font-size: 34px;
      margin-left: -2.13px;
      line-height: 1.15;
      letter-spacing: -.015em;
    }
    .paragraph {
      margin-top: 29px;
      &:nth-of-type(1) {
        margin-top: 8px;
      }
      p {
        font-size: 18px;
        font-weight: 400;
        font-style: normal;
        line-height: 1.58;
        letter-spacing: -.004em;
        /deep/ a {
          color: black;
          transition: color .5s ease;
          &:hover {
            color: rgba(0,0,0,.5);
          }
        }
        /deep/ pre {
          background: rgba(0,0,0,.05);
          padding: 20px;
          white-space: pre-wrap;
          font-family: 'Menlo', 'Monaco', 'Courier New', 'Courier', monospace;
          font-size: 16px;
        }
        /deep/ code {
          background: rgba(0,0,0,.05);
          padding: 3px 4px;
          margin: 0 2px;
          font-family: 'Menlo', 'Monaco', 'Courier New', 'Courier', monospace;
          font-size: 16px;
        }
      }
      img {
        display: block;
        margin: 43px auto 38px;
        max-width: 660px;
      }
    }
    &:first-child {
      margin-top: 0;
      h3 {
        font-size: 42px;
      }
      .paragraph:nth-of-type(1) {
        margin-top: 20px;
      }
    }
  }
}
</style>
