<template>
  <layout :sections="sections" :images="images" />
</template>

<script>
import Layout from '@/components/Layout.vue'
import sections from '@/assets/texts/dapps.json'

import dappsPopularity from '@/assets/images/dapps-popularity.jpg'
import dappsCategories from '@/assets/images/dapps-categories.jpg'
import dappsPlatforms from '@/assets/images/dapps-platforms.jpg'
import frameworksStarsGit from '@/assets/images/frameworks-stars-git.jpg'
import frameworksDownloadsNPM from '@/assets/images/frameworks-downloads-npm.jpg'

export default {
  name: 'DApp',
  components: {
    'layout': Layout
  },
  data () {
    return {
      sections,
      images: {
        'dapps-popularity': dappsPopularity,
        'dapps-categories': dappsCategories,
        'dapps-platforms': dappsPlatforms,
        'frameworks-stars-git': frameworksStarsGit,
        'frameworks-downloads-npm': frameworksDownloadsNPM
      }
    }
  }
}
</script>
