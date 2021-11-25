<template>
  <ion-card :style="{ 'background-image': 'url(../../static/'+imageName+')', 'width':'400px', 'height':'267px' }">
    <ion-card-header>
      <ion-card-subtitle>
        <template v-if="link">
          <a :href="term" target="_blank">
            {{ term }}
          </a>
        </template>
        <template v-else>
          {{ term }}
        </template>
      </ion-card-subtitle>
      <ion-card-title :skillName='setSkillName'>{{skillName}}</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      {{skillDesc}}
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
    skillName: String,
    skillDesc: String,
    term: String,
    img: String,
    link: Boolean,
    imageName: String
  },
  data: () => {
    return {
    }
  }
})
</script>
