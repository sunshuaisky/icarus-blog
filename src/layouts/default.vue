<template>
  <div
      class="w-full h-screen bg-img-['/bg.png'] box-border overflow-hidden select-none"
      bg="[#121527db] cover no-repeat center-center blend-color-dodge"
      flex="~ col justify-center items-center">
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
            <div class="text-13px tracking-[0.07em] m-b-[24px]">RICK</div>
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
          <div class="p-[36px_0px]" border-b="1px solid dark:#303133 #fafafa">
            <div class="text-13px tracking-[0.07em] m-b-[24px]">RICK</div>
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
          <div class="p-[36px_0px]" border-b="1px solid dark:#303133 #fafafa">
            <div class="text-13px tracking-[0.07em] m-b-[24px]">RICK</div>
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
          <div class="p-[36px_0px]" border-b="1px solid dark:#303133 #fafafa">
            <div class="text-13px tracking-[0.07em] m-b-[24px]">RICK</div>
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
          <div class="p-[36px_0px]" border-b="1px solid dark:#303133 #fafafa">
            <div class="text-13px tracking-[0.07em] m-b-[24px]">RICK</div>
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
          <div class="p-[36px_0px]" border-b="1px solid dark:#303133 #fafafa">
            <div class="text-13px tracking-[0.07em] m-b-[24px]">RICK</div>
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
          <div class="p-[36px_0px]" border-b="1px solid dark:#303133 #fafafa">
            <div class="text-13px tracking-[0.07em] m-b-[24px]">RICK</div>
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
          <div class="p-[36px_0px]" border-b="1px solid dark:#303133 #fafafa">
            <div class="text-13px tracking-[0.07em] m-b-[24px]">RICK</div>
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
          <header>
            <div class="h-34px flex w-full max-w-500px">
              <input type="text" readOnly placeholder="Search" />
            </div>
          </header>
          <div>default layout</div>
          <div class="bg-red w-10px h-10px z-10" @click="toggleDark"></div>
          <slot/>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">

const isDark = useDark()
const toggleDarksDark = useToggle(isDark)

const toggleDark = (event: MouseEvent) => {
  const isAppearanceTransition = document.startViewTransition && !window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (!isAppearanceTransition || !event) {
    toggleDarksDark()
    return
  }
  const x = event.clientX
  const y = event.clientY
  const endRadius = Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
  )
  // @ts-expect-error: Transition API
  const transition = document.startViewTransition(async () => {
    toggleDarksDark()
    await nextTick()
  })
  transition.ready.then(() => {
    const clipPath = [
      `circle(0px at ${x}px ${y}px)`,
      `circle(${endRadius}px at ${x}px ${y}px)`,
    ]
    document.documentElement.animate(
        {
          clipPath: isDark.value
              ? [...clipPath].reverse()
              : clipPath,
        },
        {
          duration: 400,
          easing: 'ease-in',
          pseudoElement: isDark.value
              ? '::view-transition-old(root)'
              : '::view-transition-new(root)',
        },
    )
  })
}
</script>