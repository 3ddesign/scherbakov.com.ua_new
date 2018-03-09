<template>
  <section id="aboutme">
    <div class="container">
      <h2>About me</h2>
      <div class="pfblock-line"></div>
      <img src="../assets/images/Dmitry.jpg" alt="Dmitry_Scherbakov">
      <div class="pfblock-subtitle">
        Hi! My name is Dmitry, I'm a Front-end developer. I use Angular 2+ as main framework. Rarely use React library. Also, I have some experience of creating API using Node.js <br>
        I'm passionate about developing with JavaScript, have aspiration to grow as strong
        full stack developer.
      </div>
      <br>
      <table class="table table-hover text-center table-striped form-group wow fadeInUp animated">
        <caption class="text-center bold">Technical skills:</caption>
        <tbody>
        <tr>
          <td>JavaScript</td>
        </tr>
        <tr>
          <td class="info">HTML5, CSS3</td>
        </tr>
        <tr>
          <td>Angular 2+, React</td>
        </tr>
        <tr>
          <td class="info">Adaptive layout using different preprocessors and frameworks</td>
        </tr>
        <tr>
          <td>Scrum development experience</td>
        </tr>
        <tr>
          <td class="info">Experience with Node.js</td>
        </tr>
        <tr>
          <td>Experience with Ionic2</td>
        </tr>
        <tr>
          <td class="info">Also extensive experience of network and system administration (configuring
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
    }
    .pfblock-subtitle {
      font-family: Raleway, "Times New Roman", Times, sans-serif;
      font-style: normal;
      font-size: 16px;
      color: #222;
    }
  }
</style>
