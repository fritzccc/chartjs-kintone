import Checkbox from './Checkbox'
import { mapState } from 'vuex'
export default {
  components: { Checkbox },
  template: `
      <div style="display: flex; flex-wrap: wrap;flex-direction: row;">
        <Checkbox v-for="(cate,index) in categories" :key="index" :cate="cate" :index="index"/>
      </div>
  `,
  computed: {
    ...mapState(['categories'])
  },
}