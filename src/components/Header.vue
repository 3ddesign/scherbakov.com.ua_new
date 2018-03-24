<template>
  <header id="home">
    <div class="home-overlay"></div>
    <div class="intro">
      <h2 class="start">Dmitry Scherbakov</h2>
      <h1  v-bind:class="{ isActive: isHovered }" v-on:mouseover="mouseOver">Frontend Developer</h1>
      <div class="resume"><a target="_blank" href="http://scherbakov.com.ua/Scherbakov_D.pdf">Download my CV</a>
      </div>
    </div>
    <div class="scroll-down">
    <span>
      <a href="#topMenu" v-smooth-scroll="{ duration: 1500, offset: 53 }">
        <img src="../assets/icons/down-arrow.svg" alt="arrow">
      </a>
    </span>
    </div>
  </header>
</template>

<script>
export default {
  data () {
    return {
      isHovered: false
    }
  },
  methods: {
    mouseOver: function () {
      this.isHovered = true
      setTimeout(() => {
        this.isHovered = false
      }, 1000)
    }
  }
}
</script>

<style scoped lang="scss">
  @import '../assets/scss/mixins';

  h1 {
    font: 700 40px/1.2 Raleway, sans-serif;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 800;
    margin-top: 5px;
    margin-bottom: 24px;
    color: darken(white, 10);
    opacity: .8;

    @include respond-to($p480) {
      letter-spacing: 1px;
      font-style: normal;
    }
  }

  .isActive {
    animation:text-animation 1s ease;
  }

  @keyframes text-animation {
    0%{
      transform: scaleX(1);
    }
    30%{
      transform: scaleX(1.2);
    }
    50%{
      transform: scaleX(0.9);
    }
    70%{
      transform: scaleX(1);
    }
    100%{
      transform: scaleX(1);
    }
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
    color: white;
    text-transform: inherit;
    @include respond-to($p480) {
      letter-spacing: 0.5px;
      font-style: normal;
    }
  }

  header {
    background: url('../assets/images/bg.jpg');
    background-attachment: fixed;
    background-position: 50% 50%;
    background-size: cover;
    padding: 0;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    @include respond-to($p480) {
      background-attachment: inherit;
    }
    .home-overlay {
      position: absolute;
      background-color: rgba(44, 62, 80, 0.3);
      height: 100vh;
      width: 100vw;
    }
  }

  .intro {
    text-align: center;
    position: absolute;
    padding: 0 15px;
  }

  .resume {
    a {
      color: white;
      text-decoration: none;
      font: 400 18px/1.2 Raleway, sans-serif;
      &:hover {
        color: dodgerblue;
        transition: all 0.3s ease;
      }
    }
  }

  .scroll-down {
    position: absolute;
    border-radius: 50%;
    cursor: pointer;
    z-index: 10;
    text-align: center;
    margin-top: 40vh;
  }

  .scroll-down span {
    position: relative;
    -webkit-animation-name: drop;
    -webkit-animation-duration: 1s;
    -webkit-animation-timing-function: linear;
    -webkit-animation-delay: 0s;
    -webkit-animation-iteration-count: infinite;
    -webkit-animation-play-state: running;
    animation-name: drop;
    animation-duration: 1s;
    animation-timing-function: linear;
    animation-delay: 0s;
    animation-iteration-count: infinite;
    animation-play-state: running;
    img {
      width: 50px;
    }
  }

  @-webkit-keyframes drop {
    0% {
      top: 0;
      opacity: 0;
    }

    30% {
      top: 10px;
      opacity: 1;
    }

    100% {
      top: 25px;
      opacity: 0;
    }
  }

  @keyframes drop {
    0% {
      top: 0;
      opacity: 0;
    }

    30% {
      top: 10px;
      opacity: 1;
    }

    100% {
      top: 25px;
      opacity: 0;
    }
  }

</style>
