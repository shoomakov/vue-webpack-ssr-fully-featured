<template>
  <transition name="slide-fade">
    <div class="alert" :data-type="type" v-if="dismissCountDown" v-html="message"></div>
  </transition>
</template>

<script src="./Alert.js"></script>
<style lang="scss" scoped>

</style>
