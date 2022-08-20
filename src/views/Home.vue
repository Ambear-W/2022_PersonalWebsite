<template>
  <div class="intro">
    <div class="content">
      <div class="content-left">
        <h1>Hello, I'm Amber Wells.</h1>
        <h2>I am a developer.</h2>
        <p class="top-distance">
          Welcome to my site and thank you for checking me out! 
          <br/>
          I'm thrilled to have you here and can't wait to meet you!
        </p>
        <div class="button-row">
          <ButtonLink class="button-item" @click="$router.push({name: 'AboutMe'})">About Me</ButtonLink>
          <ButtonLink class="button-item" @click="$router.push({name: 'Resume'})">Resume</ButtonLink>
        </div>
      </div>
      <img class="img-curve img-size" src="../assets/office-me.jpg" alt="A picture of me with black short hair and square glasses sitting in my office chair">
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

<style lang="scss" scoped>
@import '../assets/_globalStyles.scss';

main{
    position: relative;
    .intro{
      padding-left: 5%;
      padding-top: 5%;
      padding-right: 5%;
    }
    .content{
      display: flex;
      justify-content: space-around;
      height: 400px;
    }
    .top-distance{
      padding-top: 10%;
    }

    .content-left{
      display: inline-block; 
      vertical-align:middle;
      max-width: 550px;
    }
    .img-size{
      width: auto;
      height: auto;

      @media(max-width: 660px){
        display: none;
      }
    }

    .button-row{
      padding-top: 4%;
      display: flex;
      flex-wrap: wrap;
      padding-top: 10%;
      margin-left: -2%;

      > .button-item{
        margin: 2%;
      }
    }

}
</style>