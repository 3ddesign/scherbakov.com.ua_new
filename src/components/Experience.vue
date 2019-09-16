<template>
  <section id="experience">
    <div class="container">
      <h2>Experience</h2>
      <div class="pfblock-line"></div>
      <table class="table table-hover table-striped exptable">
        <caption class="text-center boldextra">Job experience:</caption>
        <thead>
        <tr class="text-center bold">
          <td>Date</td>
          <td>Company</td>
          <td>Position</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Feb 2019 - at the current time</td>
          <td>Glorium Technologies</td>
          <td class="bold-col">Team lead (frontend)</td>
        </tr>
        <tr>
          <td>Apr 2018 - Feb 2019</td>
          <td>Tallium Inc</td>
          <td class="bold-col">Frontend Developer</td>
        </tr>
        <tr>
          <td>Jul 2017 - Apr 2018 </td>
          <td>DB2 Limited</td>
          <td class="bold-col">Frontend Developer</td>
        </tr>
        <tr>
          <td>Feb 2009 - Jun 2017</td>
          <td>Asbis Ukraine</td>
          <td class="bold-col">IT Manager</td>
        </tr>
        <tr>
          <td>Nov 2007 - Feb 2009</td>
          <td>Intercity Travel ltd</td>
          <td class="bold-col">System Administrator/Webmaster</td>
        </tr>
        <tr>
          <td>Feb 2005 - Nov 2007</td>
          <td>Buymerovka</td>
          <td class="bold-col">System Administrator</td>
        </tr>
        </tbody>
      </table>
      <div class="pfblock-line"></div>
      <table class="table table-hover table-striped exptable">
        <caption class="text-center boldextra">Education:</caption>
        <thead>
        <tr class="text-center bold">
          <td>Institution</td>
          <td>Сourse</td>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Udemy.com</td>
          <td class="bold-col">
          React 16 - The Complete Guide, The Complete Node.js Developer Course, Docker and Kubernetes: The Complete Guide, etc.</td>
        </tr>
        <tr>
          <td>Courses GoIT</td>
          <td class="bold-col">GoFrontend
            <a target="_blank" href="https://scherbakov.com.ua/Scherbakov_GoIT.pdf">(certificate)</a>
          </td>
        </tr>
        <tr>
          <td>Online courses TVDN (CyberBionic Systematics)</td>
          <td class="bold-col">WEB Frontend Developer
            <a target="_blank" href="https://testprovider.com/ru/Certificate/Search/TP18538432">(certificate)</a>
          </td>
        </tr>
        <tr>
          <td>Open International University of Human Development "Ukraine"</td>
          <td class="bold-col">Master's Degree in "Computer Engineering"</td>
        </tr>
        </tbody>
      </table>
    </div>
  </section>
</template>

<script>
</script>

<style scoped lang="scss">
  @import '../assets/scss/mixins';
  .container {
    margin: auto;
    padding: 20px 140px;
    text-align: center;
    background-color: #f5f5f5;
    @include respond-to($p888) {
      padding: 20px 0;
    }
  }

  table {
    margin: 40px auto;
    width: 60%;
    border-spacing: 0;
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
        background-color: #f9f9f9;
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
    @include respond-to($p888) {
      font-size: 11px;
      color: #222;
    }
  }

  .bold-col {
    font-weight: 400;
    color: #028ed2;
  }
</style>
