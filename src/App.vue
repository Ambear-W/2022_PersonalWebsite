<template>
  <NavHeader />
  <main id="main">
    <router-view />
  </main>
</template>

<script>
import NavHeader from './components/Header.vue'
export default{
  name: "App",
  components:{
    NavHeader,
  },
}
</script>

<style lang="scss">
@import './assets/_globalStyles.scss';
</style>
