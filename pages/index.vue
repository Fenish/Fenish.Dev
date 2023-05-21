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
</script>

<template>
  <div class="bg-black min-h-screen min-w-screen overflow-x-hidden relative">
    <!-- Background Effects Section -->

    <div
      class="absolute right-80 top-0 w-[120px] h-[120px] gradient__blue__soft"
    />
    <div
      class="absolute -top-32 -right-52 gradient__pink__medium w-[320px] h-[320px] blur-[320px]"
    />
    <Particles />

    <!-- Background Effects Section -->
    <div
      class="flex flex-col items-center justify-center min-h-screen min-w-screen"
    >
      <span class="text-5xl text-violet-900/70">Fenish</span>
      <span class="text-sm text-white">- Developer -</span>
    </div>
  </div>
</template>
