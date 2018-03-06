<template lang="html">
  <header class="AppHeader">
    <router-link to="/" class="AppHeader__link">
      <img class="AppHeader__logo" src="~images/logo.png" alt="Logo">
      <div class="AppHeader__name">
        <h3 class="AppHeader__title">Site name</h3>
      </div>
    </router-link>
    <NoSSR>
      <div class="SessionInfo">
        <p>Login Status</p>
        <template v-if="$auth">
          <a v-if="!$store.state.auth.authenticated">Not logged in</a>
          <a v-if="$store.state.auth.authenticated">You are logged in</a>
          <button @click="$store.dispatch('auth/login')" v-if="!$store.state.auth.authenticated">Login</button>
        </template>
      </div>
    </NoSSR>
  </header>
</template>

<script>
import NoSSR from 'vue-no-ssr'

export default {
  name: 'AppHeader',
  components: { NoSSR }
}
</script>

<style lang="scss">
  .AppHeader {
    padding: 1rem;
    font-size: 1.25rem;
    background-color: whitesmoke;
    display: flex;

    &__link {
      color: black;
      flex: 1;
    }

    &__logo {
      vertical-align: middle;
      width: 2.5rem;
      margin-right: 0.5rem;
    }

    &__name,
    &__subtitle {
      display: inline-block;
    }

    &__name {
      vertical-align: middle;
      margin-right: 0.5rem;
    }

    &__title {
      margin-right: 0.5rem;
    }
  }
</style>
