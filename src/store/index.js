import Vue from 'vue'
import Vuex from 'vuex'
import countBy from 'lodash/countBy'
import groupBy from 'lodash/groupBy'
import { backgroundColor, categories, labels } from '../utils/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    chartData: [],
    categories: categories.map(cate => ({ title: cate, show: true })),
  },
  getters: {
    showCategories({ categories }) {
      return [...categories]
        .reverse()
        .filter(cate => cate.show)
        .map(cate => cate.title)
    },
    renderData({ chartData }, { showCategories }) {
      if (!chartData || chartData.length === 0) {
        return [];
      }

      const maxIndex = showCategories.length - 1

      chartData.forEach(r => Object.keys(r).forEach(k => r[k] = r[k].value))
      let items = groupBy(chartData, '大分類')
      Object.keys(items).forEach(k => items[k] = countBy(items[k], 'jigyoubu'))
      items = showCategories.map(cate => labels.map(label => items[cate][label] || 0))

      return {
        labels,
        datasets: showCategories.map((cate, i) => ({
          label: cate,
          data: items[i],
          backgroundColor: new Array(labels.length).fill(backgroundColor[maxIndex - i])
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