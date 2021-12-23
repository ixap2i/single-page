<template>
  <IonGrid>
    <IonRow>
    </IonRow>
    <IonRow>
      <IonCol :style="{'display': containerWidth !== '0' ? 'block' : 'none'}">
      </IonCol>
      <IonCol>
        <router-view/>
      </IonCol>
      <IonCol :style="{'display': containerWidth !== '0' ? 'block' : 'none'}">
      </IonCol>
    </IonRow>
    <IonRow :style="{'height': containerHeight+'px'}">
    </IonRow>
  </IonGrid>
</template>

<script>
import { IonGrid, IonCol, IonRow } from '@ionic/vue'

export default {
  name: 'Container',
  components: {
    IonGrid, IonCol, IonRow
  },
  data: () => {
    return {
      containerHeight: 0,
      containerWidth: 0
    }
  },
  created: function () {
    if (window.innerHeight < 800) {
      this.containerHeight = '0'
    } else {
      this.containerHeight = '200'
    }

    if (window.innerWidth < 500) {
      this.containerWidth = '0'
    }
  }
}

</script>
