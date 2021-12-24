<template>
  <IonGrid>
    <IonRow>
    </IonRow>
    <IonRow>
      <IonCol :style="{'display': this.repository[0] !== '0' ? 'block' : 'none'}">
      </IonCol>
      <IonCol>
        <router-view/>
      </IonCol>
      <IonCol :style="{'display': this.repository[0] !== '0' ? 'block' : 'none'}">
      </IonCol>
    </IonRow>
    <IonRow :style="{'height': this.repository[1]+'px'}">
    </IonRow>
  </IonGrid>
</template>

<script>
import { IonGrid, IonCol, IonRow } from '@ionic/vue'
import { defineComponent, ref, onBeforeMount } from 'vue'

export default defineComponent({
  name: 'Container',
  components: {
    IonGrid, IonCol, IonRow
  },
  setup () {
    let width = ''
    let height = ''
    if (window.innerHeight < 800) {
      height = '0'
    } else {
      height = '200'
    }

    if (window.innerWidth < 500) {
      width = '0'
    }

    const repository = ref([width, height])

    onBeforeMount(repository)
    return {
      repository
    }
  }
})

</script>
