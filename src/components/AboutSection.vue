<template>
  <div class="about-us mt-[128px] max-mt-[40px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 text-left relative max-w-[1160px] w-full ">
    <div class="bonus hidden z-40">
      <img class="z-2 mt-[-200px] max-w-[350px] mx-auto h-auto object-cover" src="/images/Fairy.png" alt="">
    </div>
    <div>
      <h2 class="text-5xl font-extrabold leading-[60px] tracking-[3.6px] text-black font-playfair max-md:text-[40px] max-md:mx-[16px]">{{ $t('aboutUs') }}</h2>
      <p class="text-base font-normal leading-[140%] tracking-normal pt-[40px] text-[#757575] max-md:text-[14px] max-md:mx-[16px]">
        {{ $t('des_about') }}
      </p>
      <div class="pt-[79.29px] max-md:pt-[39px] user">
        <span class="font-montserrat text-[80px] font-bold leading-none tracking-[-1px] text-[#079BEE] max-md:text-[44px] max-md:mx-[16px]">600<span class="text-[20px] max-md:text-[20px]">M</span>+</span>
        <span class="block text-lg text-black font-bold mt-[4px] max-md:text-[24px] max-md:mx-[16px]">{{ $t('users') }}</span>
      </div>
      <div class="pt-[39px] max-md:pt-[39px] games">
        <span class="font-montserrat text-[80px] font-bold leading-none tracking-[-1px] text-[#079BEE] max-md:text-[44px] max-md:mx-[16px]">135+</span>
        <span class="block text-lg text-black font-bold mt-[4px] max-md:text-[24px] max-md:mx-[16px]">{{ $t('games') }}</span>
      </div>
    </div>

    <div class="bg-[#EEEEEE] py-[113px] px-[75px] max-md:py-[40px] max-md:px-[16px]  rounded-[5px] text-black">
      <div class="mb-[40px]">
        <div class="flex justify-center">
          <div class="p-2 rounded-full mr-2"><img class="w-15" src="/images/icon/Group 12.png" alt=""></div>
          <div>
            <h1 class="text-[24px] font-bold leading-[30px] tracking-normal">{{ $t('24Hour') }}</h1>
            <p class="text-[#757575] text-sm font-normal leading-[140%] tracking-normal pt-[8.08px]">{{ $t('24HourDescription') }}</p>
          </div>
        </div>
      </div>
      <div class="mb-[40px]">
        <div class="flex justify-center">
          <div class="p-2 rounded-full mr-2"><img class="w-35" src="/images/icon/Group 13.png" alt=""></div>
          <div>
            <h1 class="text-[24px] font-bold leading-[30px] tracking-normal">{{ $t('design') }}</h1>
            <p class="text-[#757575] text-sm font-normal leading-[140%] tracking-normal pt-[8.08px]">{{ $t('designDescription') }}</p>
          </div>
        </div>
      </div>
      <div>
        <div class="flex justify-center">
          <div class="p-2 rounded-full mr-2"><img class="w-35" src="/images/icon/Group 14.png" alt=""></div>
          <div>
            <h1 class="text-[24px] font-bold leading-[30px] tracking-normal">{{ $t('team') }}</h1>
            <p class="text-[#757575] text-sm font-normal leading-[140%] tracking-normal pt-[8.08px]">{{ $t('teamDescription') }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="max-w-[1160px] w-full mx-auto flex flex-col items-center px-1">
    <img src="/images/Illustrator.png" alt="Witch Character"
      class="w-48 sm:w-60 md:w-[533px] max-md:w-[300px] mb-4 animate-move relative bottom-[-100px] max-md:bottom-[-30px]" />
    <img src="/images/Pin-map.png" alt="Map Illustration" class="w-full" />
  </div>
</template>

<script setup>
</script>

<style scoped>
.about-us {
  background-color: #fff;
}

@keyframes move {
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(150px);
  }

  50% {
    transform: translateX(0);
  }

  75% {
    transform: translateX(-150px);
  }

  100% {
    transform: translateX(0);
  }
}

.animate-move {
  animation: move 5s ease-in-out infinite;
}

@media (max-width: 768px) {
  .bonus {
    display: block;
  }

  .part2 {
    padding: 10px 0px;
  }

  .user {
    float: left;
  }

  .games {
    float: right;
  }

  @keyframes move {
  0% {
    transform: translateX(0);
  }

  25% {
    transform: translateX(30px);
  }

  50% {
    transform: translateX(0);
  }

  75% {
    transform: translateX(-30px);
  }

  100% {
    transform: translateX(0);
  }
}
}
</style>