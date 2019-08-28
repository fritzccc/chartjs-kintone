import Vue from 'vue'
import BarChart from './components/BarChart'
import OptionPanel from './components/OptionPanel'
import Chart from 'chart.js'
import { mapGetters } from 'vuex'
import { options } from './utils/config'
import { APPID, VIEWID } from './utils/kintone.env'
import store from './store'
import kintoneUtility from 'kintone-utility'
// for dev
// import data from './demo'

Chart.Tooltip.positioners.custom = (_, position) => position

try {
  kintone.events.on(['app.record.index.show'], event => {
    if (event.viewId !== VIEWID) {
      console.warn('current viewId: ', event.viewId);
      return event
    }
    const target = document.querySelector('.kintone-app-header-space')
    const chart = document.createElement('div')
    chart.style.position = 'relative'
    chart.style.margin = 'auto'
    chart.style.height = '100vh'
    chart.style.width = '90vw'
    chart.style.minWidth = '960px'
    chart.innerHTML = '<canvas id="chart"></canvas>'
    target.appendChild(chart)
    // fetch all data
    kintoneUtility.rest.getAllRecordsByQuery({ app: APPID, isGuest: false })
      .then(({ records }) => {
        store.commit('setChartData', records)
        new Vue({
          store,
          components: { BarChart, OptionPanel },
          template: `
            <div>
              <OptionPanel />
              <BarChart
                :height="200"
                :chartData="renderData"
                :options="options" />
            </div>
            `,
          data() {
            return { options }
          },
          computed: mapGetters(['renderData'])
        }).$mount('#chart')
      })
  })
} catch (err) {
  console.error(err)
}