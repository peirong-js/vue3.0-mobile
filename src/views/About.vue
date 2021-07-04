<template>
  <div class="about">
    <h1>This is an about page</h1>
    <Button type="primary" @click="changeName">按钮</Button>
    <Rate v-model="value" />
    vuex: {{name}}

<van-field
  v-model="state.fieldValue"
  is-link
  readonly
  label="地区"
  placeholder="请选择所在地区"
  @click="state.show = true"
/>
<van-popup v-model:show="state.show" round position="bottom">
  <Cascader
    v-model="state.cascaderValue"
    title="请选择所在地区"
    :options="options"
    @close="state.show = false"
    @finish="onFinish"
  />
</van-popup>
  </div>
</template>

<script>

import { Button, Rate, Cascader } from 'vant'
import { useStore } from 'vuex'
import { ref, toRefs, reactive } from 'vue'
export default {
  components: {
    Button,
    Rate,
    Cascader
  },
  setup () {
    const value = ref(3)
    const store = useStore()
    const { name } = toRefs(store.state)
    const changeName = () => {
      store.dispatch('changeName', 'about')
    }

    const state = reactive({
      show: false,
      fieldValue: '',
      cascaderValue: ''
    })
    // 选项列表，children 代表子选项，支持多级嵌套
    const options = [
      {
        text: '浙江省',
        value: '330000',
        children: [{ text: '杭州市', value: '330100' }]
      },
      {
        text: '江苏省',
        value: '320000',
        children: [{ text: '南京市', value: '320100' }]
      }
    ]
    // 全部选项选择完毕后，会触发 finish 事件
    const onFinish = ({ selectedOptions }) => {
      state.show = false
      state.fieldValue = selectedOptions.map((option) => option.text).join('/')
    }
    return {
      value,
      name,
      changeName,
      state,
      options,
      onFinish
    }
  }
}
</script>
