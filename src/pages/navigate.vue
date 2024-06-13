<template>
  <div class="p-[0_30px_30px] overflow-auto">
    <div
        class="text-30px font-700 p-b-20px sticky top-0 left-0 line-height-relaxed bg-[#e0e5ec] dark:bg-[#16171a]"
    >
      Navigate
    </div>
    <NavigateList :navigates="navigates"></NavigateList>
  </div>
</template>
<script setup lang="ts">
import NavigateList from '~/components/navigate-list.vue'
import {reactive} from 'vue'

interface Navigate {
  title: string
  path: string
  content: string
}

const navigates = reactive<Navigate[]>([])

setTimeout(() => {
  let data = [
    {
      title: 'Vue2',
      path: 'https://v2.cn.vuejs.org/',
      content: 'Vue2是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue被设计为可以自底向上逐层应用。Vue的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue也完全能够为复杂的单页应用提供驱动。'
    },
    {
      title: 'Vue3',
      path: 'https://cn.vuejs.org/',
      content: 'Vue3是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和JavaScript构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue都可以胜任。'
    }
  ];
  navigates.push(...data)
}, 1000)
</script>
