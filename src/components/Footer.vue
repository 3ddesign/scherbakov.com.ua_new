<template>
  <footer>
    <ul class="social-links">
      <li>
        <a target="_blank" href="https://www.facebook.com/dmitry.scherbakov.585">
          <i class="fa fa-facebook" aria-hidden="true"></i></a></li>
      <li>
        <a target="_blank" href="https://twitter.com/scherbakov_di">
          <i class="fa fa-twitter" aria-hidden="true"></i></a></li>
      <li>
        <a target="_blank" href="https://www.linkedin.com/in/dmitry-scherbakov">
          <i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
      <li>
        <a target="_blank" href="https://github.com/3ddesign">
          <i class="fa fa-github" aria-hidden="true"></i></a></li>
    </ul>
    <p class="copyright">
      © 2022 Dmitry Scherbakov
    </p>
  </footer>
</template>

<script>
</script>

<style scoped lang="scss">
  footer {
    margin: auto;
    text-align: center;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-color: #222;
  }

  .copyright {
    color: white;
    margin-top: 5px;
    padding-bottom: 25px;
  }

  .social-links {
    margin-top: 36px;
    list-style: none;
    padding: 0;

  }

  .social-links li {
    display: inline-block;
    margin: 5px;
  }

  .social-links a {
    width: 36px;
    height: 36px;
    display: block;
    line-height: 35px;
    text-align: center;
    border: 1px solid rgba(255, 255, 255, .1);
    -webkit-border-radius: 3px;
    -moz-border-radius: 3px;
    border-radius: 3px;
    font-size: 14px;
    color: rgba(255, 255, 255, .2);
  }

  .social-links a:hover {
    border: 1px solid rgba(255, 255, 255, .5);
    color: rgba(255, 255, 255, .8);
    transition: all .3s ease;
  }

</style>
