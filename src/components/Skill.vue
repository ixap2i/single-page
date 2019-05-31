<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn
          color="info"
          dark
          v-on="on">
          <i class="fas fa-laptop-code"></i>
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
              :key="item.header">
              {{ item.header }}
            </v-subheader>

            <v-divider
              v-else-if="item.divider"
              :key="index"
              :inset="item.inset"></v-divider>

            <v-list-tile
              v-else
              :key="item.title"
              avatar
              @click="">
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
            color="white"
            info
            @click="dialog = false">
            close
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

<style>
.v-list--two-line .v-list__tile::hover {
  background: linear-gradient(to right, lightpink, #f8fc8d);
}
.v-list--two-line .v-list__tile {
  background: #fff;
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
        { header: 'Skills✨✨✨' },
        {
          avatar: 'https://i1.wp.com/www.blog.umentu.work/wp-content/uploads/2017/07/ruby-icon-7f9cd31a1c959d9c1666e3de91917e8c4d5927c82e561adc948a9861c8c09b9b.png?ssl=1',
          title: 'Ruby on Rails',
          subtitle: 'まあまあ…？'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://cdn2.auth0.com/blog/vuejs/logo.png',
          title: 'Vue.js',
          subtitle: 'ちょっぴり'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://camo.qiitausercontent.com/f4cbbb43f33f18f8c844097ca6fe2750cff11026/68747470733a2f2f71696974612d696d6167652d73746f72652e73332e616d617a6f6e6177732e636f6d2f302f3132333132322f64353166363832322d613630392d636364352d616463352d3064343164323261353762362e706e67',
          title: 'Kotlin',
          subtitle: '型推論便利だぴよぴよ'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQ3H0-qU7knCdc1FUJnMHQMGZpk8LPGS6bRqt5JkIZI-r0lqXk',
          title: 'angular.js',
          subtitle: 'ちょっとだけ'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://www.amw.jp/wp-content/uploads/2018/08/15352794773432.jpg',
          title: 'php + WordPress',
          subtitle: 'SEOちょっぴり'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0Dla9btXMztmLN_QHfBBpHVk28tH4h-uoyG6XRaKg7XLy0q0VNQ',
          title: 'html5 + css3',
          subtitle: 'flexがすき'
        },
        { divider: true, inset: true },
        {
          avatar: 'https://japan.techrepublic.com/storage/2017/06/26/34c845c6a7f1951691a8e1eefa333c5c/t/640/480/d/dockerwhalehero_640x480.jpg',
          title: 'Docker',
          subtitle: '便利！',
          src: 'https://letterneginr.hateblo.jp/entry/2019/04/08/100751'
        }
      ]
    }
  },
  methods: {
  }
}
</script>
