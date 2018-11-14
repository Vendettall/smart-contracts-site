<template>
  <layout :sections="sections" />
</template>

<script>
import Layout from '@/components/Layout.vue'
import sections from '@/assets/home.json'

export default {
  name: 'Header',
  components: {
    'layout': Layout
  },
  data () {
    return {
      sections
    }
  }
}
</script>
