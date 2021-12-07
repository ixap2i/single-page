<template>
  <div>
    <Title :title="'Blog Updates'" :icon="'fa fa-address-card'" />
    <Card
      :projectName='this.$store.state.embedObj.embedObj.title'
      :projectDescription='this.$store.state.embedObj.embedObj.published'
      :term='this.$store.state.embedObj.embedObj.author_url'
      :link='true' />
    <Title :title="'Commit Updates'" :icon="'fa fa-address-card'" />
    <Card
      projectName='preparing' />
  </div>
</template>

<script>
import Title from '../atoms/Title.vue'
import Card from '../atoms/Card.vue'

export default {
  components: {
    Title, Card
  },
}
</script>
