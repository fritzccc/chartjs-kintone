import { Bar } from 'vue-chartjs'
import { options } from '../utils/config'
import data from '../utils/data'
export default {
  extends: Bar,
  template: `
      <div style="position: relative; margin: auto; height: 100vh; width: 90vw;min-width: 960px;">
        <canvas id="chart"></canvas>
      </div>
  `,
  data() {
    return {

    }
  },
  mounted() {
    this.renderChart(data, options)
  },
}