<script setup>

</script>

<template>
  <header>
    <nav>
      <div class="topNav">
        <div>
          <a class="skip">Skip to main content</a>
        </div>
        <div>
          <a class="branding" href="">Amber Wells - Developer</a>
        </div>
        <div class="navigation">
          <a class="nav-link" href="">About Me</a>
          <a class="nav-link" href="">Qualifications</a>
          <a class="nav-link" href="">Projects</a>
          <a class="nav-link" href="">Contact me</a>
          <a class="nav-link" href="">Resume</a>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
  @import '../assets/_globalStyles.scss';
  
  .topNav {
    background-color: $green;
    position: absolute;
    width: 100%;
    height: 153px;
    left: 0px;
    top: 0px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    .skip {

    }

    .branding {
      position: absolute;
      left: 1.74%;
      right: 63.54%;
      top: 17.73%;
      bottom: 50.66%;
      font-family: 'Abel';
      font-style: normal;
      font-weight: 400;
      font-size: 48px;
      line-height: 61px;
      text-decoration: none;
      color: #FFFFFF;
    }

    .navigation {
      position: absolute;
      right: 0;
      bottom: 0;
      a {
        position: relative;
        margin: 1em;
        font-family: 'Abel';
        font-style: normal;
        font-weight: 400;
        font-size: 32px;
        line-height: 41px;
        text-align: center;
        text-decoration: none;
        color: #FFFFFF;
      }
    }
  }
</style>
