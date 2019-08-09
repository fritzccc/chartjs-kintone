export const backgroundColor = [
  '#36a4f2',
  '#e64c3b',
  '#9bcb5f',
  '#f58345',
  '#922b72',
  '#848c8e',
  '#f3c84c',
  '#ae734e',
  '#7eb7bd',
  '#293462',
  '#007065',
  '#d3f6f3',
  '#ff4463',
].reverse()

export const categories = [
  '脱Notes',
  '脱紙・Excel',
  '脱RPG',
  '脱ホスト',
  '基幹再構築',
  '基幹改善',
  '制度改正対応',
  '新規事業対応',
  'EoS対応',
  '医療',
  '内製支援',
  'AI',
  'その他'
]

export const labels = [
  '東１',
  '東２',
  '広域',
  '金融',
  '中部',
  '西日本',
  'ヘルスケア事',
  'ＳＩ広域',
]

export const options = {
  legend: {
    position: 'bottom',
    reverse: true,
    labels: {
      boxWidth: 12
    }
  },
  tooltips: {
    mode: 'index',
    position: 'custom',
    intersect: false,
    titleSpacing: 6,
    bodySpacing: 6,
    bodyFontSize: 11,
    caretSize: 0,
    itemSort: () => -1,
  },
  scales: {
    xAxes: [{
      stacked: true,
      barPercentage: 0.5
    }],
    yAxes: [{
      stacked: true
    }]
  }
}