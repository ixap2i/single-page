<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn
          color="pink lighten-2"
          dark
          v-on="on">
          <i class="fas fa-suitcase"></i>
          Work History
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title>
          Work History - 職務経歴
        </v-card-title>

        <template>
          <v-timeline>
            <v-timeline-item
              color="red lighten-4"
              large>
              <template v-slot:opposite>
                <span>2015.04</span>
              </template>
              <v-card class="elevation-2">
                <v-card-title class="headline">継続支援B型👩‍🏫</v-card-title>
                <h2>生活支援員（社会福祉士）</h2>
                <v-card-text>
                  - 高次機能障害・ADHD・軽度知的障害を持つものに対して職業指導などを実施
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item
              color="red lighten-3"
              large>
              <template v-slot:opposite>
                <span>2016.11</span>
              </template>
              <v-card class="elevation-2">
                <v-card-title class="headline">客先常駐👩‍💼</v-card-title>
                <h2>SE - 主にデバッガ</h2>
                <v-card-text>
                  <h3>Java 3 / 5 / 8, JUnit, Eclipse(pleiades)</h3><br>
                  - 金融系証券システムの開発・デバッグ<br>
                    - FileStreamクラスの実装<br>
                    - 単体・統合テスト<br>
                  - 通信系システムの開発・デバッグ<br>
                    - フロントエンドの改修（スタイル / 表示項目の変更など）<br>
                    - 単体・統合テスト<br>
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item
              color="red lighten-2"
              large>
              <template v-slot:opposite>
                <span>2017.12</span>
              </template>
              <v-card class="elevation-2">
                <v-card-title class="headline">飲食店発注サービス /
                <br><a href="https://kitchenbrothers.jp/" target= '_blank'>
                メディアサイト</a>の改修🍳<br>
                </v-card-title>
                <h2>Web エンジニア</h2>
                <v-card-text>
                  <h3>RoR5, jQuery, html5, css3</h3><br>
                  - 発注機能のステータス改修<br>
                  - CSVの出力機能の改修<br>
                  - 絞り込み検索機能の開発<br>
                  - フロントエンドコーディング（スタイル変更など）<br>
                  - スライダー、エフェクト付きのLPコーディング
                </v-card-text>
              </v-card>
            </v-timeline-item>
            <v-timeline-item
              color="red lighten-1"
              large>
              <template v-slot:opposite>
                <span>2018.12 ~ now</span>
              </template>
              <v-card class="elevation-2">
                <v-card-title class="headline">オンライン診療サービス🏥</v-card-title>
                <h2>??? - 迷走中</h2>
                <v-card-text>
                  <h3>RoR5, angular.js, html5, css3, Android Studio, Kotlin ..
                  </h3><br>
                  - WebAPI, 管理画面の開発<br>
                    - xml, CSVの出力機能の改修<br>
                    - Rspecによるテストの自動化<br>
                    - データの出力 / フロントエンド改修(Angular.js)<br>
                  - 法人サイトのSEO監修<br>
                    - OGPタグ・マークアップ・サイト構造(sitemap.xml)の見直し、ブログコンテンツのパーマリンクのパス変更<br>
                    - GoogleAnalyticsの観察・使用ブラウザ毎にレスポンシブ対応<br>
                  - ネイティブアプリの実装補助<br>
                </v-card-text>
              </v-card>
            </v-timeline-item>
          </v-timeline>
        </template>
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
h3, .v-card__title {
  text-align: center;
}
h3 {
  border-bottom: 10px solid orange;
}
.v-card__text {
  text-align: left;
  line-height: 25px;
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
      dialog: false
    }
  }
}
</script>
