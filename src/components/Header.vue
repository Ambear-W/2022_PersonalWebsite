<template>
  <header :class="{'scrolled-nav' : scrollPosition}">
    <a class="skip" href="#main">Skip to main content</a>
    <nav>
      <div class="center">
        <router-link v-if="!superSmall" :class="mobile ? 'branding-mobile' : 'branding'" :to="{name: 'Home'}">Amber Wells - Developer</router-link>
        <router-link v-if="superSmall" class="branding-mobile" :to="{name: 'Home'}">Amber W - Dev</router-link>
        <button title="Navigation Dropdown" aria-label="Navigation Dropdown" @click="toggleMobileNav" v-show="mobile" type="button" class="unstyled-button hamburger-lines" :class="{'icon-active' : mobileNav}">
          <span class="line line1"></span>
          <span class="line line2"></span>
          <span class="line line3"></span>
        </button>
      </div>

      <ul v-show="!mobile" class="navigation">
        <li><router-link class="link underLine-link" :to="{ name: 'AboutMe' }">About Me</router-link></li>
        <li><router-link class="link underLine-link" :to="{name: 'Qualifications'}">Qualifications</router-link></li>
        <li><router-link class="link underLine-link" :to="{name: 'Projects'}">Projects</router-link></li>
        <li><router-link class="link underLine-link" :to="{name: 'Contact Me'}">Contact Me</router-link></li>
        <li><router-link class="link underLine-link" :to="{name: 'Resume'}">Resume</router-link></li>
      </ul>
      
      <transition name="mobile-nav">
        <ul v-show="mobileNav" class="dropdown-nav">
          <li><router-link class="link underLine-link" :to="{name: 'AboutMe'}">About Me</router-link></li>
          <li><router-link class="link underLine-link" :to="{name: 'Qualifications'}">Qualifications</router-link></li>
          <li><router-link class="link underLine-link" :to="{name: 'Projects'}">Projects</router-link></li>
          <li><router-link class="link  underLine-link" :to="{name: 'Contact Me'}">Contact Me</router-link></li>
          <li><router-link class="link  underLine-link" :to="{name: 'Resume'}">Resume</router-link></li>
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
      superSmall: null,
    };
  },
  created() {
    window.addEventListener('resize', this.checkScreenSize);
    this.checkScreenSize;
  },
  methods: {
    toggleMobileNav(){
      this.mobileNav = !this.mobileNav;
    },
    checkScreenSize(){
      this.windowWidth = window.innerWidth;
      if (this.windowWidth <= 319){
        this.mobile = true;
        this.superSmall = true;
        return;  
      }
      if (this.windowWidth <= 842){
        this.mobile = true;
        this.superSmall = false;
        return;
      }
      this.mobile = false;
      this.mobileNav = false;
      this.superSmall = false;
      return;
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../assets/_globalStyles.scss';
  
  .center{
    display: flex;
    align-items: center;
  }

  header{
    position: sticky;
    top: 0;
    background-color: $green;
    z-index: 99;
    width: 100%;
    transition: .5s ease all;
    color: $white;
    overflow: visible;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    .skip{
      background: $lightGreen;
      position: absolute;
      transform: translateY(-2000%);
      text-decoration: none;
      
      &:focus{
        background: $lightGreen;
        position: relative;
        transform: translateY(0%);
        opacity: 1;
        color: black;
        text-decoration: none;
        font-weight: 400;
        font-size: 2rem;
      }
    }

    nav{
      position: relative;
      flex-direction: row;
      padding: 12px 0;
      transition: .5s ease all;

      @media(min-width: 963px){
        
      }

      .navigation{
        display: flex;
        align-items: center;
        flex: 1;
        justify-content: flex-end;
        margin: 12px;
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
        margin-left: 32px;
      }

      .branding{
        position: relative;
        left: 20px;
        margin: 12px;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 3rem;
        text-decoration: none;
      }
      .branding-mobile{
        position: relative;
        margin: 12px;
        font-style: bold;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1.5rem;
        text-decoration: none;
      }
      
    }

    .unstyled-button{
      border: none;
      border-radius: 0;
      background: none;
    }

    .hamburger-lines{
      height: 26px;
      width: 40px;
      position: absolute;
      top: 0;
      right: 0;
      margin: 12px;
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
    .icon-active{
      .line1{
        transform: rotate(45deg);
      }
      .line2{
        transform: scaleY(0);
      }
      .line3{
        transform: rotate(-45deg);
      }
    }

    .dropdown-nav{
      display: flex;
      flex-direction: column;
      position: fixed;
      width: 100%;
      background-color: $green;
      top: 0;
      right: 0;
      padding: 12px;

      li{
        margin: 12px;
        .link{
          color: white;
        }
      }      
    }
  }
</style>
