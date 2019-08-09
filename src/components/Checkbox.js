import { mapMutations } from 'vuex'
export default {
  template: `
    <div class="kintoneplugin-input-checkbox" style="margin-right: 16px;">
      <span class="kintoneplugin-input-checkbox-item">
        <input type="checkbox" :id="cate.title" :checked="cate.show" @change="toggleCategories(index)">
        <label :for="cate.title">{{ cate.title }}</label>
      </span>
    </div>
  `,
  props:['cate','index'],
  methods: {
    ...mapMutations(['toggleCategories'])
  },
}