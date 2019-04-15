<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
    <Button />
    <Icon />
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import Icon from '@/components/Icon.vue'

export default {
  name: 'App',
  components: {
    Button, Icon
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
