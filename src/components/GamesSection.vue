
<template>
  <div class="our-games pt-[128px] max-md:pt-[48px] pb-[166px] max-w-[1920px] w-full mx-auto">
    <h2 class="font-playfair text-[60px] max-md:text-[40px] text-black font-black leading-[60px] tracking-[3.6px] text-center flex items-center justify-center">{{$t('ourGames')}}</h2>
    <p class="mt-[24.46px] text-[#757575] max-w-[860px] mx-auto font-montserrat text-sm max-md:text-[14px] font-normal leading-[140%] tracking-normal text-center pb-[80px]">{{$t('ourGamesDescription')}}</p>

    <div class="grid grid-cols-2 md:grid-cols-4 gap-6 px-[80px] max-md:px-[16px] max-w-[1920px] w-full mx-auto">
      <div v-for="(game, index) in games" :key="index" 
           :class="{'relative top-[118px]': index % 4 === 1 || index % 4 === 3}" 
           class="relative bg-white rounded-lg overflow-hidden">
        <div class="h-[560px] max-md:h-[268px] bg-cover bg-center rounded-xl cursor-pointer" :style="{ backgroundImage: `url(${game.image})`, backgroundSize: `cover` }">
          <div class="bg-opacity-50 w-full h-full flex flex-col px-[32px] max-md:px-[8px]">
            <h2 class="font-montserrat text-[48px] max-md:text-[24px] font-bold leading-[60px] tracking-[-1px] flex items-start text-white pt-[384px] max-md:pt-[80px]">{{ game.title }}</h2>
            <p class="font-montserrat text-sm max-md:text-[12px] font-normal leading-[140%] tracking-normal flex items-end text-width pt-[16px]">{{ game.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const games = ref([
  { title: 'E-Space', image: '/images/BG1.png', description: 'An epic space adventure.' },
  { title: 'Kingland', image: '/images/BG2.png', description: 'Embark on a medieval journey.' },
  { title: 'The Last Game', image: '/images/BG3.png', description: 'Survive the final battle.' },
  { title: 'G-Dragon', image: '/images/BG4.png', description: 'Train your dragon and conquer.' },
  { title: 'Pirates', image: '/images/BG5.png', description: 'Sail the seas and find treasures.' },
  { title: 'Witch Party', image: '/images/BG6.png', description: 'Unleash your magical powers.' },
  { title: 'Rocky', image: '/images/BG7.png', description: 'Explore rocky terrains and secrets.' },
  { title: 'Blue Fire', image: '/images/BG8.png', description: 'Master the power of fire and ice.' },
  { title: 'Magic Tree', image: '/images/BG9.png', description: 'A mystical forest of wonders.' },
  { title: 'Aborigines', image: '/images/BG10.png', description: 'Uncover the ancient tribes.' },
  { title: 'Cinderella', image: '/images/BG11.png', description: 'A fairytale reimagined.' },
  { title: 'Egypt Game', image: '/images/BG12.png', description: 'Adventure in the deserts of Egypt.' }
]);
</script>

<style scoped>

</style>
