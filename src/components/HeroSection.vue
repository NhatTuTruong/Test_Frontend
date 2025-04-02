<template>
  <HeaderComponent />
  <div class="hero-section relative h-[1018px] bg-cover bg-center flex flex-col items-center text-white max-w-[1920px] w-full mx-auto max-md:px-[16px]">
    <div class="text-center z-10 frame-time">
      <h1 class="font-playfair font-black text-[80px] leading-[120px] tracking-[0.6px] text-center mt-[294px] max-md:mt-[92px] max-md:text-[40px]">{{ $t('comingSoon') }}</h1>
      <div class="gap-6 mb-4 flex justify-center mt-[21px]">
        <div class="bg-white rounded-[20px] flex justify-center content-between max-w-[756px] max-h-[149.9px] w-full h-full py-[26px] px-[39px]">
          <div v-for="(value, label, index) in timeLeft" :key="label"
            class="text-black leading-[64px] tracking-[4.8px] text-center rounded-md flex w-full justify-center">
            <div class="">
              <span class="text-[60px] max-md:text-[36px] font-playfair font-bold font-playfair">{{ value }}</span>
              <div class="capitalize font-montserrat font-bold text-[15.64px] max-md:text-[12px] leading-[100%] tracking-[-0.65px] text-center align-middle">{{ label }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="mb-4 mt-[97px]">
        <p class="w-[60%] text-[18px] max-md:text-[12px] leading-[126%] tracking-[0px] text-center justify-center mx-auto des_banner">{{ $t('des_banner') }}</p>
      </div>
      <div class="flex items-center border rounded-md overflow-hidden mt-[32px] max-w-[560px] max-h-[56px] mx-auto">
        <input type="email" :placeholder="$t('text_input')"
          class="p-2  flex-1 outline-none text-black bg-white placeholder-gray-300 w-full h-[56px]">
        <button class="text-black px-4 bg-white cursor-pointer h-[56px]">➔</button>
      </div>
      <img class="z-2 absolute top-[100px] left-[-20px] max-w-[890px] w-full max-h-[890px] max-2xl:max-h-[600px] max-2xl:max-w-[600px] max-2xl:top-[400px] h-auto object-cover" src="/images/Fairy.png" alt="Fairy.png">
    </div>
    <svg class="absolute bottom-[-2px] left-0 w-full z-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 350">
      <path fill="#ffffff" fill-opacity="1" d="M0,170 C400,400 1040,400 1440,170 V650 H0 Z"></path>
    </svg>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import HeaderComponent from './Header.vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();


const timeLeft = ref({ days: 0, hours: 0, minutes: 0, seconds: 0 });

const countdown = () => {
  const targetDate = new Date('2025-04-28T10:59:59').getTime();

  const updateCountdown = () => {
    const now = new Date().getTime();
    const timeDifference = targetDate - now;

    if (timeDifference <= 0) {
      clearInterval(timer);
      return;
    }

    timeLeft.value = {
      [t('days')]: Math.floor(timeDifference / (1000 * 60 * 60 * 24)),
      [t('hours')]: Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
      [t('minutes')]: Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60)),
      [t('seconds')]: Math.floor((timeDifference % (1000 * 60)) / 1000),
    };
  };

  const timer = setInterval(updateCountdown, 1000);
  updateCountdown();

  onUnmounted(() => clearInterval(timer));
};

onMounted(countdown);

useHead({
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800&display=swap"
    }
  ]
});
</script>

<style scoped>
.hero-section {
  color: #fff;
  background-image: url('/images/Rectangle 3462.png');
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
}



@media (max-width: 768px) {
  .hero-section {
    height: 110vh;
  }

  .hero-section img {
    display: none;
  }

  .text-center h1 {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }

  .gap-6 {
    gap: 1rem;
  }

  .bg-white .rounded-md {
    max-width: 100%;
    width: 100%;
  }

  .text-2xl {
    font-size: 1.5rem;
  }


  .flex.items-center {
    width: 100%;
  }

  input[type="email"] {
    width: 100%;
    border-bottom-left-radius: 6px;
    border-bottom-right-radius: 6px;
  }

  .z-2 {
    max-width: 300px;
    top: 15%;
  }

  .svg {
    bottom: -5px;
  }

  .des_banner{
    width: 100%;
  }
}
</style>