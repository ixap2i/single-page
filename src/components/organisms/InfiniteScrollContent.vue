<template>
  <ion-page>
    <ion-content class="ion-padding">
      <ion-button @click="toggleInfiniteScroll" expand="block">
        Toggle Infinite Scroll
      </ion-button>

      <ion-list>
        <ion-item v-for="item in items" :key="item">
          <ion-label>{{ item }}</ion-label>
        </ion-item>
      </ion-list>

      <ion-infinite-scroll
        @ionInfinite="loadData($event)"
        threshold="100px"
        id="infinite-scroll"
        :disabled="isDisabled"
      >
        <ion-infinite-scroll-content
          loading-spinner="bubbles"
          loading-text="Loading more data...">
        </ion-infinite-scroll-content>
      </ion-infinite-scroll>
    </ion-content>
  </ion-page>
</template>
<script>
import {
  IonButton,
  IonContent,
  IonInfiniteScroll,
  IonInfiniteScrollContent,
  IonItem,
  IonLabel,
  IonList,
  IonPage
} from '@ionic/vue'

export default {
  components: {
    IonButton,
    IonContent,
    IonInfiniteScroll,
    IonInfiniteScrollContent,
    IonItem,
    IonLabel,
    IonList,
    IonPage
  },
  data () {
    return {
      items: [],
      isDisabled: false
    }
  },
  setup () {
    const isDisabled = false
    const toggleInfiniteScroll = () => {
      isDisabled.value = !isDisabled.value
    }
    const items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']
    const pushData = () => {
      const max = items.length + 20
      const min = max - 20
      for (let i = min; i < max; i++) {
        items.push(i)
      }
    }

    const loadData = (ev) => {
      setTimeout(() => {
        pushData()
        console.log('Loaded data')
        ev.target.complete()

        // App logic to determine if all data is loaded
        // and disable the infinite scroll
        if (items.value.length == 1000) {
          ev.target.disabled = true
        }
      }, 500)
    }

    pushData()

    return {
      isDisabled,
      toggleInfiniteScroll,
      loadData,
      items
    }
  },
  methods: {
    pushLink (path) {
      this.$router.push(path)
    }
  }
}
</script>
