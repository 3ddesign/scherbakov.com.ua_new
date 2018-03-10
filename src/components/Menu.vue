<template>
  <div class="menu-container" >
  <div id="topMenu" class="menu-wrapper"  ref="topMenu">
    <nav class="menu">
      <div class="container">
        <a class="my-name" href="http://scherbakov.com.ua/">Dmitry Scherbakov</a>
        <ul>
          <li><a href="#home" class="active" v-smooth-scroll="{ duration: 1500 }" ref="homeBtn">Home</a></li>
          <li class=""><a href="#about" v-smooth-scroll="{ duration: 1500 }" ref="aboutBtn">About me</a></li>
          <li class=""><a href="#experience" v-smooth-scroll="{ duration: 1500 }" ref="experienceBtn">Experience</a></li>
          <li><a href="#contact" v-smooth-scroll="{ duration: 1500 }" ref="contactBtn">Contact</a></li>
        </ul>
      </div>
    </nav>
  </div>
    <div class="scroll-up" ref="scrollBtn">
      <a href="#home" v-smooth-scroll="{ duration: 1500 }"><img src="../../src/assets/icons/up-arrow.svg" alt="up!"></a>
    </div>
</div>
</template>

<script>
export default {
  methods: {
    handleScroll (event) {
      if (window.scrollY < window.innerHeight) {
        this.$refs['homeBtn'].classList.add('active')
        this.$refs['scrollBtn'].style.opacity = '0'
      } else {
        this.$refs['homeBtn'].classList.remove('active')
        this.$refs['scrollBtn'].style.opacity = '1'
      }
      if (window.scrollY > window.innerHeight && window.scrollY < 1350) {
        this.$refs['aboutBtn'].classList.add('active')
      } else {
        this.$refs['aboutBtn'].classList.remove('active')
      }
      if (window.scrollY > 1350 && window.scrollY < 2000) {
        this.$refs['experienceBtn'].classList.add('active')
      } else {
        this.$refs['experienceBtn'].classList.remove('active')
      }
      if (window.scrollY > 2000) {
        this.$refs['contactBtn'].classList.add('active')
      } else {
        this.$refs['contactBtn'].classList.remove('active')
      }
      if (window.scrollY > window.innerHeight) {
        this.$refs['topMenu'].classList.add('show')
      } else {
        this.$refs['topMenu'].classList.remove('show')
      }
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="scss">
  .menu-wrapper {
    width: 100%;
    height: 51px;
    background-color: white;
    .menu {
      text-align: center;
      height: 51px;
      border-bottom: 1px solid #f5f5f5;
    }
  }

  .my-name {
    color: #222;
    text-decoration: none;
    font-weight: 600;
    font-size: 20px;
    font-family: Raleway, "Times New Roman", Times, sans-serif;
    text-transform: none;
  }

  .container {
    max-width: 1170px;
    display: flex;
    justify-content: space-around;
    align-items: center;
  }

  ul {
    li {
      display: inline-block;
      a {
        color: #222;
        font-size: 11px;
        letter-spacing: 1px;
        text-transform: uppercase;
        text-decoration: none;
        display: block;
        padding: 0 15px;
      }
    }
  }

  .menu-container {
    height: 51px;
  }

  .show {
    position: fixed;
    top: 0;
  }
  .active {
    color: #e7746f;
  }

  .scroll-up {
    position: fixed;
    z-index: 999;
    bottom: 2em;
    right: 2em;
    opacity: 0;
    transition: opacity .5s;
    a {
      background-color: rgba(135, 135, 135, .5);
      display: block;
      width: 40px;
      height: 40px;
      text-align: center;
      color: #fff;
      border-radius: 50%;
      img {
        margin-top: 9px;
        margin-left: 0;
        width: 20px;
        max-width: 100%;
        height: auto;
      }
      &:hover {
        background-color: rgba(135, 135, 135, .8);
      }
    }
  }

</style>
