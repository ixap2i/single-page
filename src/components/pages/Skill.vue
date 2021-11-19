<template>
  <div>
    <i class="fa fa-address-card" aria-hidden="true"></i>
    Skill

  </div>
</template>

<style>

</style>

<script>

export default {
  components: {
  },
  data () {
    return {
      dialog: false,
      items: [
        {
          avatar: 'https://img.icons8.com/nolan/64/000000/ruby-programming-language.png',
          title: 'Ruby on Rails',
          subtitle: '5.0~プロジェクトで関わっています'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://img.icons8.com/ios/50/000000/v.png',
          title: 'Vue.js',
          subtitle: ''
        },
        { divider: true, inset: true },
        {
          avatar: 'https://img.icons8.com/ios/50/000000/angularjs-filled.png',
          title: 'Angular.js',
          subtitle: '業務ではバージョン2を使ってました / 9で自作アプリ作成中です'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://img.icons8.com/dusk/64/000000/wordpress.png',
          title: 'php + WordPress',
          subtitle: 'SEO + デザイン変更の経験があります'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://img.icons8.com/ios/50/000000/code-file-filled.png',
          title: 'HTML5 + CSS3',
          subtitle: 'flexbox便利ですよねー。'
        },
        { divider: true, inset: true },
        {
          avatar: '',
          title: 'Docker',
          subtitle: '初心者です'
        }
      ]
    }
  }
}
</script>
