<template>
  <header :class="{'scrolled-nav' : scrollPosition}">
    <nav>
      <a class="skip" href="#main">Skip to main content</a>
      <div>
        <router-link class="branding" :to="{name: 'Home'}">Amber Wells - Developer</router-link>
      </div>
      
      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link underLine-link" :to="{name: 'About Me'}">About Me</router-link></li>
        <li><router-link class="link underLine-link" :to="{name: 'Qualifications'}">Qualifications</router-link></li>
        <li><router-link class="link underLine-link" :to="{name: 'Projects'}">Projects</router-link></li>
        <li><router-link class="link underLine-link" :to="{name: 'Contact Me'}">Contact Me</router-link></li>
        <li><router-link class="link underLine-link" :to="{name: 'Resume'}">Resume</router-link></li>
      </ul>
      
      <div class="icon">
        <button @click="toggleMobileNav" v-show="mobile" type="button" class="unstyled-button hamburger-lines" :class="{'icon-active' : mobileNav}">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </button>
      </div>
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><router-link class="underLine-link" :to="{name: 'About Me'}">About Me</router-link></li>
          <li><router-link class="underLine-link" :to="{name: 'Qualifications'}">Qualifications</router-link></li>
          <li><router-link class="underLine-link" :to="{name: 'Projects'}">Projects</router-link></li>
          <li><router-link class="underLine-link" :to="{name: 'Contact Me'}">Contact Me</router-link></li>
          <li><router-link class="underLine-link" :to="{name: 'Resume'}">Resume</router-link></li>
        </ul>
      </transition>
    </nav>
  </header>
</template>

<script>
export default{
  name: "navigation",
  data(){
    return{
      scrollPosition: null,
      mobile: null,
      mobileNav: null,
      windowWidth: null,
    };
  },
}
</script>

<style lang="scss" scoped>
  @import '../assets/_globalStyles.scss';
  
  header{
    position: fixed;
    background-color: $green;
    z-index: 99;
    width: 100%;
    height: 9.375rem; //150px
    transition: .5s ease all;
    color: $white;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    .skip{
      background: $lightGreen;
      position: absolute;
      left: -10000px;
      top: auto;
      width: 1px;
      height: 1px;
      overflow: hidden;
      text-decoration: none;

      &:focus{
        height: 50px;
        width: 100px;
        position: static;
        transform: translateY(0%);
        color: black;
        text-decoration: none;
      }
    }

    nav{
      display: flex;
      flex-direction: row;
      padding: 12px 0;
      transition: .5s ease all;
      width: 90%;
      margin: 0 auto;

      @media(min-width: 1140px){
        max-width: 1140px;
      }
      
      ul,
      .link{
        font-family: 'Abel', sans-serif;
        font-weight: 400;
        font-size: 2rem;
        text-decoration: none;
        list-style: none;
      }

      li{
        padding: 16px;
        margin-left: 16px;
      }

      .branding{
        left: 5%;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 3rem;
        text-decoration: none;
        display: flex;
        align-items: center;
      }
    }

    .unstyled-button{
      border: none;
      border-radius: 0;
      background: none;
    }

    .hamburger-lines{
      display: block;
      height: 26px;
      width: 40px;
      position: absolute;
      top: 17px;
      left: 20px;
      z-index: 2;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .line{
        display: block;
        height: 4px;
        width: 100%;
        border-radius: 10px;
        background: $white;
      }

      .line1{
        transform-origin: 0% 0%;
        transition: transform 0.4s ease-in-out;
      }
      .line2{
        transition: transform 0.2s ease-in-out;
      }
      .line3{
        transform-origin: 0% 100%;
        transition: transform 0.4s ease-in-out;
      }

    }
  }
  
  // .nav-menu {
  //   background-color: $green;
  //   position: absolute;
  //   width: 100%;
  //   height: 150px;
  //   left: 0px;
  //   top: 0px;
  //   filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

  //   .skip {
  //     background: $lightGreen;
  //     position: absolute;
  //     transform: translateY(-100%);
  //     transform: 0.3s;
  //     text-decoration: none;
  //   }
  //   a:focus{
  //       transform: translateY(0%);
  //       text-decoration: none;
  //   }

  //   .branding {
  //     left: 2%;
  //     right: 50%;
  //     top: 25%;
  //     bottom: 50%;
  //     font-family: 'Roboto', sans-serif;
  //     font-weight: 400;
  //     font-size: 3em;
  //     text-decoration: none;
  //     color: $white;
  //   }

  //   .navigation {
  //     position: absolute;
  //     right: 0;
  //     bottom: 0;

  //     li{
  //       display: inline;
  //       list-style: none;
  //       position: relative;
  //       margin: 1em;
  //       font-family: 'Abel', sans-serif;
  //       font-weight: 400;
  //       font-size: 2em;
  //       text-align: center;
  //       text-decoration: none;
  //       color: $white;
  //     }     
  //   }
  // }
</style>
