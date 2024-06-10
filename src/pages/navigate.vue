<template>
  <div class="p-[0_30px_30px] overflow-auto">
    <div
      class="text-30px font-700 p-b-20px sticky top-0 left-0 line-height-relaxed bg-[#e0e5ec] dark:bg-[#16171a]"
    >
      Navigate
    </div>
    <NavigateList></NavigateList>
  </div>
</template>
<script setup lang="ts">
import NavigateList from '~/components/navigate-list.vue'
</script>
