<template lang="html">
  <div id="app" class="App">
    <AuthCheck />
    <noscript>Your browser does not have JS enabled, you are still able to browse the website but you won't be able to access advanced features such as editing or loggin-in.</noscript>
    <AppHeader />
    <transition name="fade" mode="out-in">
      <router-view class="view"></router-view>
    </transition>
    <alert />
  </div>
</template>

<script>
import AppHeader from 'components/AppHeader'
import AuthCheck from 'components/AuthCheck'
import Alert from 'components/Alert'

export default {
  name: 'App',
  components: {
    AppHeader,
    AuthCheck,
    Alert
  }
}
</script>

<style lang="scss">
  @import "~styles/global";

  noscript {
    display: block;
    padding: 1rem;
    background-color: red;
    color: white;
    font-size: 1.5rem;
  }
</style>