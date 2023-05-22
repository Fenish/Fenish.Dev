<template>
  <div
    ref="parentDiv"
    @mousemove="handleMouseMove"
    @mouseleave="hideGlow"
    @mouseenter="showGlow"
    class="bg-[#060606] relative flex overflow-hidden justify-center items-center p-1 rounded-md"
  >
    <Glow
      :glowLeft="glowLeft"
      :glowTop="glowTop"
      :glow-visibility="glowVisibility"
    />
    <div class="bg-black-300 relative flex rounded-md">
      <span class="text-white px-10 py-10">Hello, I am Talha. 👋</span>
    </div>
  </div>
</template>

<script setup>
const glowTop = ref(0);
const glowLeft = ref(0);
const glowVisibility = ref(false);
const parentDiv = ref(null);

function hideGlow() {
  glowVisibility.value = false;
}
function showGlow() {
  glowVisibility.value = true;
}
function handleMouseMove(event) {
  const parentRect = parentDiv.value.getBoundingClientRect();
  const mouseX = event.clientX - parentRect.left;
  const mouseY = event.clientY - parentRect.top;

  glowTop.value = mouseY;
  glowLeft.value = mouseX;
}
</script>
