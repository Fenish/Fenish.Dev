<script setup lang="ts">
defineProps({
  color: {
    type: String,
    required: true,
  },
});

const parent = ref<HTMLElement | null>(null);
function generateRandomNumber() {
  return Math.floor(Math.random() * 360);
}

let rotation = generateRandomNumber();
let randomMargin = generateRandomNumber();
const speedFactorRandom = Math.random() * 0.4 - 0.2;
const rotationSpeedFactor = speedFactorRandom;
function animate() {
  rotation += rotationSpeedFactor;
  parent.value!.style.transform = `rotate(${rotation}deg)`;
  requestAnimationFrame(animate);
}
onMounted(() => {
  parent.value!.style.margin = `${randomMargin}px`;
  parent.value!.style.transform = `rotate(${rotation}deg)`;
  animate();
});
</script>

<template>
  <div class="w-full h-full absolute pointer-events-none" ref="parent">
    <div
      class="absolute w-64 h-64 blur-3xl top-1/2 -translate-y-1/2 opacity-10 md:opacity-20"
      :style="{ backgroundColor: color }"
    />
  </div>
</template>

<style scoped lang="scss">
@keyframes spin-animation {
  to {
    transform: rotate(360deg);
  }
}

.random-spin-animation {
  animation: spin-animation 3s linear;
}
</style>
