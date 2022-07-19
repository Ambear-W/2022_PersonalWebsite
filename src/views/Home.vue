<template>
  <NavHeader />
  <main id="main">
    <div class="intro">
      <div class="content">
        <h1 class="moreMargin">Hi! I'm Amber Wells!</h1>
        <h2 class="moreMargin">I am a developer.</h2>
        <p class="top-distance">
          Welcome to my site and thank you for checking me out! 
          I'm thrilled to have you here and can't wait to meet you!
        </p>
        <div class="button-row">
          <router-link :to="{name: 'AboutMe'}">
            <ButtonLink class="button-item">About Me</ButtonLink>
          </router-link>
          <router-link :to="{name: 'Resume'}">
            <ButtonLink class="button-item">Resume</ButtonLink>
          </router-link>
          <router-link :to="{name: 'Contact Me'}">
            <ButtonLink class="button-item">Contact Me</ButtonLink>
          </router-link>
        </div>
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
      padding-right: 5%;
    }
    .content{
      width: 100%;
      max-width: 492px;
    }
    .moreMargin{
      margin-left: 12px
    }
    .top-distance{
      padding-top: 10%;
      margin-left: 12px;
    }

    .button-row{
      padding-top: 4%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;

      .button-item{
        margin: 12px auto;
      }
    }

}
</style>