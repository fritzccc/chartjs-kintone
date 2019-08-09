import { Bar, mixins } from 'vue-chartjs'

export default {
  extends: Bar,
  mixins: [mixins.reactiveProp],
  template: `
    <div style="position: relative; margin: auto; height: 80vh; width: 80vw;">
      <canvas id="chart"></canvas>
    </div>
  `,
  props: ['options'],
  mounted() {
    this.renderChart(this.chartData, this.options)
  },
}