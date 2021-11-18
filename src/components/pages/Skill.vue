<template>
  <i class="fa fa-pencil"></i>
  Skill

  <v-card>
    <v-list two-line>
      <template v-for="(item, index) in items">
        <v-subheader
          v-if="item.header"
          :key="item.header"
        >
          {{ item.header }}
        </v-subheader>

        <v-divider
          v-else-if="item.divider"
          :key="index"
          :inset="item.inset"></v-divider>

        <v-list-tile
          v-else
          :key="item.title"
          avatar>
          <v-list-tile-avatar>
            <img :src="item.avatar">
          </v-list-tile-avatar>

          <v-list-tile-content>
            <v-list-tile-title v-html="item.title"></v-list-tile-title>
            <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
          </v-list-tile-content>
        </v-list-tile>
      </template>
    </v-list>

  </v-card>
</template>

<style>
@media screen and (max-width: 896px) and (min-width: 375px) and (orientation: portrait) {
  .v-timeline-item, .v-timeline:before {
    display: none;
  }
}
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
