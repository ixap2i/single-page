<template>
  <div>
    <ion-avatar>
      <img src="../static/icon.jpeg" alt="site author">
    </ion-avatar>
    <!-- <ion-text color="secondary">
      <h1>I'm a web developer.</h1>
    </ion-text>

    <h1>2021 Akane Yamashita</h1> -->
    Thanks to:
    <router-link to="https://www.pexels.com/ja-jp/@ekrulila?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">
    Ekrulila
    </router-link>/
    <router-link to="https://www.pexels.com/ja-jp/@pnw-prod?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">
    PNW Production
    </router-link>/
    <router-link to="https://www.pexels.com/ja-jp/@nord6?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">
    Tina Nord
    </router-link>/
    <router-link to="https://www.pexels.com/ja-jp/@kpaukshtite?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels">
    Kristina Paukshtite
    </router-link>/
    <container style="height: 648px; overflow: scroll;">
    </container>
    <menu-button></menu-button>
    <div style='padding-bottom: 200px;'></div>
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
  color: #2c3e50;
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
a { color: red; }
</style>
