<template>
    <v-dialog
      v-model="dialog">
      <template v-slot:activator="{ on }">
        <v-btn
          color="info"
          #0088ff
          v-on="on">
          Chart
        </v-btn>
      </template>

      <v-card>
        <v-card-title
          class="headline success lighten-2"
          primary-title>
          Skills - エンジニア技術
        </v-card-title>
            <template>
            <div class="small">
                <line-chart :chart-data="datacollection"></line-chart>
                <button @click="fillData()">Randomize</button>
            </div>
            </template>
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
import LineChart from './LineChart.js'
export default {
    components: {
        LineChart
    },
    data () {
        return {
        datacollection: null
        }
    },
    mounted () {
        this.fillData()
    },
    methods: {
        fillData () {
        this.datacollection = {
            labels: [this.getRandomInt(), this.getRandomInt()],
            datasets: [
            {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: [this.getRandomInt(), this.getRandomInt()]
            }, {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: [this.getRandomInt(), this.getRandomInt()]
            }
            ]
        }
        },
        getRandomInt () {
        return Math.floor(Math.random() * (50 - 5 + 1)) + 5
        }
    }
}
</script>
