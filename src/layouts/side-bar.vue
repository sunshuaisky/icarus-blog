<template>
  <div class="w-240px h-full p-30px transition-duration-200 overflow-x-hidden overflow-y-auto  box-border"
       flex="~ col">
    <div class="decoration-none text-19px font-600 leading-34px sticky top-0 uppercase">
      <div class="absolute top-[-30px] left-0 bgColor w-220px h-70px z-[-1]"></div>
      @Icarus.Sun
    </div>
    <div class="p-[36px_0px] menuBorderBottom">
      <div class="menuTextFont">RICK</div>
      <div>
        <nuxt-link to="/blog" class="flex items-center decoration-none cursor-pointer">Blog
        </nuxt-link>
        <div class="flex items-center decoration-none m-t-26px cursor-pointer">
          Memorial Day
        </div>
        <div class="flex items-center decoration-none m-t-26px cursor-pointer">
          Music
        </div>
      </div>
    </div>
  </div>
</template>