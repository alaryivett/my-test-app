import { createStore } from 'vuex'
import data from './modules/data'

export const store = createStore({
 modules: {
      data
  }
})
