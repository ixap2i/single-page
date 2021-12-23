<template>
  <div>
    <IonGrid>
      <IonRow>
        <IonCol>
        </IonCol>
        <IonCol>
          <Title :title="'skill'" :icon="'fa fa-address-card'" />
          <template v-for="item in items" :key="item">
            <SkillFilm
              :skillName='item.skillName'
              :skillDesc='item.desc'
              :term='item.term'
              :imageName='item.imageName' />
          </template>
        </IonCol>
        <IonCol>
        </IonCol>
      </IonRow>
    </IonGrid>
  </div>
</template>

<script>
import Title from '../atoms/Title.vue'
import SkillFilm from '../atoms/SkillFilm.vue'
import { IonGrid, IonCol, IonRow } from '@ionic/vue'

export default {
  components: {
    SkillFilm,
    Title,
    IonGrid,
    IonCol,
    IonRow
  },
  data () {
    return {
      dialog: false,
      items: [
        {
          skillName: 'Ruby / Ruby on Rails',
          desc: '',
          term: '3年程度',
          imageName: 'red.jpg'
        },
        {
          skillName: 'Vue.js(2系)',
          desc: 'このHPは3系です',
          term: '1年半',
          imageName: 'green.jpg'
        },
        {
          skillName: 'Java, Kotlin',
          desc: '',
          subtitle: '1年程度',
          imageName: 'blue.jpg'
        }
      ]
    }
  }
}
</script>
