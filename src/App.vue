<template>
  <div id="app">
    <v-app>
      <v-main>
        <v-container>
          <h2 class="mb-8">To Do App Using Vuex and Vuetify</h2>
          <input-section></input-section>
          <warnings></warnings>
          <list-section></list-section>
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<script>
import inputSection from './components/inputSection.vue'
import listSection from './components/listSection.vue'
import Warnings from './components/warnings.vue'

export default {
  name: 'App',
  components: {
    inputSection,
    listSection,
    Warnings
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
</style>
