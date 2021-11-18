<template>
  <v-app>
    <ion-avatar>
      <img src="./assets/icon.jpeg">
    </ion-avatar>
    <ion-text color="secondary">
      <h1>I'm a web developer.</h1>
    </ion-text>

    <v-layout
      align-center
      justify-space-around
      wrap>
      <v-avatar>
      </v-avatar>
      <router-view/>
      <Button />
      <h1>2021 Akane Yamashita</h1>
      <MenuButton/>
    </v-layout>
  </v-app>
</template>

<script>
import {
  IonAvatar, IonChip, IonText,
  IonCol, IonGrid, IonRow
} from '@ionic/vue'
import MenuButton from '../src/components/organisms/MenuButton.vue'
import { defineComponent } from 'vue'
export default defineComponent({
  components: {
    IonAvatar,
    IonChip,
    IonText,
    IonCol,
    IonGrid,
    IonRow,

    MenuButton
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
