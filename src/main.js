import Vue from 'vue'
import BarChart from './components/BarChart'
import OptionPanel from './components/OptionPanel'
import Chart from 'chart.js'
import { mapGetters } from 'vuex'
import store from './store'
import { options } from './utils/config'
// for dev
import data from './demo'

Chart.Tooltip.positioners.custom = (_, position) => position

try {
  kintone.events.on(['app.record.index.show'], event => {
    // get data
  })
} catch (error) {
  // for dev only
  store.commit('setChartData', data)
}

new Vue({
  store,
  components: { BarChart, OptionPanel },
  template: `
  <div>
    <OptionPanel />
    <BarChart
      style="position: relative; margin: auto; height: 80vh; width: 80vw;"
      :height="200"
      :chartData="renderData"
      :options="options" />
  </div>
  `,
  data(){
    return {
      options
    }
  },
  computed: mapGetters(['renderData'])
}).$mount('#vue-chart')