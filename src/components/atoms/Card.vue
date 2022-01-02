<template>
  <IonCard>
    <IonCardHeader>
      <IonCardSubtitle>
        <a :href="term" target="_blank">
          {{ term }}
        </a>
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
import { IonAvatar, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle } from '@ionic/vue'
export default {
  name: 'Card',
  components: { IonAvatar, IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle },
  props: {
    projectName: String,
    projectDescription: String,
    term: String,
    img: String,
    link: Boolean
  }
}

</script>
<style scoped>
a {
  color: red;
}
</style>
