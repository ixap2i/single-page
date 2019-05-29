<template>
  <div id="app">
    <router-view/>
    <Button />
    <Icon />
    <Modal />
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import Icon from '@/components/Icon.vue'
import Modal from '@/components/Modal.vue'

export default {
  name: 'App',
  components: {
    Button, Icon, Modal
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
