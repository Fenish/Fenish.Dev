<script setup lang="ts">
import { useWindowSize } from "@vueuse/core";

const { width, height } = useWindowSize();

const visibility = ref(false);

onMounted(() => {
  visibility.value = true;
});
</script>

<template>
  <div
    v-if="visibility"
    class="absolute flex justify-center items-center pointer-events-none top-0 left-0"
  >
    <div class="particle" v-for="index in 20" />
  </div>
</template>

<style lang="scss">
.particle {
  position: absolute;
  border-radius: 50%;
}

@for $i from 1 through 20 {
  @keyframes particle-animation-#{$i} {
    100% {
      transform: translate3d(
        (random(90) * 1vw),
        (random(90) * 1vh),
        (random(100) * 1px)
      );
    }
  }

  .particle:nth-child(#{$i}) {
    animation: particle-animation-#{$i} 120s infinite;
    $size: random(3) + 1 + px;
    opacity: calc(random(100) / 100);
    height: $size;
    width: $size;
    animation-delay: -$i * 1.2s;
    transform: translate3d(
      (random(90) * 1vw),
      (random(90) * 1vh),
      (random(100) * 1px)
    );
    background-color: white;
    filter: blur(random(5) * 1px);
  }
}
</style>
