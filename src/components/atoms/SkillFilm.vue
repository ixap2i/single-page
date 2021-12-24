<template>
  <IonCard :style="{ 'background-image': 'url(./img/'+imageName+')', 'width': this.repository[0], 'height': this.repository[1] }">
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
      <IonCardTitle :skillName='skillName'>{{skillName}}</IonCardTitle>
    </IonCardHeader>

    <IonCardContent>
      {{skillDesc}}
    </IonCardContent>
  </IonCard>
</template>

<script>
import { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel } from '@ionic/vue'
import { defineComponent, ref, onBeforeMount } from 'vue'

export default defineComponent({
  name: 'SkillFilm',
  components: { IonCard, IonCardHeader, IonCardContent, IonCardSubtitle, IonCardTitle, IonIcon, IonItem, IonLabel },
  props: {
    skillName: String,
    skillDesc: String,
    term: String,
    img: String,
    link: Boolean,
    imageName: String,
    innerHeight: String,
    innerWidth: String
  },
  setup (props) {
    let width = ''
    let height = ''
    if (window.innerWidth < 500) {
      width = '320px'
    } else {
      width = '400px'
    }
    height = '264px'

    const repository = ref([width, height])

    onBeforeMount(repository)
    return {
      repository
    }
  },
  beforeMount: function () {
    console.log(this.repository[0])
  }
})
</script>
