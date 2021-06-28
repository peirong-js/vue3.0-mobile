<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
    <Tabs v-model:active="active" animated title-active-color="red">
      <Tab title="标签 1">内容 1</Tab>
      <Tab title="标签 2">内容 2</Tab>
      <Tab title="标签 3">内容 3</Tab>
      <Tab title="标签 4">内容 4</Tab>
    </Tabs>
    <PullRefresh v-model="state.loading" @refresh="onRefresh" >
      <p >刷新次数: {{ state.count }}</p>
      <Button type="primary" size="mini">按钮</Button>

    </PullRefresh>
  </div>
</template>

<script>
import { Toast, PullRefresh, Tab, Tabs, Button } from 'vant'
import { reactive, ref } from 'vue'
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    PullRefresh,
    Button,
    Tab,
    Tabs
  },
  setup () {
    const state = reactive({
      count: 0,
      loading: false
    })
    const onRefresh = () => {
      setTimeout(() => {
        Toast('刷新成功')
        state.loading = false
        state.count++
      }, 1000)
    }
    const active = ref(2)
    return {
      state,
      onRefresh,
      active
    }
  }
}
</script>

<style scoped lang="scss">
  .home .van-button--primary {
    --van-button-primary-color: rgb(255, 0, 0);
  }
  ::v-deep  .van-tabs__line {
    --van-tabs-bottom-bar-color: rgb(238, 183, 3);
  }
  /* :root {
    --van-tabs-bottom-bar-color: #000
  } */
</style>
