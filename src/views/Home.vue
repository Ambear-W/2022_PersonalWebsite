<template>
  <NavHeader />
  <main id="main">
    <div class="intro">
        <h1>Hi! I'm Amber Wells!</h1>
        <h2>I am a developer.</h2>
        <br />
        <br />
        <p class="block">Welcome to my site and thank you for checking me out! 
            <br />I'm thrilled to have you here and can't wait to meet you!
        </p>
        <div class="button-row">
            <GreenButton></GreenButton>
        </div>
    </div>
  </main>
</template>

<script>
import NavHeader from '../components/Header.vue'
import ButtonLink from '../components/ButtonLink.vue'
export default{
  name: "Home",
  components:{
    NavHeader,
    ButtonLink,
  },
}
</script>

<style lang="scss">
@import '../assets/_globalStyles.scss';

main{
    position: relative;
    .intro{
        padding-left: 5%;
        padding-top: 5%;
    }
    .block{
        width: 100%;
    }

}
</style>