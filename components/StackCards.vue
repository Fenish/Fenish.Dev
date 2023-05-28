<script setup lang="ts">
const props = defineProps({
  icon: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    default: "white",
    required: true,
  },
});

function getDarkerColor(hexColor: string, percentage: number) {
  hexColor = hexColor.replace("#", "");

  // Convert the hex color to RGB
  var r = parseInt(hexColor.substr(0, 2), 16);
  var g = parseInt(hexColor.substr(2, 2), 16);
  var b = parseInt(hexColor.substr(4, 2), 16);

  var factor = 1 - percentage / 100;

  r = Math.floor(r * factor);
  g = Math.floor(g * factor);
  b = Math.floor(b * factor);

  var darkerHexColor =
    "#" + ((r << 16) | (g << 8) | b).toString(16).padStart(6, "0");

  return darkerHexColor;
}

const borderColor = computed(() => getDarkerColor(props.color, 70));
const hoverState = ref(false);
</script>
<template>
  <div
    class="duration-700 transition-all group w-40 h-40 md:w-[10.8rem] md:h-[10.8rem] bg-black-200 border-2 flex justify-center items-center rounded-xl"
    :style="`
        border-color: ${borderColor};
        ${hoverState ? `Background-color: ${color};` : ''}
    `"
    @mouseover="hoverState = true"
    @mouseout="hoverState = false"
  >
    <Icon
      :name="icon"
      class="group-hover:text-white group-hover:opacity-100 w-12 h-12 text-gray-700 opacity-50 transition-all duration-700"
    />
  </div>
</template>
