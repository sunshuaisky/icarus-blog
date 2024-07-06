<template>
  <div class="flex p-32px">
    <div class="h-34px flex w-full max-w-450px">
      <input
          class="w-full h-full border-0 dark:bg-black bg-white rounded-8px text-14px font-500 p-[0_40px_0_16px] shadow-[0_0_0_2px_rgba(134, 140, 160, 0.02)]"
          type="text" readOnly placeholder="Search"
      />
    </div>
    <div class="flex_center_center shrink-0 m-l-a p-l-20px">
      <div class="m-[0_8px]">Icarus.Sun</div>
      <div class="i-grommet-icons-github m-[0_8px]" />
      <ThemeSwitch></ThemeSwitch>
    </div>
  </div>
</template>
<script setup lang="ts">
import ThemeSwitch from "~/components/theme-switch.vue";
</script>