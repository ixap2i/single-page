<template>
  <ion-grid>
    <ion-row>
    </ion-row>
    <ion-row>
      <ion-col>
      </ion-col>
      <ion-col>
        <router-view/>
      </ion-col>
      <ion-col>
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
      containerHeight: 0
    }
  },
  created: function () {
    if (window.innerHeight < 800) {
      this.containerHeight = '0'
    } else {
      this.containerHeight = '200'
    }
  }
})

</script>
