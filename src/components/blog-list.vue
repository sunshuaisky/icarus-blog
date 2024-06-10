<template>
  <div class="p-[0_32px_32px] overflow-auto">
    <ul class="p-l-28px">
      <li class="li_mark p-l-8px m-[12px_0]">
        <p class="blog_title_styles">AAAAAA</p>
        <ul class="p-l-28px m-[16px_0]">
          <li class="li_mark p-l-8px m-[12px_0] h-32px">
            <nuxt-link class="blog_name_styles"
              >Angular Quick Start - Project</nuxt-link
            >
          </li>
          <li class="li_mark p-l-8px m-[12px_0] h-32px">
            <nuxt-link class="blog_name_styles"
              >Angular Quick Start - Project</nuxt-link
            >
          </li>
          <li class="li_mark p-l-8px m-[12px_0] h-32px">
            <nuxt-link class="blog_name_styles"
              >Angular Quick Start - Project</nuxt-link
            >
          </li>
          <li class="li_mark p-l-8px m-[12px_0] h-32px">
            <nuxt-link class="blog_name_styles"
              >Angular Quick Start - Project</nuxt-link
            >
          </li>
          <li class="li_mark p-l-8px m-[12px_0] h-32px">
            <nuxt-link class="blog_name_styles"
              >Angular Quick Start - Project</nuxt-link
            >
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.li_mark {
  list-style-type: disc;

  &::marker {
    color: #cbd5e1;
  }

  .dark &::marker {
    color: #475569;
  }
}
</style>
