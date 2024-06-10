<template>
  <div
    class="p-[0_32px_32px] overflow-auto grid min-[1330px]:grid-cols-[repeat(auto-fill,306px)] gap-16px"
  >
    <nuxt-link
      class="w-[calc(100%-72px)] min-[1330px]:max-w-240px h-80px p-[16px_32px] cursor-pointer transition-colors-300 rounded-xl bg-[#ffffff8c] hover:bg-white dark:bg-[#00000067] dark:hover:bg-black"
      flex="~ items-center justify-start"
      :to="'https://v2.cn.vuejs.org/'"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="i-logos-vue w-64px h-64px"></div>
      <div class="m-l-8px w-[calc(100%-72px)]">
        <p class="text-20px font-500 color-black dark:text-white">Vue2</p>
        <p
          class="text-14px m-t-12px box line-clamp-2 line-height-snug color-[#707074] dark:color-[#8C919B]"
        >
          Vue2是一套用于构建用户界面的渐进式框架。与其它大型框架不同的是，Vue
          被设计为可以自底向上逐层应用。Vue
          的核心库只关注视图层，不仅易于上手，还便于与第三方库或既有项目整合。另一方面，当与现代化的工具链以及各种支持类库结合使用时，Vue
          也完全能够为复杂的单页应用提供驱动。
        </p>
      </div>
    </nuxt-link>
    <nuxt-link
      class="w-[calc(100%-72px)] min-[1330px]:max-w-240px h-80px p-[16px_32px] cursor-pointer transition-colors-300 rounded-xl bg-[#ffffff8c] hover:bg-white dark:bg-[#00000067] dark:hover:bg-black"
      flex="~ items-center justify-start"
      :to="'https://cn.vuejs.org/'"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div class="i-logos-vue w-64px h-64px"></div>
      <div class="m-l-8px w-[calc(100%-72px)]">
        <p class="text-20px font-500 color-black dark:text-white">Vue3</p>
        <p
          class="text-14px m-t-12px box line-clamp-2 line-height-snug color-[#707074] dark:color-[#8C919B]"
        >
          Vue3是一款用于构建用户界面的 JavaScript 框架。它基于标准 HTML、CSS 和
          JavaScript
          构建，并提供了一套声明式的、组件化的编程模型，帮助你高效地开发用户界面。无论是简单还是复杂的界面，Vue
          都可以胜任。
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts"></script>
