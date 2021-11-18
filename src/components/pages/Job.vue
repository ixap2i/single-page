<template>
  <Card
    projectName='FoodScore'
    projectDescription='test'
    term='20XX-XX-XX'/>
  <Card
    projectName='Corona Lab'
    projectDescription='test'
    term='20XX-XX-XX'/>
  <Card
    projectName='Price Search'
    projectDescription='test'
    term='20XX-XX-XX'/>
</template>

<style scoped>

</style>

<script>
import Card from '../atoms/Card.vue'
import Reorder from '../molecules/Reorder.vue'

export default {
  components: {
    Card,
    Reorder
  },
  data () {
    return {
      dialog: false
    }
  }
}
</script>
