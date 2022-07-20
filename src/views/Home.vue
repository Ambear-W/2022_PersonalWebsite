<template>
  <div id="left">
    <div class="intro">
      <div class="content">
        <div class="content-left">
          <h1 class="moreMargin">Hi! I'm Amber Wells!</h1>
          <h2 class="moreMargin">I am a developer.</h2>
          <p class="top-distance">
            Welcome to my site and thank you for checking me out! 
            I'm thrilled to have you here and can't wait to meet you!
          </p>
        </div>
        <img class="img-curve img-size" src="../assets/office-me.jpg" alt="">
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
  </div>
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

    .content-left{
      display: inline-block; 
      vertical-align:middle;
    }
    .img-size{
      position: absolute;
      width: 60%;
      height: auto;
      display: inline-block;
      vertical-align: middle;
      margin-left: 20%;

      @media(max-width: 950px){
        margin-left: 15%;

        @media(max-width: 925px){
          margin-left: 10%;

          @media(max-width: 900px){
            margin-left: 5%;

            @media(max-width: 875px){
              margin-left: 1%;

              @media(max-width: 835px){
                display: none;
              }
            }
          }
        }
      }
    }

    .button-row{
      padding-top: 4%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-around;

      .button-item{
        margin: 12px auto;
      }
    }

}
</style>