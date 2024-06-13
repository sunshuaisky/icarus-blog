<template>
  <div class="p-[0_32px_32px] overflow-auto">
    <ul class="p-l-28px">
      <li class="li_mark p-l-8px m-[12px_0]" v-for="(item, index) in blogs" :key="index">
        <p class="blog_title_styles">{{ item.title }}</p>
        <ul class="p-l-28px m-[16px_0]">
          <li class="li_mark p-l-8px m-[12px_0] h-32px" v-for="(child, i) in item.children" :key="i">
            <nuxt-link class="blog_name_styles" :to="child.path">
              {{ child.title }}
            </nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
interface Blog {
  title: string
  path?: string
  children?: Blog[]
}

defineProps<{
  blogs?: Blog[]
}>()
</script>

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
