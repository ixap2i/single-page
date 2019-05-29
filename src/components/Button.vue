<template>
  <transition name="fade">
    <div>
      <v-layout>
	<v-btn color="github" href="https://github.com/ixap2i">Github</v-btn>
        <v-btn color="insta" href="https://www.instagram.com/umiharuno/">Instagram</v-btn>
        <v-btn color="blog" href="https://letterneginr.hateblo.jp/">Blog</v-btn>
        <router-link :to="'about'">About</router-link>
      </v-layout>
    </div>
  </transition>
</template>

<script>
import Card from '@/components/Card.vue'

export default {
  name: 'Card',
  components: {
    Card
  }
}
</script>
<style>
button, a {
  z-index: 1;
  font-size: inherit;
  font-family: inherit;
  color: white;
  padding: 0.5em 1em;
  outline: none;
  border: none;
  background-color: hsl(236, 32%, 26%);
}

button:hover, a:hover {
  cursor: pointer;
  animation: jelly 0.5s;
}

@keyframes jelly {
  0%,
  100% {
    transform: scale(1, 1);
  }
  25% {
    transform: scale(0.9, 1.1);
  }
  50% {
    transform: scale(1.1, 0.9);
  }
  75% {
    transform: scale(0.95, 1.05);
  }
}
</style>
