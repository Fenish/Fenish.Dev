<script setup lang="ts">
useHead(() => ({
  title: "Fenish.DEV",
  meta: [
    {
      name: "description",
      content: "Fenish.DEV - Developer",
    },
  ],
  htmlAttrs: {
    lang: "en",
  },
}));

const stacks = {
  vue: {
    icon: "mdi:vuejs",
    color: "#4FC08D",
  },
  nuxt: {
    icon: "simple-icons:nuxtdotjs",
    color: "#00C58E",
  },
  tailwind: {
    icon: "simple-icons:tailwindcss",
    color: "#06B6D4",
  },
  node: {
    icon: "mdi:nodejs",
    color: "#339933",
  },
  postgres: {
    icon: "simple-icons:postgresql",
    color: "#3785c4",
  },
};
</script>

<template>
  <div class="bg-black min-h-screen min-w-screen overflow-x-hidden relative">
    <!-- Background Effects Section -->

    <div
      class="opacity-50 md:opacity-100 absolute right-80 top-0 w-[120px] h-[120px] gradient__blue__soft"
    />
    <div
      class="opacity-50 md:opacity-100 absolute -top-32 -right-52 gradient__pink__medium w-[320px] h-[320px] blur-[320px]"
    />
    <Particles />

    <!-- Background Effects Section -->
    <div class="mt-60 flex items-center justify-center flex-col">
      <Panel />
      <div class="grid grid-cols-2 gap-4 content-start md:grid-cols-5 mt-10">
        <StackCards
          v-for="(stack, key) in stacks"
          :key="key"
          :icon="stack.icon"
          :color="stack.color"
        />
      </div>
    </div>
  </div>
</template>
