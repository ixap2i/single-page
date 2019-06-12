<template>
  <v-dialog
    v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn
        color="info"
        dark
        v-on="on">
        <i class="fas fa-code"></i>
        Skills
      </v-btn>
    </template>

    <v-card>
      <v-card-title
        class="headline success lighten-2"
        primary-title>
        Skills - エンジニア技術
      </v-card-title>

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

      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          flat
          @click="dialog = false">
          close
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<style>
.v-list--two-line .v-list__tile::hover {
  background: linear-gradient(to right, lightpink, #f8fc8d);
}
.v-list--two-line .v-list__tile {
  background: #fff;
}
.v-dialog {
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}

@media screen and (max-width: 896px) and (min-width: 375px) and (orientation: portrait) {
  .v-timeline-item, .v-timeline:before {
    display: none;
  }
}
</style>

<script>
import VueMarkdown from 'vue-markdown'

export default {
  components: {
    VueMarkdown
  },
  data () {
    return {
      dialog: false,
      items: [
        {
          avatar: 'https://img.icons8.com/nolan/64/000000/ruby-programming-language.png',
          title: 'Ruby on Rails',
          subtitle: 'まあまあ…？'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://img.icons8.com/ios/50/000000/v.png',
          title: 'Vue.js',
          subtitle: 'ちょっぴり'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://img.icons8.com/nolan/64/000000/android-tablet.png',
          title: 'Kotlin',
          subtitle: '型推論便利だぴよぴよ'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://img.icons8.com/ios/50/000000/angularjs-filled.png',
          title: 'angular.js',
          subtitle: 'ちょっとだけ'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://img.icons8.com/dusk/64/000000/wordpress.png',
          title: 'php + WordPress',
          subtitle: 'SEOちょっぴり'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://img.icons8.com/ios/50/000000/code-file-filled.png',
          title: 'HTML5 + CSS3',
          subtitle: 'flexがすき'
        },
        { divider: true, inset: true },
        {
          avatar: require('@/assets/icons8-docker-48.png'),
          title: 'Docker',
          subtitle: '便利！'
        }
      ]
    }
  }
}
</script>
