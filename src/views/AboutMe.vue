<template>
  <div class="spacing">
    <div class="about">
      <img class="img-curve img-size" src="../assets/colorful-me.png" alt="A picture of me with short black hair with color red, purple, and blue lighting"/>
      <div class="content-right">
        <h1>About Me!</h1>
        <p class="p-spacing">
          Hello there!
          <br />
          <br />
          My name is Amber Wells and in December 2021 I graduated from Georgia State Univeristy with a BS in Computer Science as a (whatever i am).  In other words I graduated with a G.P.A over ___.
          <br />
          <br />
          Since college, I have explore different paths career paths within Computer Science but I have a special interest in how to make tech more accessibile for everyone!  Recently, I done a lot of work on Web Accessibility but I want to branch out iand learn how to make other techonoglies more accessible!  I have also started to explore more in web development, in fact, this site I designed and coded myself!  I also want to learn more about app development and software development as well!
          <br />
          <br />
          I enjoy to learn and always like to keep busy!  I always had a list of things that I want to (and need to) do!
        </p>
      </div>
    </div>
    <div class="fun-facts">
      <div>
        <h1>Fun Facts about Amber~!</h1>
        <ul class="ul-spacing">
          <li>I am very creative and enjoy dabbling around in the arts</li>
          <li>I am the proud parent of a Mini-Goldendoodle named Arlo</li>
          <li>I lead by example that anyone can be a part of computer science AND thrive in it</li>
          <li>My favoriate color is green!</li>
          <li>I love playing video games and roleplay tabletop games - aka I’m a huge nerd!</li>
          <li>I collect dice!</li>
        </ul>
      </div>
      <img class="img-curve img-size-arlo" src="../assets/arlo_blep.jpg" alt="A wavy hair dog sitting on the bed with his tongue sticking out"/>
    </div>
  </div>
</template>

<script>
import NavHeader from '../components/Header.vue'
export default{
  name: "AboutMe",
  components:{
    NavHeader,
  },
}
</script>

<style lang="scss" scoped>
@import '../assets/_globalStyles.scss';
h1{
  color: $green;
}
.spacing{
  padding-left: 5%;
  padding-top: 5%;
  padding-right: 5%;
}
.p-spacing{
  width: 90%;
}
.about{
  display: flex;
  align-items: flex-start;
  .img-size{
    width: 20%;
    height: auto;
    vertical-align: middle;
  }
  .content-right{
    padding-left: 5%;
  }
}

.fun-facts{
  padding-top: 2%;
  display: flex;
  align-items: center;

  .ul-spacing{
    padding-top: 2%;
    padding-bottom: 5%;
    padding-right: 5%;
  }
  .img-size-arlo{
    width: 20%;
    height: auto;

  }
}
</style>