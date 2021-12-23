<template>
  <IonCard>
    <IonCardHeader>
      <IonCardSubtitle>
        <template v-if="link">
          <a :href="term" target="_blank">
            {{ term }}
          </a>
        </template>
        <template v-else>
          {{ term }}
        </template>
      </IonCardSubtitle>
      <IonCardTitle :projectName='projectName'>{{projectName}}</IonCardTitle>
      <IonAvatar v-if="img">
        <img :src="img">
      </IonAvatar>
    </IonCardHeader>

    <IonCardContent>
      {{projectDescription}}
    </IonCardContent>
  </IonCard>
</template>

<script>
import { IonAvatar, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel } from '@ionic/vue'
import { warning } from 'ionicons/icons'
import { defineComponent } from 'vue'
export default defineComponent({
  components: { IonAvatar, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel },
  setup () {
    return { warning }
  },
  props: {
    projectName: String,
    projectDescription: String,
    term: String,
    img: String,
    link: Boolean
  },
  data: () => {
    return {
    }
  }
})
</script>
<style scoped>
a {
  color: red;
}
</style>
