<script>
export default {
  name: 'AuthCheck',

  beforeMount () {
    this.$store.dispatch('auth/check')
  },

  render (h) {
    return h(null)
  }
}
</script>
