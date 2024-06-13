<template>
  <div
      class="p-[0_32px_32px] overflow-auto grid min-[1330px]:grid-cols-[repeat(auto-fill,306px)] gap-16px"
  >
    <nuxt-link
        v-for="(item, index) in navigates"
        :key="index"
        class="w-[calc(100%-72px)] min-[1330px]:max-w-240px h-80px p-[16px_32px] cursor-pointer transition-colors-300 rounded-xl bg-[#ffffff8c] hover:bg-white dark:bg-[#00000067] dark:hover:bg-black"
        flex="~ items-center justify-start"
        :to="item.path"
        target="_blank"
        rel="noopener noreferrer"
    >
      <div class="i-logos-vue w-64px h-64px"></div>
      <div class="m-l-8px w-[calc(100%-72px)]">
        <p class="text-20px font-500 color-black dark:text-white">{{ item.title }}</p>
        <p
            class="text-14px m-t-12px box line-clamp-2 line-height-snug color-[#707074] dark:color-[#8C919B]"
        >
          {{ item.content }}
        </p>
      </div>
    </nuxt-link>
  </div>
</template>

<script setup lang="ts">
interface Navigate {
  title: string
  path: string
  content: string
}

defineProps<{
  navigates?: Navigate[]
}>()
</script>
