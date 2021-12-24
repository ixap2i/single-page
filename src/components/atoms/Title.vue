<template>
  <IonText style='margin-inline-start: 10px; font-size: 24px;' color="danger">
    <i :class="icon" aria-hidden="true"></i>
    {{title}}
  </IonText>
</template>

<style>

</style>

<script>
import { IonText } from '@ionic/vue'

export default {
  components: {
    IonText
  },
  props: {
    title: String,
    icon: String
  },
  data () {
    return {
    }
  }
}
</script>
