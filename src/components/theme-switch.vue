<template>
  <div @click="toggleDark"
       class="theme-switch w-42px h-22px rounded-11px flex items-center justify-around bg-white dark:bg-black relative cursor-pointer">
    <div class="btn-sun i-material-symbols-light-sunny m-l-2px z-1"></div>
    <div class="btn-switch bg-[#bae0ff] w-18px h-18px rounded-9px absolute top-2px z-0"></div>
    <div class="btn-moon i-material-symbols-dark-mode m-r-2px z-1"></div>
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

<style lang="scss" scoped>
.theme-switch {
  .btn-switch {
    right: auto;
    left: 2px;
    animation: animationClickOn 0.7s;
  }

  .btn-moon {
    animation: rotateOn 0.7s;
  }

  .btn-sun {
    animation: shakeOn 0.7s;
  }
}

.dark .theme-switch {
  .btn-switch {
    left: auto;
    right: 2px;
    animation: animationClickOff 0.7s;
  }

  .btn-moon {
    animation: rotateOff 0.7s;
  }

  .btn-sun {
    animation: shakeOff 0.7s;
  }
}

// animations
@keyframes clickOff {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes clickOn {
  0% {
    transform: scale(1);
  }

  50% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(1);
  }
}

@keyframes shakeOff {
  0% {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(0.75, 1.25, 1);
  }

  40% {
    transform: scale3d(1.25, 0.75, 1);
  }

  50% {
    transform: scale3d(0.85, 1.15, 1);
  }

  65% {
    transform: scale3d(1.05, 0.95, 1);
  }

  75% {
    transform: scale3d(0.95, 1.05, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes shakeOn {
  0% {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  100% {
    transform: scale3d(1, 1, 1);
  }
}

@keyframes rotateOff {
  50% {
    transform: rotate(180deg);
  }
}

@keyframes rotateOn {
  50% {
    transform: rotate(-180deg);
  }
}

@keyframes animationClickOff {
  0% {
    right: auto;
    left: 2px;
  }

  50% {
    width: 38px;
  }

  100% {
    left: auto;
    right: 2px;
  }
}

@keyframes animationClickOn {
  0% {
    left: auto;
    right: 2px;
  }

  50% {
    width: 38px;
  }

  100% {
    right: auto;
    left: 2px;
  }
}
</style>