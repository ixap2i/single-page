<template>
  <i class="fas fa-motorcycle"></i>
  Portfolio

  <template v-for="item in items">
    <card
      :projectName="item.title"
      :projectDescription="item.subtitle"
      :term="item.link"
      :img="item.avatar"
      :link="true">
    </card>
  </template>

  <infinite-scroll-content></infinite-scroll-content>
</template>

<style>
</style>

<script>
import Card from '../atoms/Card.vue'
import InfiniteScrollContent from '../organisms/InfiniteScrollContent.vue'
export default {
  components: {
    Card, InfiniteScrollContent
  },
  data () {
    return {
      dialog: false,
      items: [
        {
          avatar: './assets/gatzby_p.png',
          title: '某動画プロダクト風LP',
          subtitle: 'React.js',
          link: 'https://ixap2i.github.io/try-react-app/'
        },
        {
          avatar: './assets/gatzby_p.png',
          title: 'My Portfolio',
          subtitle: 'Gatsby.js',
          link: 'https://eloquent-heyrovsky-1dab82.netlify.app'
        },
        {
          avatar: './assets/rails_p.png',
          title: 'My Portfolio',
          subtitle: 'Ruby on Rails5, Vue.js, GSAP, CSS3 / Webpack導入の勉強です',
          link: 'https://kayataaa.herokuapp.com/'
        },
        {
          avatar: './assets/mejiro_p.png',
          title: '(★案件) 目白駅前クリニック',
          subtitle: 'SEO + デザイン対応(PC, SP)',
          link: 'https://mejiroekimae.com/'
        }
      ]
    }
  }
}
</script>
