<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500">
      <template v-slot:activator="{ on }">
        <v-btn
          color="pink lighten-2"
          dark
          v-on="on">
          Work History
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline grey lighten-2"
          primary-title>
          Work History - 職務経歴
        </v-card-title>

        <VueMarkdown>
          ***オンライン診療サービス🏥***
            ***WebAPI, 管理画面の開発***
              - xml, CSVの出力機能の改修
              - Rspecによるテストの自動化
              - データの出力 / フロントエンド改修(Angular.js)
            ***法人サイトのSEO監修***
              - OGPタグ・マークアップ・サイト構造(sitemap.xml)の見直し、ブログコンテンツのパーマリンクのパス変更
              - GoogleAnalyticsの観察・使用ブラウザ毎にレスポンシブ対応
            ***ネイティブアプリの実装補助***

          ***飲食店発注サービス***
            ***飲食店受発注システム***
              - 発注機能のステータス改修
              - CSVの出力機能の改修
            ***<a href="https://kitchenbrothers.jp/">メディアサイト</a>の改修***
              - 絞り込み検索機能の開発
              - フロントエンドコーディング（表示項目の変更など）
              - スライダー、エフェクト付きのLPコーディング

          ***客先常駐***
            ***金融系証券システムの開発・デバッグ***
              - FileStreamクラスの実装
              - 単体・統合テスト
            ***通信系システムの開発・デバッグ***
              - フロントエンドの改修（表示項目の変更など）
              - 単体・統合テスト

          ***継続支援B型***
            ***生活支援員（社会福祉士）***
              - 高次機能障害・ADHD・軽度知的障害を持つものに対して職業指導などを実施
        </VueMarkdown>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            color="white"
            flat
            @click="dialog = false">
            閉じる
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>
  </div>
</template>

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
