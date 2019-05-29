<template>
  <div class="text-xs-center">
    <v-dialog
      v-model="dialog"
      width="500">
      <template v-slot:activator="{ on }">
        <v-btn
          color="info lighten-2"
          dark
          v-on="on">
          Skills
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline success lighten-2"
          primary-title>
          Skills - エンジニア技術
        </v-card-title>

        <VueMarkdown>
          Ruby on Rails,
          Vue.js,
          Kotlin
          Android Studio
        </VueMarkdown>
        <VueMarkdown>
          Ruby Programmer Association Silver
        </VueMarkdown>
        <v-divider></v-divider>

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
