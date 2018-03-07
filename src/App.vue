<template>
  <div id="app">
    <Header/>
    <!--<Menu/>-->
    <!--<About/>-->
    <!--<Experience/>-->
    <!--<Contacts/>-->
  </div>
</template>

<script>
import Header from './components/Header'
import Menu from './components/Menu.vue'
import About from './components/About.vue'
import Experience from './components/Experience.vue'
import Contacts from './components/Contacts.vue'

export default {
  name: 'App',
  components: {
    Header,
    Menu,
    About,
    Experience,
    Contacts
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
  }
#app {

}
</style>
