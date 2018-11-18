<template>
  <layout :sections="sections" :images="images" />
</template>

<script>
import Layout from '@/components/Layout.vue'
import sections from '@/assets/texts/dapp.json'

import ganacheClient from '@/assets/images/ganache-client.jpg'
import metaMask from '@/assets/images/meta-mask.jpg'
import metaMaskSeed from '@/assets/images/meta-mask-seed.jpg'
import metaMaskNetwork from '@/assets/images/meta-mask-network.jpg'
import dappRegister from '@/assets/images/dapp-register.jpg'
import profile from '@/assets/images/profile.jpg'
import profilePolicy from '@/assets/images/profile-policy.jpg'
import profileWithdraw from '@/assets/images/profile-withdraw.jpg'

export default {
  name: 'DApp',
  components: {
    'layout': Layout
  },
  data () {
    return {
      sections,
      images: {
        'ganache-client': ganacheClient,
        'meta-mask': metaMask,
        'meta-mask-seed': metaMaskSeed,
        'meta-mask-network': metaMaskNetwork,
        'dapp-register': dappRegister,
        'profile': profile,
        'profile-policy': profilePolicy,
        'profile-withdraw': profileWithdraw
      }
    }
  }
}
</script>
