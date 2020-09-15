<template>
  <v-container>
    <v-row>
      <v-col cols="12" md="8">
        <v-row>
          <v-col cols="12">
            <div class="content-box">
              <h2 class="chart-title">Line Chart</h2>
              <Chartist :data="data" type="Line" />
            </div>
          </v-col>
        </v-row>
        <v-row>
          <v-col>
            <div class="content-box">
              <h2 class="chart-title">Bar Chart</h2>
              <Chartist :data="barData" type="Bar" />
            </div>
          </v-col>
        </v-row>
      </v-col>
      <v-col cols="12" md="4">
        <div class="content-box box-feature">
          <h2 class="chart-title">Pie Chart</h2>
          <Chartist :data="pieData" type="Pie" />
        </div>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Chartist from '@/components-reusable/Chartist.vue'
export default {
  components: {
    Chartist
  },
  data () {
    return {
      data: {
        series: [
          {
            name: 'series-1',
            data: [
              { x: new Date(143134652600), y: 53 },
              { x: new Date(143234652600), y: 40 },
              { x: new Date(143340052600), y: 45 },
              { x: new Date(143366652600), y: 40 },
              { x: new Date(143410652600), y: 90 },
              { x: new Date(143410652600), y: 20 },
              { x: new Date(143508652600), y: 32 },
              { x: new Date(143569652600), y: 18 },
              { x: new Date(143579652600), y: 11 }
            ]
          }
        ]
      },
      pieData: {
        series: [5, 3, 4]
      },
      barData: {
        series: [
          [5, 2, 10],
          [6, 5, 4],
          [3, 9, 20]
        ]
      }
    }
  }
}
</script>

<style>
</style>
