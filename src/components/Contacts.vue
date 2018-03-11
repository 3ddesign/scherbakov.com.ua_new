<template>
  <section id="contact">
    <div class="container">
      <h2>Contacts</h2>
      <div class="pfblock-line"></div>
      <div class="contact-blocks">
        <div>
          <i class="fa fa-map-marker fa-3x" aria-hidden="true"></i><br>
          <p class="pfblock-subtitle">Ukraine, Kiev</p>
        </div>
        <div>
          <a href="mailto:dmitry@scherbakov.com.ua"><i class="fa fa-envelope-o fa-3x" aria-hidden="true"></i></a><br>
          <p class="pfblock-subtitle ">dmitry@scherbakov.com.ua</p>
        </div>
        <div>
          <a href="tel:0673926228"><i class="fa fa-phone fa-3x" aria-hidden="true"></i><br></a>
          <p class="pfblock-subtitle">+38 (067) 392 62 28</p>
        </div>
        <div>
          <i class="fa fa-skype fa-3x" aria-hidden="true"></i><br>
          <p class="pfblock-subtitle">scherbakov_d</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
</script>

<style scoped lang="scss">
  @import '../assets/scss/mixins';
  .container {
    margin: auto;
    padding: 120px 140px;
    max-width: 1170px;
    text-align: center;
    @include respond-to($p888) {
      padding: 20px 80px;
    }
    @include respond-to($p650) {
      padding: 20px  0px;
    }
  }
  .contact-blocks {
    text-align: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    i {
      color: #666;
      &:hover {
        animation: swing 0.6s ease;
        animation-iteration-count: 1;
      }
    }
    @include respond-to($p650) {
      flex-direction: column;
    }
  }
  .pfblock-subtitle {
    font-family: Raleway, "Times New Roman", Times, sans-serif;
    font-style: normal;
    font-size: 17px;
    @include respond-to($p888) {
      font-size: 13px;
    }
    @include respond-to($p650) {
      font-size: 17px;
    }
  }

  @keyframes swing {
    15% {
      -webkit-transform: translateX(9px);
      transform: translateX(9px);
    }
    30% {
      -webkit-transform: translateX(-9px);
      transform: translateX(-9px);
    }
    40% {
      -webkit-transform: translateX(6px);
      transform: translateX(6px);
    }
    50% {
      -webkit-transform: translateX(-6px);
      transform: translateX(-6px);
    }
    65% {
      -webkit-transform: translateX(3px);
      transform: translateX(3px);
    }
    100% {
      -webkit-transform: translateX(0);
      transform: translateX(0);
    }
  }

</style>
