<template>
  <v-app>
    <v-layout
      align-center
      justify-space-around
      wrap>
      <v-avatar>
        <v-img :src="require('@/assets/top.png')" />
      </v-avatar>
      <router-view/>
      <Button />
      <h1>2020 Akane Yamashita</h1>
    </v-layout>
  </v-app>
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
  background: #fff;
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
i {
  margin-right: 10px;
}
</style>
