<template lang="html">
  <header>
    <router-link to="/login">login</router-link>
    <button @click="$store.dispatch('auth/logout')">logout</button>
  </header>
</template>

<script>
import NoSrr from 'vue-no-ssr'

export default {
  name: 'Home',
  components: { NoSrr },
  meta () {
    return {
      title: 'Home',
      description: 'This is the meta description for the home page'
    }
  }
}
</script>
