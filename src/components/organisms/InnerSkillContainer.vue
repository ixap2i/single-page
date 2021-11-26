<template>
  <div>
    <ion-grid>
      <ion-row>
        <ion-col>
        </ion-col>
        <ion-col>
          <Title :title="'skill'" :icon="'fa fa-address-card'" />
          <template v-for="item in items" :key="item">
            <SkillFilm
              :skillName='item.skillName'
              :skillDesc='item.desc'
              :term='item.term'
              :imageName='item.imageName' />
          </template>
        </ion-col>
        <ion-col>
        </ion-col>
      </ion-row>
    </ion-grid>
  </div>
</template>

<script>
import Title from '../atoms/Title.vue'
import SkillFilm from '../atoms/SkillFilm.vue'

export default {
  components: {
    SkillFilm, Title
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
          desc: '読み書き可能',
          subtitle: '1年程度',
          imageName: 'blue.jpg'
        }
      ]
    }
  }
}
</script>
