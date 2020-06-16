<template>
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
        <v-timeline class="page__wide">
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
                <h3>Java 3 / 5 / 8, JUnit, Eclipse(pleiades)</h3>
                <h4>- 金融系証券システムの開発・デバッグ</h4>
                  - FileStreamクラスの実装<br>
                  - 単体・統合テスト
                <h4>- 通信系システムの開発・デバッグ</h4>
                  - フロントエンドの改修（スタイル / 表示項目の変更など）<br>
                  - 単体・統合テスト
              </v-card-text>
              <v-card-text>
                <h3>チーム規模: 3名</h3>
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
              <a href="https://kitchenbrothers.jp/" target= '_blank'>
              メディアサイト</a>の改修🍳
              </v-card-title>
              <h2>Web エンジニア</h2>
              <v-card-text>
                <h3>Ruby on Rails5, jQuery, HTML5, CSS3</h3>
                <h4>- 発注機能のステータス改修</h4>
                <h4>- CSVの出力機能の改修</h4>
                <h4>- 絞り込み検索機能の開発</h4>
                <h4>- フロントエンドコーディング（スタイル変更など）</h4>
                <h4>- スライダー、エフェクト付きのLPコーディング</h4>
              </v-card-text>
              <v-card-text>
                <h3>チーム規模: 3~5名</h3>
              </v-card-text>
            </v-card>
          </v-timeline-item>
          <v-timeline-item
            color="red lighten-2"
            large>
            <template v-slot:opposite>
              <span>2018.12 ~ 2019.07</span>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline">オンライン診療サービス🏥</v-card-title>
              <h2>Webエンジニア</h2>
              <v-card-text>
                <h3>Ruby on Rails5, Angular, HTML5, CSS3, Android Studio, Kotlin ..
                </h3>
                <h4>- WebAPI, 管理画面の開発</h4>
                 &nbsp;&nbsp;- xml, CSVの出力機能の改修 --> CSチームの業務効率化<br>
                 &nbsp;&nbsp;- データの出力 / フロントエンド改修 --> SPA開発<br>
                 &nbsp;&nbsp;- RSpecによるテストの自動化 --> WebAPIの互換性を担保・AUTODOCでの仕様のドキュメント化<br>
                <h4>- 法人サイトのSEO監修</h4>
                 &nbsp;&nbsp;- OGPタグ・マークアップ・サイト構造(sitemap.xml)の見直し、ブログコンテンツのパーマリンクのパス変更<br>
                 &nbsp;&nbsp;- オンライン診療予約の流入を2件/日に安定化<br>
                 &nbsp;&nbsp;- GoogleAnalyticsの観察・使用ブラウザ毎にレスポンシブ対応<br>
                 &nbsp;&nbsp;- 2週間でiOSユーザーの流入を70%増加
                <h4>- ネイティブアプリの実装補助</h4>
                &nbsp;&nbsp;- Kotlinを使用した新規プロジェクトのビルド
              </v-card-text>
              <v-card-text>
                <h3>チーム規模: 5名</h3>
              </v-card-text>
            </v-card>
          </v-timeline-item>

          <v-timeline-item
            color="red lighten-1"
            large>
            <template v-slot:opposite>
              <span>2019.8 ~ 2020.07</span>
            </template>
            <v-card class="elevation-2">
              <v-card-title class="headline">プライシングツール /
              <a href="" target= '_blank'>
              プライシングツール</a>の開発🔎
              </v-card-title>
              <h2>Web エンジニア</h2>
              <v-card-text>
                <h3>Java8, Spring Framework, Kotlin, AWS, Vue.js...</h3>
                <h4>- Vue.jsで構築されたUIの機能改善</h4>
                <h4>- クローリング機能をデータ閲覧ページに追加</h4>
                <h4>- クロール先のサイト構造に合わせてクローラーを追加</h4>
              </v-card-text>
              <v-card-text>
                <h3>チーム規模: 3~5名</h3>
              </v-card-text>
            </v-card>
          </v-timeline-item>
        </v-timeline>
      </template>

      <div class="page__small">
        <v-card class="elevation-3">
          <v-card-title class="headline">継続支援B型👩‍🏫</v-card-title>
          <h2>生活支援員（社会福祉士）</h2>
          <v-card-text>
            - 高次機能障害・ADHD・軽度知的障害を持つものに対して職業指導などを実施
          </v-card-text>
        </v-card>

        <v-card class="elevation-3">
          <v-card-title class="headline">客先常駐👩‍💼</v-card-title>
          <h2>SE - 主にデバッガ</h2>
          <v-card-text>
            <h3>Java 3 / 5 / 8, JUnit, Eclipse(pleiades)</h3>
            <h4>- 金融系証券システムの開発・デバッグ</h4>
              - FileStreamクラスの実装<br>
              - 単体・統合テスト
            <h4>- 通信系システムの開発・デバッグ</h4>
              - フロントエンドの改修（スタイル / 表示項目の変更など）<br>
              - 単体・統合テスト
          </v-card-text>
          <v-card-text>
            <h3>チーム規模: 3名</h3>
          </v-card-text>
        </v-card>

        <v-card class="elevation-3">
          <v-card-title class="headline">飲食店発注サービス /
          <a href="https://kitchenbrothers.jp/" target= '_blank'>
          メディアサイト</a>の改修🍳
          </v-card-title>
          <h2>Web エンジニア</h2>
          <v-card-text>
            <h3>Ruby on Rails5, jQuery, Coffee Script, HTML5, CSS3</h3>
            <h4>- 発注機能のステータス改修</h4>
            <h4>- CSVの出力機能の改修</h4>
            <h4>- 絞り込み検索機能の開発</h4>
            <h4>- フロントエンドコーディング（スタイル変更など）</h4>
            <h4>- スライダー、エフェクト付きのLPコーディング</h4>
          </v-card-text>
          <v-card-text>
            <h3>チーム規模: 3~5名</h3>
          </v-card-text>
        </v-card>

        <v-card class="elevation-3">
          <v-card-title class="headline">オンライン診療サービス🏥 /
          <a href="https://mejiroekimae.com/" target= '_blank'>
          法人サイトのSEO改善</a></v-card-title>
          <h2>Webエンジニア</h2>
          <v-card-text>
            <h3>Ruby on Rails5, Angular, HTML5, CSS3, Android Studio, Kotlin ..
            </h3>
            <h4>- WebAPI, 管理画面の開発</h4>
              &nbsp;&nbsp;- xml, CSVの出力機能の改修 --> CSチームの業務効率化<br>
              &nbsp;&nbsp;- データの出力 / フロントエンド改修 --> SPA開発<br>
              &nbsp;&nbsp;- RSpecによるテストの自動化 --> WebAPIの互換性を担保・AUTODOCでの仕様のドキュメント化<br>
            <h4>- 法人サイトのSEO監修</h4>
              &nbsp;&nbsp;- OGPタグ・マークアップ・サイト構造(sitemap.xml)の見直し、ブログコンテンツのパーマリンクのパス変更<br>
              &nbsp;&nbsp;- オンライン診療予約の流入を2件/日に安定化<br>
              &nbsp;&nbsp;- GoogleAnalyticsの観察・使用ブラウザ毎にレスポンシブ対応<br>
              &nbsp;&nbsp;- 2週間でiOSユーザーの流入を70%増加
            <h4>- ネイティブアプリの実装補助</h4>
            &nbsp;&nbsp;- Kotlinを使用した新規プロジェクトのビルド
          </v-card-text>
          <v-card-text>
            <h3>チーム規模: 5名</h3>
          </v-card-text>
        </v-card>

        <v-card class="elevation-3">
          <v-card-title class="headline">プライシングツール /
          <a href="" target= '_blank'>
          プライシングツール</a>の開発🔎
          </v-card-title>
          <h2>Web エンジニア</h2>
          <v-card-text>
            <h3>Java8, Spring Framework, Kotlin, AWS, Vue.js...</h3>
            <h4>- Vue.jsで構築されたUIの機能改善</h4>
            <h4>- クローリング機能をデータ閲覧ページに追加</h4>
            <h4>- クロール先のサイト構造に合わせてクローラーを追加</h4>
          </v-card-text>
          <v-card-text>
            <h3>チーム規模: 3~5名</h3>
          </v-card-text>
        </v-card>
      </div>
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
h3, .v-card__title {
  text-align: center;
}
h3 {
  border-bottom: 5px solid orange;
}
.v-card__text {
  text-align: left;
  line-height: 25px;
  word-break: break-word;
}
.v-dialog {
  overflow: scroll;
  -webkit-overflow-scrolling: touch;
}

@media screen and (max-width: 896px) and (min-width: 400px) {
  .page__wide {
    display: none;
  }
}
@media screen and (min-width: 500px) and (min-width: 365px) {
  .page__small {
    display: none;
  }
  .v-card__title.headline {
    padding: 40px;
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
      dialog: false
    }
  }
}
</script>
