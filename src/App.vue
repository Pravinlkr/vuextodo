<template>
  <div id="app">
    <div class="nav">
      <p>To Do App Using Vuex</p>
    </div>
    <todo-input></todo-input>
    <todo-list></todo-list>
  </div>
</template>

<script>
import TodoInput from './components/todoInput.vue'
import TodoList from './components/todoList.vue'

export default {
  name: 'App',
  components: {
    TodoInput,
    TodoList
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
