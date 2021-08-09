<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container>
          <h2 class="mb-8">To Do App Using Vuex and Vuetify</h2>
          <input-section></input-section>
          <list-section></list-section>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import inputSection from './components/inputSection.vue'
import listSection from './components/listSection.vue'

export default {
  name: 'App',
  components: {
    inputSection,
    listSection
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
body{
  margin:0;
  padding:0;
}
.nav{
  height:50px;
  width: 100%;
  border:1px solid #ccc;
}
.nav p{
  font-size: 20px;
  margin-top:15px;
  font-weight: bold;
}
</style>
