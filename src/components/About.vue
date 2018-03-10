<template>
  <section id="about">
    <div class="container">
      <h2>About me</h2>
      <div class="pfblock-line"></div>
      <img src="../assets/images/Dmitry.jpg" alt="Dmitry_Scherbakov">
      <div class="pfblock-subtitle">
        Hi! My name is Dmitry, I'm a Front-end developer. I use Angular 2+ as main framework. Also, I have some experience of creating API using Node.js <br>
        I'm passionate about developing with JavaScript, have aspiration to grow as strong
        full stack developer.
      </div>
      <br>
      <table class="table table-hover text-center table-striped form-group wow fadeInUp animated">
        <caption>My technical skills:</caption>
        <tbody>
        <tr>
          <td>JavaScript</td>
        </tr>
        <tr>
          <td>HTML5, CSS3</td>
        </tr>
        <tr>
          <td>Angular 2+, React</td>
        </tr>

        <tr>
          <td>Experience with Node.js</td>
        </tr>
        <tr>
          <td>Experience with Ionic2 and React Native</td>
        </tr>
        <tr>
          <td>Adaptive layout using different preprocessors and frameworks</td>
        </tr>
        <tr>
          <td>Also extensive experience of network and system administration (configuring
            servers on
            Windows and Linux, virtualization, T-SQL queries, bash scripting, deployment and
            maintenance of various IT solutions, etc.)
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
  section {
    height: 860px;
  }
  .container {
    margin: auto;
    padding: 20px 140px;
    max-width: 1170px;
    text-align: center;
    height: 100vh;
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
    }
  }

  table {
    margin: 40px auto;
    width: 60%;
    border-spacing: 0px;
    min-width: 590px;
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
  }
</style>
