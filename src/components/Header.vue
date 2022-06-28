<script setup>

</script>

<template>
  <header>
    <nav>
      <div class="nav-menu">
        <div>
          <a class="skip" href="#main">Skip to main content</a>
        </div>
        <div>
          <a class="branding" href="">Amber Wells - Developer</a>
        </div>

        <div class="navigation">
          <ul>
            <li>
              <a class="underLine-link" href="">About Me</a>
            </li>
            <li>
              <a class="underLine-link" href="">Qualifications</a>
            </li>
            <li>
              <a class="underLine-link" herf="">Projects</a>
            </li>
            <li>
              <a class="underLine-link" href="">Contact me</a>
            </li>
            <li>
              <a class="underLine-link" href="">Resume</a>
            </li>
          </ul>
        </div>
        
      </div>
    </nav>
  </header>
</template>

<style lang="scss">
  @import '../assets/_globalStyles.scss';
  
  .nav-menu {
    background-color: $green;
    position: absolute;
    width: 100%;
    height: 150px;
    left: 0px;
    top: 0px;
    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));

    .skip {
      background: $lightGreen;
      position: absolute;
      transform: translateY(-100%);
      transform: 0.3s;
      text-decoration: none;
    }
    a:focus{
        transform: translateY(0%);
        text-decoration: none;
    }

    .branding {
      left: 2%;
      right: 50%;
      top: 25%;
      bottom: 50%;
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 3em;
      text-decoration: none;
      color: $white;
    }

    .navigation {
      position: absolute;
      right: 0;
      bottom: 0;

      li{
        display: inline;
        list-style: none;
      }

      a {
        position: relative;
        margin: 1em;
        font-family: 'Abel', sans-serif;
        font-weight: 400;
        font-size: 2em;
        text-align: center;
        text-decoration: none;
        color: $white;

      }      
    }
  }
</style>
