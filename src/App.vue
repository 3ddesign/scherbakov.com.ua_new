<template>
  <div id="app">
    <Header/>
    <Menu/>
    <About/>
    <Experience/>
    <Contacts/>
    <Footer/>
  </div>
</template>

<script>
import Header from './components/Header'
import Menu from './components/Menu.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Contacts from './components/Contacts.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  components: {
    Header,
    Menu,
    About,
    Experience,
    Contacts,
    Footer
  }
}
</script>

<style lang="scss">
  @import url(http://fonts.googleapis.com/css?family=Raleway:400,300,500,700,800);
  body {
    margin: 0;
    padding: 0;
    font: 300 14px/1.8 'Raleway', sans-serif;
    color: #666;
    overflow-x: hidden;
  }
  h2 {
    margin: 0 0 30px;
    text-transform: uppercase;
    font: 700 28px/1.2 Raleway,sans-serif;
    letter-spacing: 3px;
    color: gray;
  }
  .pfblock-line {
    background: rgba(135, 135, 135, 0.5);
    width: 100px;
    height: 1px;
    margin: 30px auto;
  }
#app {

}
</style>
