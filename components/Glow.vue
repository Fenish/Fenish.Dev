<script setup lang="ts">
defineProps({
  glowTop: Number,
  glowLeft: Number,
  glowVisibility: Boolean,
});
</script>

<template>
  <div>
    <Transition>
      <div
        v-if="glowVisibility"
        class="bg-white absolute w-10 h-10 rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2 blur-2xl"
        id="glow"
        :style="{
          top: `${glowTop}px`,
          left: `${glowLeft}px`,
        }"
      />
    </Transition>
  </div>
</template>

<style scoped>
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
