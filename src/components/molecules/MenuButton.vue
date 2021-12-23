<template>
  <IonContent>
    <!-- fab placed in the center of the content with a list on each side -->
    <IonFab vertical="center" horizontal="center" slot="fixed">
      <IonFabButton>
        menu
      </IonFabButton>
      <IonFabList side="top">
        <IonFabButton>
          <span @click="pushLink('skill')">skill</span>
        </IonFabButton>
      </IonFabList>
      <IonFabList side="bottom">
        <IonFabButton>
          <span @click="pushLink('portfolio')">portfolio</span>
        </IonFabButton>
      </IonFabList>
      <IonFabList side="start">
        <IonFabButton>
          <span @click="pushLink('job')">job</span>
        </IonFabButton>
      </IonFabList>
      <IonFabList side="end">
        <IonFabButton>
          <span href='/' @click="pushLink('/')">top</span>
        </IonFabButton>
      </IonFabList>
    </IonFab>
  </IonContent>
</template>

<script>
import {
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList
} from '@ionic/vue'
export default {
  components: {
    IonContent,
    IonFab,
    IonFabButton,
    IonFabList
  },
  methods: {
    pushLink (path) {
      this.$router.push(path)
    }
  }
}
</script>
