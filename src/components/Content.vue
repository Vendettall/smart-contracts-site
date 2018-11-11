<template>
  <article>
    <section>
      <h3>UI Animations with Swift</h3>
      <div class="description">
        <p>I’ve been interviewing for iOS roles lately, and in most cases, what I’ve been asked to do is: work on a small iOS app that I have to return in a week so that they can review it and hopefully give me feedback. I like this process because you can really show off your skill set, and they can get a true understanding of your coding style and problem solving (depending on what they ask you to build).</p>
        <p>The last one I worked on was for an application that has developed a solid and heavily animated UI, so one of the requirements in the iOS take-home was to include animations. This was a good opportunity for me to dig more into animations, and I spent some time playing around in our Playground.</p>
        <p>Playgrounds are really cool! It’s a coding environment that allows a user to interact with Swift code, without requiring the user to create a project. That makes it a truly powerful tool to learn swift and for testing some code or prototyping views.</p>
      </div>
    </section>
  </article>
</template>

<script>
export default {
  name: 'Content',
  data () {
    return {
      msg: 'Розумні контракти'
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
