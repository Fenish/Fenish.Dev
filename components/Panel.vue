<template>
  <div
    class="bg-purple-900/30 relative flex overflow-hidden justify-center items-center p-0.5 rounded-md mx-5 md:m-0"
  >
    <div
      class="absolute left-0 top-0 w-10 h-10 bg-white blur-2xl border-animation"
    />
    <div class="bg-black-300 relative flex rounded-md text-white">
      <GradientAnimation color="rgba(255, 255, 255)" />
      <GradientAnimation color="rgba(167, 0, 255)" />

      <div class="px-10 md:px-20 py-20">
        <div class="flex">
          <div
            class="h-10 w-10 md:w-14 md:h-14 relative overflow-hidden rounded-full"
          >
            <img
              draggable="false"
              src="../assets/img/avatar-1.png"
              class="absolute top-6 left-0.5 md:top-11 md:left-1 scale-150 select-none"
            />
          </div>
          <div class="flex flex-col ml-5">
            <div>
              <span class="text-white md:text-3xl">Hi, I am Talha.</span>
              <span class="md:text-3xl hand-shake absolute">👋</span>
            </div>

            <span class="text-sm md:text-lg text-zinc-500"
              >Full stack developer</span
            >
          </div>
        </div>

        <p class="max-w-xl mt-12 text-gray-300 text-sm md:text-lg">
          Full-stack developer with a passion for backend development.
          Proficient in HTML, CSS, JavaScript, and backend technologies. Skilled
          in designing visually appealing websites and focused on delivering
          seamless user experiences. Let's collaborate to bring your digital
          projects to life!
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.border-animation {
  animation: border-animation 10s linear infinite;
}

.hand-shake {
  cursor: default;
}
.hand-shake:hover {
  animation-name: wave-animation;
  animation-duration: 2.5s;
  transform-origin: 70% 70%;
}
@keyframes wave-animation {
  0% {
    transform: rotate(0deg);
  }
  10% {
    transform: rotate(14deg);
  }
  20% {
    transform: rotate(-8deg);
  }
  30% {
    transform: rotate(14deg);
  }
  40% {
    transform: rotate(-4deg);
  }
  50% {
    transform: rotate(10deg);
  }
  60% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(0deg);
  }
}

@keyframes border-animation {
  0% {
    top: 0;
    left: 0;
  }
  25% {
    top: 0;
    left: 100%;
  }
  50% {
    top: 100%;
    left: 100%;
  }
  75% {
    top: 100%;
    left: 0;
  }
  100% {
    top: 0;
    left: 0;
  }
}
</style>
