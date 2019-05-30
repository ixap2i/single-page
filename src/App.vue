<template>
  <div id="app">
    <v-avatar>
      <v-img  style='height: 70px; width: 70px; margin-bottom: 20px;' :src="require('@/assets/person.png')" />
    </v-avatar>
    <router-view/>
    <Button />
    <h1>2019 Akane Yamashita</h1>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'

export default {
  name: 'App',
  components: {
    Button
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
#app .v-avatar {
  height: 70px;
  width: 70px;
}
</style>
