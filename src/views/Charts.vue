<template>
  <v-container>
    <v-row>
      <h2>Line Chart</h2>
      <Chartist :data="data" type="Line" />
    </v-row>
    <v-row>
      <h2>Bar Chart</h2>
      <Chartist :data="barData" type="Bar" />
    </v-row>
    <v-row>
      <h2>Pie Chart</h2>
      <Chartist :data="pieData" type="Pie" />
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
          [5, 3, 4],
          [1, 2, 8]
        ]
      }
    }
  }
}
</script>

<style>
</style>
