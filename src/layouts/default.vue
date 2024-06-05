<template>
  <div
      class="w-full h-screen bg-img-['/bg.png'] box-border overflow-hidden select-none flex_center_center"
      bg="[#121527db] cover no-repeat center-center blend-color-dodge">
    <div
        class="opacity-100 rounded-30px cursor-auto select-auto relative left-0 top-0 overflow-hidden z-10 bg-[#eeeeee] shadow-[0_0_40px_#000000]">
      <div
          class="bg_color w-75vw h-95vh overflow-hidden relative opacity-97 shadow-[0000004D_0px_20px_50px] flex">
        <SideBar></SideBar>
        <div class="flex flex-col flex-1">
          <Header></Header>
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from "~/layouts/header.vue";
import SideBar from "~/layouts/side-bar.vue";
</script>