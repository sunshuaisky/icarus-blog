<template>
  <div class="p-[0_32px_32px] overflow-auto">
    <div
      class="text-30px font-700 p-b-20px sticky top-0 left-0 line-height-relaxed bg-[#e0e5ec] dark:bg-[#16171a]"
    >
      Blog
    </div>
    <BLogList :blogs="blogs"></BLogList>
  </div>
</template>

<script setup lang="ts">
import BLogList from '~/components/blog-list.vue'
import {reactive} from 'vue'

interface Blog {
  title: string
  path?: string
  children?: Blog[]
}

const blogs = reactive<Blog[]>([])

setTimeout(() => {
  let data = [
    {
      title: 'AAAAAA',
      children: [
        {title: 'Angular Quick Start - Project', path: '/navigate'},
        {title: 'Angular Quick Start - Project', path: '/blog'},
        {title: 'Angular Quick Start - Project', path: '/blog'},
        {title: 'Angular Quick Start - Project', path: '/blog'},
        {title: 'Angular Quick Start - Project', path: '/blog'}
      ]
    }
  ];
  blogs.push(...data)
}, 1000)
</script>
