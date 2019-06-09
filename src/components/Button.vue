<template>
  <v-flex xs4>
    <v-btn color="cyan" href="https://github.com/ixap2i" class="github" target="_blank">
      <i class="fab fa-github-alt"></i>
      Github
    </v-btn>
    <v-btn color="red" href="https://www.instagram.com/umiharuno/" class="insta" target="_blank">
      <i class="fas fa-hashtag"></i>
      Instagram
    </v-btn>
    <v-btn color="green" href="https://letterneginr.hateblo.jp/" class="blog" target="_blank">
      <i class="fas fa-rss-square"></i>
      Blog
    </v-btn>
    <v-btn color="gray" href="https://gist.github.com/ixap2i/7b14bfd413dc4ab3e2b680de5e898c0e" class="resume" target="_blank">
      <i class="far fa-clipboard"></i>
      Resume
    </v-btn>
    <v-btn color="pink" href="https://www.slideshare.net/ssuser34abd0" class="resume" target="_blank">
      <i class="fab fa-slideshare"></i>
      SlideShare
    </v-btn>
    <Modal/>
    <Modal2/>
  </v-flex>
</template>

<script>
import Modal from '@/components/WorkHistory.vue'
import Modal2 from '@/components/Skill.vue'

export default {
  name: 'Card',
  components: {
    Modal, Modal2
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

.github:before {
  content: '';
}
.github::hover {

}

.insta::hover {

}

.blog::hover {

}
</style>
