<template>
  <section id="about">
    <div class="container">
      <h2>About me</h2>
      <div class="pfblock-line"></div>
      <img src="../assets/images/Dmitry.jpg" alt="Dmitry Scherbakov">
      <div class="pfblock-subtitle">
        Hi! My name is Dmitry. I'm a frontend developer.
        <br>I use Angular as the main framework, also I have an experience of creating MEAN stack projects and
          mobile applications. I am passionate about development with JavaScript and have an
          aspiration to keep improving in it.
      </div>
      <br>
      <table class="table table-hover text-center table-striped form-group wow fadeInUp animated">
        <caption>Technical expertise:</caption>
        <tbody>
          <tr>
            <td>JavaScript</td>
          </tr>
          <tr>
            <td>HTML, CSS</td>
          </tr>
          <tr>
            <td>Angular 2+, React</td>
          </tr>
          <tr>
            <td>TypeScript, RxJS, NgRx</td>
          </tr>
          <tr>
            <td>Experience with Node.js</td>
          </tr>
          <tr>
            <td>MEAN stack projects development</td>
          </tr>
          <tr>
            <td>Working with Agile development processes</td>
          </tr>
          <tr>
            <td>Adaptive layout using different preprocessors and frameworks</td>
          </tr>
          <tr>
            <td>Experience in creating applications with Ionic, NativeScript and PWA</td>
          </tr>
          <tr>
            <td>
              Extensive experience of network and system administration: configuring
              servers, deployment and maintenance of various network solutions, etc.
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
</script>

<style scoped lang="scss">
@import "../assets/scss/mixins";

section {
  height: 950px;
  @include respond-to($p650) {
    height: 1100px;
  }
}
.container {
  margin: auto;
  padding: 20px 140px;
  max-width: 1170px;
  text-align: center;
  height: 100vh;
  @include respond-to($p888) {
    padding: 20px 0;
  }
  img {
    border-radius: 50%;
    width: 157px;
    height: 154px;
    display: inline-block;
    margin-bottom: 40px;
  }
  .pfblock-subtitle {
    font-family: Raleway, "Times New Roman", Times, sans-serif;
    font-style: normal;
    font-size: 16px;
    color: #222;
    width: 60%;
    margin: auto;
    min-width: 590px;
    font-weight: 400;
    @include respond-to($p650) {
      font-size: 18px;
      min-width: 0;
      width: 92%;
    }
  }
}

table {
  margin: 40px auto;
  width: 60%;
  border-spacing: 0;
  min-width: 590px;
  color: #222;
  caption {
    font-weight: 800;
    font-size: 15px;
    margin-bottom: 10px;
  }
  thead {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    tr {
      td {
        font-weight: 800;
        font-size: 15px;
      }
    }
  }
  tbody {
    tr {
      line-height: 2;
      border-top: 1px solid red;

      td {
        border-top: 1px solid #ddd;
      }
      &:hover {
        background-color: darken(#f5f5f5, 5) !important;
      }
    }
    tr:nth-child(odd) {
      background-color: #f5f5f5;
    }
    a {
      color: #e7746f;
      text-decoration: none;
      &:hover {
        color: #999;
      }
    }
  }
  @include respond-to($p650) {
    min-width: 0;
    width: 92%;
  }
}
</style>
