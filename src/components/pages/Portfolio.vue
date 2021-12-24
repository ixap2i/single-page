<template>
  <Title :title="'Portfolio'" :icon="'fa fa-motorcycle'" />
  <Card
    v-for="item in items"
    :key="item.title"
    :projectName="item.title"
    :projectDescription="item.subtitle"
    :term="item.link"
    :link="true">
  </Card>
</template>

<style>
</style>

<script>
import Card from '../atoms/Card.vue'
import Title from '../atoms/Title.vue'
export default {
  components: {
    Card, Title
  },
  data () {
    return {
      dialog: false,
      items: [
        {
          avatar: './img/lp_p.png',
          title: '某動画プロダクト風LP',
          subtitle: 'React.js',
          link: 'https://ixap2i.github.io/try-react-app/'
        },
        {
          avatar: './img/gatzby_p.png',
          title: 'My Portfolio',
          subtitle: 'Gatsby.js',
          link: 'https://eloquent-heyrovsky-1dab82.netlify.app'
        },
        {
          avatar: './img/rails_p.png',
          title: 'My Portfolio',
          subtitle: 'Ruby on Rails5, Vue.js, GSAP, CSS3 / Webpack導入の勉強です',
          link: 'https://kayataaa.herokuapp.com/'
        },
        {
          avatar: './img/mejiro_p.png',
          title: '(★案件) 目白駅前クリニック',
          subtitle: 'SEO + デザイン対応(PC, SP)',
          link: 'https://mejiroekimae.com/'
        }
      ]
    }
  }
}
</script>
