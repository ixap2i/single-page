<template>
  <ion-grid>
    <ion-row>
    </ion-row>
    <ion-row>
      <ion-col :style="{'display': containerWidth !== '0' ? 'block' : 'none'}">
      </ion-col>
      <ion-col>
        <router-view/>
      </ion-col>
      <ion-col :style="{'display': containerWidth !== '0' ? 'block' : 'none'}">
      </ion-col>
    </ion-row>
    <ion-row :style="{'height': containerHeight+'px'}">
    </ion-row>
  </ion-grid>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    containerHeight: String
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
})

</script>
