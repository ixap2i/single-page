<template>
  <v-carousel>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>
</template>

<script>
  export default {
    data () {
      return {
        items: [
          {src: require('@/assets/rose1.jpg')},
          {src: require('@/assets/rose3.jpeg')},
          {src: require('@/assets/rose4.jpeg')},
          {src: require('@/assets/rose5.jpeg')}
        ]
      }
    }
  }
</script>