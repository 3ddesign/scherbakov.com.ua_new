<template>
  <div class="menu-wrapper">
    <nav class="menu">
      <div class="container">
        <a class="my-name" href="http://scherbakov.com.ua/">Dmitry Scherbakov</a>
        <ul class="nav navbar-nav navbar-right">
          <li class="active"><a href="#home">Home</a></li>
          <li class=""><a href="#aboutme">About me</a></li>
          <li class=""><a href="#experience">Experience</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<script>
</script>

<style scoped lang="scss">
  .menu-wrapper {
    width: 100%;
    display: block;
    .menu {
      margin: auto;
      padding: 0px 140px;
      max-width: 1170px;
      text-align: center;
      height: 51px;
      border-bottom: 1px solid #f5f5f5;
    }
  }

  .my-name {
    color: black;
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
        padding: 0px 15px;
      }
    }
  }

</style>
