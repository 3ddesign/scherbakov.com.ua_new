<template>
  <header id="header"  v-parallax="0.2">
    <div class="home-overlay"></div>
    <div class="intro">
      <h2 class="start">Dmitry Scherbakov</h2>
      <h1>Frontend Developer</h1>
      <div class="start"><a target="_blank" href="http://scherbakov.com.ua/Scherbakov_D.pdf">Download my resume</a>
      </div>
    </div>
    <!--<a href="#aboutme">-->
    <!--<div class="scroll-down">-->
    <!--<span>-->
    <!--<img src="img/down-arrow.svg" alt="arrow">-->
    <!--</span>-->
    <!--</div>-->
    <!--</a>-->
  </header>
</template>

<script>
</script>

<style scoped lang="scss">
  h1 {
    font: 700 40px/1.2 Raleway, sans-serif;
    text-transform: uppercase;
    letter-spacing: 5px;
    font-weight: 800;
    margin: 5px 0;
    color: darken(white, 10);
  }

  h2 {
    font-size: 24px;
    font-weight: 600;
    color: white;
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
    .home-overlay {
      position: absolute;
      background-color: rgba(44, 62, 80, 0.3);
      height: 100%;
      width: 100%;
    }
  }

  .intro {
    text-align: center;
    position: absolute;
    padding: 0 15px;
  }
</style>
