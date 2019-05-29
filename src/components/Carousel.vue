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
          {
            src: 'assets/logo.png'
          },
          {
            src: 'assets/rose2.JPG'
          },
          {
            src: 'assets/rose3.jpeg'
          },
          {
            src: 'assets/rose4.jpeg'
          },
          {
            src: 'assets/rose5.jpeg'
          }
        ]
      }
    }
  }
</script>