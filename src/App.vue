<template>
  <div>
    <IonAvatar>
      <img src="../static/img/icon.jpeg" alt="site author">
    </IonAvatar>
    <IonText color="secondary">
      <h1>2021 Akane Yamashita</h1>
    </IonText>

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
    <container>
    </container>
    <menu-button></menu-button>
    <div class="dip"></div>
  </div>
</template>
<style scoped>
::v-global(body) {
  margin: initial;
}
::v-global(#app) {
  margin: 16px;
}
::v-global(container) {
  height: 648px; overflow: scroll;
}
::v-global(.dip) {
  padding-bottom: 200px;
}
</style>
<script>
import {
  IonAvatar, IonChip,
  IonCol, IonGrid, IonRow, IonText
} from '@ionic/vue'
import MenuButton from './components/molecules/MenuButton.vue'
import Container from './components/molecules/Container.vue'
import { defineComponent, ref } from 'vue'
import apiService from './services/apiService.ts'
export default defineComponent({
  components: {
    IonAvatar,
    IonChip,
    IonCol,
    IonGrid,
    IonRow,
    MenuButton,
    Container,
    IonText
  },
  created: async function () {
    if (!this.$store.state.embedObj.requested) {
      apiService.get('http://localhost:1235/getEmbedObj', {}).then(res => {
        this.$store.commit('embedObj/REQUESTED', res.data)
      })
    }
  },
  setup () {
    const repositories = ref([])
    const getUserRepositories = async () => {
      repositories.value = await apiService.get('http://localhost:1235/getEmbedObj', {}).then(res => {
        this.$store.commit('embedObj/REQUESTED', res.data)
      })
    }
    return {
      getUserRepositories
    }
  },
  mouted () {
    this.getUserRepositories()
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
