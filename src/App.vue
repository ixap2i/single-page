<template>
  <div>
    <ion-avatar>
      <img src="../static/img/icon.jpeg" alt="site author">
    </ion-avatar>
    <ion-text color="secondary">
      <h1>2021 Akane Yamashita</h1>
    </ion-text>

    <h2>I'm a web developer.</h2>
    Thanks to:
    <a href='https://www.pexels.com/ja-jp/@ekrulila?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels' target="_blank">
    Ekrulila</a>
    <a href='https://www.pexels.com/ja-jp/@pnw-prod?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels'>
    PNW Production
    </a>/
    <a href='https://www.pexels.com/ja-jp/@nord6?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels'>
    Tina Nord
    </a>/
    <a href='https://www.pexels.com/ja-jp/@kpaukshtite?utm_content=attributionCopyText&utm_medium=referral&utm_source=pexels'>
    Kristina Paukshtite
    </a>/
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
import apiService from './services/apiService.ts'
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
  created: async function () {
    if(!this.$store.state.embedObj.requested) {
      apiService.get('http://localhost:1235/getEmbedObj', {}).then(res => {
        this.$store.commit('embedObj/REQUESTED', res.data)
      })
    }
  }
})
</script>

<style>
body  {
  background: url("../static/img/texture.jpg");
  background-color: rgba(255,255,255,0.2);
  background-blend-mode: overlay;
  object-fit: cover;
}
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
