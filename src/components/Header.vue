<template>
  <header
    style="background-color: rgba(0, 0, 0, 0.1)"
    class="flex justify-between bg-transparent text-white  fixed top-0 left-0 z-50 h-[162px] max-w-[1920px] w-full mx-auto">
    <div class="logo max-md:ml-[16px] md:ml-[79px] mt-[20px]">
      <img src="../../public/images/White_logo.png" alt="Logo" class="w-full">
    </div>

    <div class="hamburger-menu md:hidden cursor-pointer" @click="toggleMobileMenu">
      <img src="/images/icon/menu.png" alt="Menu" class="w-[40px] max-md:mr-[14px] max-md:mt-[48px]">
    </div>

    <nav :class="['nav-menu, z-40 mr-[80px] mt-[40px]', { 'hidden': !showMobileMenu }]"
      class="flex text-[14px] uppercase font-[700] md:flex md:relative md:bg-transparent md:text-white">
      <a href="#about-us"
        class="font-montserrat font-bold text-[14px] leading-[17.5px] tracking-[0px] mx-[42px] py-[12px] ">{{
          $t('aboutUs') }}</a>
      <a href="#games"
        class="font-montserrat font-bold text-[14px] leading-[17.5px] tracking-[0px] mx-[42px] py-[12px] ">{{
          $t('games') }}</a>
      <a href="#partners"
        class="font-montserrat font-bold text-[14px] leading-[17.5px] tracking-[0px] mx-[42px] py-[12px] ">{{
          $t('partners') }}</a>
      <a href="#contact"
        class="font-montserrat font-bold text-[14px] leading-[17.5px] tracking-[0px] mx-[42px] py-[12px] ">{{
          $t('contactUs') }}</a>
      <button :class="['absolute right-5 top-5', { 'hidden': !showMobileMenu }]" @click="toggleMobileMenu"><img
          src="/images/icon/close.png" alt="Menu" class="mx-[40px]"></button>
      <div class="relative ml-[42px] py-[2px]">
        <div @click="toggleDropdown" class="cursor-pointer flex items-center gap-2">
          <img :src="currentLang === 'en' ? '/images/united-states.png' : '/images/vietnam.png'" alt="Flag"
            class="h-[40px]" /><span class="text-[10px]">&#9660;</span>
        </div>
        <div v-if="showDropdown"
          class="absolute text-[10px] capitalize right-0 top-10 w-[156px] h-[81px] bg-white text-black border rounded-md shadow-md mt-1">
          <div @click="changeLanguage('en')"
            class="flex items-center gap-2 px-4  cursor-pointer hover:bg-gray-100 hover:rounded-md">
            <div class="w-[10px]"><span class="text-[20px] mr-2" v-show="currentLang == 'en'">&#10004;</span></div>
            <img src="/images/united-states.png" alt="English Flag" class="h-[40px]" />
            English
          </div>
          <div @click="changeLanguage('vi')"
            class="flex items-center gap-2 px-4 cursor-pointer hover:bg-gray-100 hover:rounded-md">
            <div class="w-[10px]"><span class="text-[20px] mr-2" v-show="currentLang == 'vi'">&#10004;</span></div>
            <img src="/images/vietnam.png" alt="Vietnamese Flag" class="h-[40px]" />
            Tiếng Việt
          </div>
        </div>
      </div>
    </nav>
    <nav
      class="absolute top-0 left-0 w-full h-screen bg-white text-black z-51 flex flex-col items-center justify-center shadow-lg "
      v-if="showMobileMenu">
      <button class="absolute top-5 right-5" @click="toggleMobileMenu">
        <img src="/images/icon/close.png" alt="Close" class="w-8 h-8">
      </button>

      <ul class="text-center">
        <li class="py-4 text-lg font-bold">
          <a href="#about-us" @click="toggleMobileMenu">{{ $t('aboutUs') }}</a>
        </li>
        <li class="py-4 text-lg font-bold">
          <a href="#games" @click="toggleMobileMenu">{{ $t('games') }}</a>
        </li>
        <li class="py-4 text-lg font-bold">
          <a href="#partners" @click="toggleMobileMenu">{{ $t('partners') }}</a>
        </li>
        <li class="py-4 text-lg font-bold">
          <a href="#contact" @click="toggleMobileMenu">{{ $t('contactUs') }}</a>
        </li>
      </ul>

      <div class="mt-6">
        <div @click="toggleDropdown" class="cursor-pointer flex items-center gap-2">
          <img :src="currentLang === 'en' ? '/images/united-states.png' : '/images/vietnam.png'" alt="Flag"
            class="h-6" /><span class="text-sm">&#9660;</span>
        </div>
        <div v-if="showDropdown" class="absolute bg-gray-100 rounded shadow-md p-2 mt-2">
          <div @click="changeLanguage('en')" class="p-2 cursor-pointer hover:bg-gray-200 flex items-center gap-2">
            <img src="/images/united-states.png" alt="English Flag" class="h-6" /> English
          </div>
          <div @click="changeLanguage('vi')" class="p-2 cursor-pointer hover:bg-gray-200 flex items-center gap-2">
            <img src="/images/vietnam.png" alt="Vietnamese Flag" class="h-6" /> Tiếng Việt
          </div>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue';
import { useI18n } from 'vue-i18n';

const { locale, setLocale } = useI18n();

const currentLang = ref(locale.value);
const showDropdown = ref(false);
const showMobileMenu = ref(false);

const toggleDropdown = () => {
  showDropdown.value = !showDropdown.value;
};

const changeLanguage = async (lang) => {
  await setLocale(lang);
  currentLang.value = lang;
  locale.value = lang;
  showDropdown.value = false;
};


const toggleMobileMenu = () => {
  showMobileMenu.value = !showMobileMenu.value;
};
</script>

<style scoped>
.hamburger-menu {
  display: block;
}

.nav-menu {
  display: none;
}

@media (min-width: 768px) {
  .hamburger-menu {
    display: none;
  }

  .nav-menu {
    display: flex;
  }
}
</style>
