<template>
  <header>
    <div>
      <NavHeader />
    </div>
  </header>

  <main id="main">

  </main>
</template>

<script>
import NavHeader from '../components/Header.vue'
export default{
  name: "Projects",
  components:{
    NavHeader,
  },
}
</script>

<style lang="scss">
@import '../assets/_globalStyles.scss';
</style>