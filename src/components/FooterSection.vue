<template>
  <footer class="footer text-white max-w-[1920px] w-full mx-auto">
    <div class="max-w-[1460px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4 pt-[104px] text-left">

      <div class="flex flex-col items-start logo">
        <img src="/images/White_logo.png" alt="Logo" class="w-[163px] h-auto mb-[40px]">
        <div class="flex">
          <a href="#" class="hover:opacity-75"><img src="/images/icon/tw.png" alt="Twitter" class="w-[40px] mr-[24px]"></a>
          <a href="#" class="hover:opacity-75"><img src="/images/icon/facebook.png" alt="Facebook" class="w-[40px] mr-[24px]"></a>
          <a href="#" class="hover:opacity-75"><img src="/images/icon/in.png" alt="LinkedIn" class="w-[40px]"></a>
        </div>
      </div>

      <div>
        <h3 class="font-montserrat text-[24px] font-bold leading-[30px] tracking-normal mb-[40px]">{{$t('address')}}</h3>
        <div class="flex items-center gap-5 font-montserrat text-sm font-normal leading-[140%] tracking-normal mb-[40px]">
          <img src="/images/icon/Vector8.png" alt="">
          <p>{{$t('addressDetails1')}}<br>{{$t('addressDetails2')}}</p>
        </div>
        <div class="flex items-center gap-5 font-montserrat text-sm font-normal leading-[140%] tracking-normal">
          <img src="/images/icon/Vector6.png" alt="">
          <p>{{$t('contactDetails')}}</p>
        </div>
      </div>

      <div>
        <h3 class="font-montserrat text-[24px] font-bold leading-[30px] tracking-normal mb-[40px]">{{$t('followUs')}}</h3>
        <p class="font-montserrat text-sm font-normal leading-[140%] tracking-normal mb-[12px]">{{$t('newsletter')}}</p>
        <div class="flex items-center mt-4 border border-white rounded-lg overflow-hidden">
          <input type="email" placeholder="Email" class="bg-transparent w-full px-4 py-2 text-white outline-none">
          <button class=" text-white px-4 py-2 hover:bg-gray-200 hover:text-black cursor-pointer">
            ➔
          </button>
        </div>
      </div>
    </div>
    <div class="text-center mt-8 text-sm bg-black py-5">
      2017 Copyright. Policy.
    </div>
  </footer>
</template>
<style scoped>
.footer {
  color: #fff;
  background-image: url('/images/Bg_footer.png');
  position: relative;
  background-size: cover;
  background-repeat: no-repeat;
}

@media (max-width: 768px) {
  .footer .logo {
    align-items: center;
  }
}
</style>