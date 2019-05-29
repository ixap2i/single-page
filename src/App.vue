<template>
  <div id="app">
    <v-avatar>
      <img
        src="assets/person.png"
        alt="Akane"
      >
    </v-avatar>
    <router-view/>
    <Button />
    <Carousel />
    <h1>2019 Akane Yamashita</h1>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import Carousel from '@/components/Carousel.vue'

export default {
  name: 'App',
  components: {
    Button, Carousel
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
h1 {
  font-size: 13px;
  padding-top: 10px;
  padding-bottom: 10px;
}
</style>
