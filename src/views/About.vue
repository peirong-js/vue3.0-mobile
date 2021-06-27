<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button type="danger">危险按钮</Button>
    <van-button type="danger">危险按钮</van-button>
    <Rate v-model="value" />
  </div>
</template>

<script>

import { Button, Rate } from 'vant'

import { ref } from 'vue'
export default {
  components: {
    Button,
    Rate
  },
  setup () {
    const value = ref(3)
    return { value }
  }
}
</script>
