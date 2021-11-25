<template>
  <!-- The reorder gesture is disabled by default, enable it to drag and drop items -->
  <ion-reorder-group  @ionItemReorder="doReorder" :disabled="false">
    <!-- Default reorder icon, start aligned items -->
    <!-- <ion-item>
      <ion-reorder slot="start"></ion-reorder>
      <SkillFilm />
    </ion-item> -->

    <!-- Items wrapped in a reorder, entire item can be dragged -->
    <ion-reorder v-for="item in items" :key="item" slot="start">
      <ion-item>
        <ion-label>
          {{ item }}
        </ion-label>
      </ion-item>
    </ion-reorder>

  </ion-reorder-group>
</template>

<script>
import {
  IonIcon,
  IonItem,
  IonLabel,
  IonReorder,
  IonReorderGroup
} from '@ionic/vue'
import { defineComponent, ref } from 'vue'
import SkillFilm from '../atoms/SkillFilm.vue'
export default defineComponent({
  components: {
    IonIcon,
    IonItem,
    IonLabel,
    IonReorder,
    IonReorderGroup,

    SkillFilm
  },
  props: {
  },
  data: () => {
    return {
      items: [1, 2, 3, 4, 5, 6, 7, 8]

    }
  },
  setup () {
    const items = ref([1, 2, 3, 4, 5, 6, 7, 8])
    const doReorder = (event) => {
      // The `from` and `to` properties contain the index of the item
      // when the drag started and ended, respectively
      items.value = event.detail.complete(items.value)

      // // Finish the reorder and position the item in the DOM based on
      // // where the gesture ended. This method can also be called directly
      // // by the reorder group
      event.detail.complete()

      // const itemMove = this.items.splice(event.detail.from, 1)[0]
      // this.items.splice(event.detail.to, 0, itemMove)
      // event.detail.complete()
    }
    return { items, doReorder }
  },
  methods: {
    ionItemReorder: function (event) {
      // The `from` and `to` properties contain the index of the item
      // when the drag started and ended, respectively
      console.log('Dragged from index', event.detail.from, 'to', event.detail.to)

      // // Finish the reorder and position the item in the DOM based on
      // // where the gesture ended. This method can also be called directly
      // // by the reorder group
      event.detail.complete()

      // const itemMove = this.items.splice(event.detail.from, 1)[0]
      // this.items.splice(event.detail.to, 0, itemMove)
      // event.detail.complete()
    }
  }
})
</script>
