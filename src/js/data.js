import { data } from './demoData'
import { backgroundColor, categories, labels } from './config'
import { countBy, groupBy } from 'lodash'

let items = groupBy(data, '大分類(カテゴリー)')
Object.keys(items).forEach(k => items[k] = countBy(items[k], '事業部'))
items = categories.map(cate => labels.map(label => items[cate][label] || 0))

export default {
  labels,
  datasets: categories.map((cate, i) => ({
    label: cate,
    data: items[i],
    backgroundColor: new Array(labels.length).fill(backgroundColor[i])
  }))
}