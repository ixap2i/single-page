<template>
  <v-dialog
    v-model="dialog">
    <template v-slot:activator="{ on }">
      <v-btn color="gray" v-on="on">
        <i class="fas fa-motorcycle"></i>
        Portfolio
      </v-btn>
    </template>

    <v-card>
      <v-card-title
        class="headline red lighten-4"
        primary-title>
        Portfolio - 今まで作ったものたち(クリックで別窓出ます)
      </v-card-title>
      <template v-for="(item, index) in items">
        <v-list two-line :key="item.header">
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
                :href="item.link"
                target="_blank"
                avatar>
                <v-list-tile-avatar>
                  <img :src="item.avatar">
                </v-list-tile-avatar>

                <v-list-tile-content>
                  <v-list-tile-title v-html="item.title"></v-list-tile-title>
                  <v-list-tile-sub-title v-html="item.subtitle"></v-list-tile-sub-title>
                </v-list-tile-content>
              </v-list-tile>

        </v-list>
      </template>

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

export default {
  data () {
    return {
      dialog: false,
      items: [
        {
          avatar: 'https://img.icons8.com/material/48/000000/js.png',
          title: 'My Portfolio',
          subtitle: 'Gatsby.js',
          link: 'https://eloquent-heyrovsky-1dab82.netlify.app'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://img.icons8.com/material/24/000000/ruby-programming-language.png',
          title: 'My Portfolio',
          subtitle: 'Ruby on Rails5, Vue.js, GSAP, CSS3 / Webpack導入の勉強です',
          link: 'https://kayataaa.herokuapp.com/'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://img.icons8.com/material/24/000000/ruby-programming-language.png',
          title: 'hanami',
          subtitle: 'Ruby on Rails5, CSS3 / 個人用ホームページです。FakerやActionMailerを勉強する素地になったリポジトリです。',
          link: 'https://envelope72.herokuapp.com/ '
        },
        { divider: true, inset: true },
        {
          avatar: 'https://img.icons8.com/dusk/64/000000/wordpress.png',
          title: '(★案件) 目白駅前クリニック',
          subtitle: 'SEO + デザイン対応(PC, SP)',
          link: 'https://mejiroekimae.com/'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://kitchenbrothers.jp/assets/pc/sns-4effa4717d2350124c67d48b4d4b1360986c5a57ca5d0342d15e3e3da6d0a45a.png',
          title: '(★案件) Kitchen Brothers',
          subtitle: '検索ページ, ブログ',
          link: 'https://kitchenbrothers.jp/'
        }
      ]
    }
  }
}
</script>
