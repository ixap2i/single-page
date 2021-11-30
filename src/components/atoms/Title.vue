<template>
  <div>
    <ion-text style='margin-inline-start: 10px; font-size: 24px;' color="danger">
      <i :class="icon" aria-hidden="true"></i>
      {{title}}
    </ion-text>
  </div>
</template>

<style>

</style>

<script>
export default {
  components: {
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
