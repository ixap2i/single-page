<template>
  <ion-card>
    <ion-card-header>
      <ion-card-subtitle>{{term}}</ion-card-subtitle>
      <ion-card-title :projectName='setProjectName'>{{projectName}}</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      {{projectDescription}}
    </ion-card-content>
  </ion-card>
</template>

<script>
import { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel } from '@ionic/vue'
import { warning } from 'ionicons/icons'
import { defineComponent } from 'vue'

export default defineComponent({
  components: { IonCard, IonCardContent, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel },
  setup () {
    return { warning }
  },
  props: {
    projectName: String,
    projectDescription: String,
    term: String
  }
})
</script>
