<template>
  <div :style="{ 'background-image': 'url(../../static/texture.jpg)', 'object-fit': 'cover' }">
    <ion-avatar>
      <img src="../static/icon.jpeg">
    </ion-avatar>
    <ion-text color="secondary">
      <h1>I'm a web developer.</h1>
    </ion-text>

    <h1>2021 Akane Yamashita</h1>
    <container>
    </container>
    <menu-button></menu-button>
  </div>
</template>

<script>
import {
  IonAvatar, IonChip,
  IonCol, IonGrid, IonRow
} from '@ionic/vue'
import MenuButton from './components/molecules/MenuButton.vue'
import Container from './components/molecules/Container.vue'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    IonAvatar,
    IonChip,
    IonCol,
    IonGrid,
    IonRow,
    MenuButton,
    Container
  },
  created: function () {
  }
})
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
