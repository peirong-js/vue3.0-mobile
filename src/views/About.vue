<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button type="primary" @click="changeName">按钮</Button>
    <Rate v-model="value" />
    vuex: {{name}}
  </div>
</template>

<script>

import { Button, Rate } from 'vant'
import { useStore } from 'vuex'
import { ref, toRefs } from 'vue'
export default {
  components: {
    Button,
    Rate
  },
  setup () {
    const value = ref(3)
    const store = useStore()
    const { name } = toRefs(store.state)
    const changeName = () => {
      store.dispatch('changeName', 'about')
    }
    return { value, name, changeName }
  }
}
</script>
