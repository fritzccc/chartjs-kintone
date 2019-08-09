import Chart from 'chart.js';
import data from './data'
import { options } from './config'

Chart.Tooltip.positioners.custom = (_, position) => position
try {
  kintone.events.on(['app.record.index.show'], event => {
    console.log(event.viewId)
    const target = document.querySelector('.kintone-app-header-space')
    const chart = document.createElement('div')
    chart.style.position = 'relative'
    chart.style.margin = 'auto'
    chart.style.height = '100vh'
    chart.style.width = '90vw'
    chart.style.minWidth = '960px'
    chart.innerHTML = '<canvas id="chart"></canvas>'
    target.appendChild(chart)
    const myChart = new Chart('chart', {
      data,
      options,
      type: 'bar',
    })
  })
} catch (error) {
  new Chart('chart', {
    data,
    options,
    type: 'bar',
  })
}