import Vue from 'vue'
import VueChart from './components/VueChart'
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
  components: { VueChart, OptionPanel },
  template: `
  <div>
    <OptionPanel />
    <VueChart :chartData="renderData" :options="options" />
  </div>
  `,
  data(){
    return {
      options
    }
  },
  computed: mapGetters(['renderData'])
}).$mount('#vue-chart')