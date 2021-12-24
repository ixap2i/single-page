<template>
  <Title :title="'Job'" :icon="'fa fa-suitcase'" />
  <Card
    projectName='FoodScore'
    projectDescription='食品の原材料名をOCRで読み取り、健康度順にデータ化。美味しさの指標でソートすることができるHealthyFoodリスト。■ バッチ処理（大量のデータ処理）、経営指標に関するダッシュボード作成などバックエンド全般を担当。 ■ Rails6, JavaScript, PostgreSQL, AWS'
    term='2020-10-01~'/>
  <Card
    projectName='Corona Lab'
    projectDescription='食品の原材料名と問診によってコロナ発症リスクをランクで表示するWebアプリケーション。■ ゲストユーザー機能(認証)、フレームワークのバージョンアップや監視ツール導入、Vue.jsプロジェクトの設計・ベース作成などを担当。■ Rails6, Vue.js, PostgreSQL, AWS'
    term='2021-12-01'/>
  <Card
    projectName='Price Search'
    projectDescription='EC上の商品情報を価格やスペックなどに分類したマーケティングツール。
    ■管理画面の追加機能、クローラーの改修、バッチ処理などを担当。■ Java, Kotlin, Spring Framework, AWS'
    term='2019-08~2020-04'/>
</template>

<style scoped>

</style>

<script>
import Title from '../atoms/Title.vue'
import Card from '../atoms/Card.vue'

export default {
  components: {
    Title, Card
  },
  data () {
    return {
      dialog: false
    }
  }
}
</script>
