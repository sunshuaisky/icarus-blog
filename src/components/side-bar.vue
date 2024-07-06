<template>
  <div class="w-240px h-full p-32px transition-duration-200 overflow-x-hidden overflow-y-auto  box-border"
       flex="~ col">
    <div class="decoration-none text-19px font-600 leading-34px sticky top-0 uppercase">
      <div class="absolute top-[-32px] left-0 bg_color w-220px h-70px z-[-1]"></div>
      @Icarus.Sun
    </div>
    <div class="p-[36px_0px] menu_border_bottom last:border-0" v-for="(item, index) in menus" :key="index">
      <div class="menu_text_font">{{ item.name }}</div>
      <div>
        <nuxt-link v-for="(cItem, cIndex) in item.children" :key="cIndex" :to="cItem.path"
                   class="flex items-center decoration-none cursor-pointer m-t-26px first:m-t-0">
          {{ cItem.name }}
        </nuxt-link>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import {reactive} from 'vue'

interface Menu {
  name: string
  path?: string
  children?: Menu[]
}

const menus = reactive<Menu[]>([])

setTimeout(() => {
  let data = [
    {
      name: 'ICARUS',
      children: [
        {name: 'Navigate', path: '/navigate'},
        {name: 'Blog', path: '/blog'},
        {name: 'ChatGPT', path: '/ChatGPT'}
      ]
    }
  ];
  menus.push(...data)
}, 1000)
</script>