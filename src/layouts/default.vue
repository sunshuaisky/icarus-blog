<template>
  <div
      class="w-full h-screen bg-img-['/bg.png'] box-border overflow-hidden select-none flexCenterCenter"
      bg="[#121527db] cover no-repeat center-center blend-color-dodge">
    <div
        class="opacity-100 rounded-30px cursor-auto select-auto relative left-0 top-0 overflow-hidden z-10 bg-[#eeeeee] shadow-[0_0_40px_#000000]">
      <div
          class="bgColor w-75vw h-95vh overflow-hidden relative opacity-97 shadow-[0000004D_0px_20px_50px] flex">
        <div class="w-240px h-full p-30px transition-duration-200 overflow-x-hidden overflow-y-auto  box-border"
             flex="~ col">
          <div class="decoration-none text-19px font-600 leading-34px sticky top-0 uppercase">
            <div class="absolute top-[-30px] left-0 bgColor w-220px h-70px z-[-1]"></div>
            @Icarus.Sun
          </div>
          <div class="p-[36px_0px] menuBorderBottom">
            <div class="menuTextFont">RICK</div>
            <div>
              <div class="flex items-center decoration-none">Blog
              </div>
              <div class="flex items-center decoration-none m-t-26px">
                Memorial Day
              </div>
              <div class="flex items-center decoration-none m-t-26px">
                Music
              </div>
            </div>
          </div>
          <div class="p-[36px_0px] menuBorderBottom">
            <div class="menuTextFont">RICK</div>
            <div>
              <div class="flex items-center decoration-none">Blog
              </div>
              <div class="flex items-center decoration-none m-t-26px">
                Memorial Day
              </div>
              <div class="flex items-center decoration-none m-t-26px">
                Music
              </div>
            </div>
          </div>
          <div class="p-[36px_0px] menuBorderBottom">
            <div class="menuTextFont">RICK</div>
            <div>
              <div class="flex items-center decoration-none">Blog
              </div>
              <div class="flex items-center decoration-none m-t-26px">
                Memorial Day
              </div>
              <div class="flex items-center decoration-none m-t-26px">
                Music
              </div>
            </div>
          </div>
          <div class="p-[36px_0px] menuBorderBottom">
            <div class="menuTextFont">RICK</div>
            <div>
              <div class="flex items-center decoration-none">Blog
              </div>
              <div class="flex items-center decoration-none m-t-26px">
                Memorial Day
              </div>
              <div class="flex items-center decoration-none m-t-26px">
                Music
              </div>
            </div>
          </div>
          <div class="p-[36px_0px] menuBorderBottom">
            <div class="menuTextFont">RICK</div>
            <div>
              <div class="flex items-center decoration-none">Blog
              </div>
              <div class="flex items-center decoration-none m-t-26px">
                Memorial Day
              </div>
              <div class="flex items-center decoration-none m-t-26px">
                Music
              </div>
            </div>
          </div>
          <div class="p-[36px_0px] menuBorderBottom">
            <div class="menuTextFont">RICK</div>
            <div>
              <div class="flex items-center decoration-none">Blog
              </div>
              <div class="flex items-center decoration-none m-t-26px">
                Memorial Day
              </div>
              <div class="flex items-center decoration-none m-t-26px">
                Music
              </div>
            </div>
          </div>
          <div class="p-[36px_0px] menuBorderBottom">
            <div class="menuTextFont">RICK</div>
            <div>
              <div class="flex items-center decoration-none">Blog
              </div>
              <div class="flex items-center decoration-none m-t-26px">
                Memorial Day
              </div>
              <div class="flex items-center decoration-none m-t-26px">
                Music
              </div>
            </div>
          </div>
          <div class="p-[36px_0px] menuBorderBottom">
            <div class="menuTextFont">RICK</div>
            <div>
              <div class="flex items-center decoration-none">Blog
              </div>
              <div class="flex items-center decoration-none m-t-26px">
                Memorial Day
              </div>
              <div class="flex items-center decoration-none m-t-26px">
                Music
              </div>
            </div>
          </div>
        </div>
        <div class="flex flex-col flex-1">
          <header class="flex p-30px">
            <div class="h-34px flex w-full max-w-450px">
              <input
                  class="w-full h-full border-0 dark:bg-black bg-white rounded-8px text-14px font-500 p-[0_40px_0_16px] shadow-[0_0_0_2px_rgba(134, 140, 160, 0.02)] searchIcon"
                  type="text" readOnly placeholder="Search"
              />
            </div>
            <div class="flexCenterCenter shrink-0 m-l-a p-l-20px">
              <div class="m-[0_12px]">Icarus.Sun</div>
              <div class="i-grommet-icons-github m-[0_12px]" />
              <ThemeSwitch></ThemeSwitch>
            </div>
          </header>
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import ThemeSwitch from "~/components/theme-switch.vue";
</script>