<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button type="danger">按钮</Button>
    <van-button type="danger">按钮</van-button>
    <Rate v-model="value" />
  </div>
</template>

<script>

import { Button, Rate } from 'vant'

import { ref, onMounted, onBeforeUnmount, onBeforeUpdate, onUpdated } from 'vue'
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
    return { value }
  }
}
</script>
