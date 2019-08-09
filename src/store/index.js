import Vue from 'vue'
import Vuex from 'vuex'
import { backgroundColor, categories, labels } from '../utils/config'
import { countBy, groupBy } from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chartData: null,
    categories: categories.map(cate => {
      return {
        title: cate,
        show: true
      }
    }),
  },
  getters: {
    showCategories({ categories }) {
      return [...categories]
        .reverse()
        .filter(cate => cate.show)
        .map(cate => cate.title)
    },
    renderData({ chartData }, { showCategories }) {
      if (!chartData) {
        return null;
      }
      let items = groupBy(chartData, '大分類(カテゴリー)')
      Object.keys(items).forEach(k => items[k] = countBy(items[k], '事業部'))
      items = showCategories.map(cate => labels.map(label => items[cate][label] || 0))
      return {
        labels,
        datasets: showCategories.map((cate, i) => ({
          label: cate,
          data: items[i],
          backgroundColor: new Array(labels.length).fill(backgroundColor[i])
        }))
      }
    },
  },
  mutations: {
    toggleCategories(state, index) {
      state.categories[index].show = !state.categories[index].show
    },
    setChartData(state, data) {
      state.chartData = data
    }
  }
})