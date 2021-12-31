<template>
  <IonGrid>
    <IonRow>
      <IonCol>
      </IonCol>
      <IonCol>
        <Title :title="'skill'" :icon="'fa fa-address-card'" />
        <template v-for="(item, index) in reactiveM" :key="index" :value="item[index]">
          <SkillFilm
            :skillName='item.get("skillName")'
            :skillDesc='item.get("desc")'
            :term='item.get("term")'
            :imageName='item.get("imageName")' />
        </template>
      </IonCol>
      <IonCol>
      </IonCol>
    </IonRow>
  </IonGrid>
</template>

<script>
import Title from '../atoms/Title.vue'
import SkillFilm from '../atoms/SkillFilm.vue'
import { IonGrid, IonCol, IonRow } from '@ionic/vue'
import { reactive } from 'vue'
export default {
  components: {
    SkillFilm,
    Title,
    IonGrid,
    IonCol,
    IonRow
  },
  setup () {
    const map1 = new Map()
    const map2 = new Map()
    const map3 = new Map()

    map1.set('skillName', 'Ruby / Ruby on Rails')
    map1.set('desc', '')
    map1.set('term', '3年程度')
    map1.set('imageName', 'red.jpg')

    map2.set('skillName', 'Vue.js(2系)')
    map2.set('desc', 'このHPは3系です')
    map2.set('term', '1年半')
    map2.set('imageName', 'green.jpg')

    map3.set('skillName', 'Java, Kotlin')
    map3.set('desc', '')
    map3.set('term', '1年程度')
    map3.set('imageName', 'blue.jpg')

    const data = Array(3)
    data.fill(map1, 0)
    data.fill(map2, 1)
    data.fill(map3, 2)

    const reactiveM = reactive(data)
    return { reactiveM }
  }
}
</script>
