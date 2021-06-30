<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button type="danger" @click="changeName">按钮</Button>
    <Rate v-model="value" />
    vuex: {{name}}
  </div>
</template>

<script>

import { Button, Rate } from 'vant'

import { ref, toRefs, onMounted, onBeforeUnmount, onBeforeUpdate, onUpdated } from 'vue'
import { useStore } from 'vuex'
export default {
  components: {
    Button,
    Rate
  },
  setup () {
    const value = ref(3)
    onMounted(() => {
      console.log('onMounted')
    })
    onBeforeUnmount(() => {
      console.log('onBeforeUnmount')
    })
    onBeforeUpdate(() => {
      console.log('onBeforeUnmount')
    })
    onUpdated(() => {
      console.log('onUpdated')
    })
    const store = useStore()
    const { name } = toRefs(store.state)
    const changeName = () => {
      store.dispatch('changeName', 'test')
    }
    return { value, name, changeName }
  }
}
</script>
