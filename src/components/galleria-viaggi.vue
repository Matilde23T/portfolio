<script setup>

import img1 from '@/assets/img/clienti-foto/1.jpeg'
import img2 from '@/assets/img/clienti-foto/2.jpg'
import img3 from '@/assets/img/clienti-foto/3.jpg'
import img4 from '@/assets/img/clienti-foto/4.jpg'
import img5 from '@/assets/img/clienti-foto/5.jpg'
import img6 from '@/assets/img/clienti-foto/6.jpg'
import img7 from '@/assets/img/clienti-foto/7.jpg'
import img8 from '@/assets/img/clienti-foto/8.jpg'
import img9 from '@/assets/img/clienti-foto/10.jpg'
import img10 from '@/assets/img/clienti-foto/11.jpg'
import img11 from '@/assets/img/clienti-foto/12.jpg'
import img12 from '@/assets/img/clienti-foto/13.jpg'
import img13 from '@/assets/img/clienti-foto/14.jpg'
import img14 from '@/assets/img/clienti-foto/15.jpg'
import img15 from '@/assets/img/clienti-foto/16.jpg'
import img16 from '@/assets/img/clienti-foto/17.jpg'
import img17 from '@/assets/img/clienti-foto/18.jpg'
import img18 from '@/assets/img/clienti-foto/19.jpg'
import img19 from '@/assets/img/clienti-foto/20.jpg'
import img20 from '@/assets/img/clienti-foto/21.jpg'
import img21 from '@/assets/img/clienti-foto/22.jpg'
import img22 from '@/assets/img/clienti-foto/23.jpg'
import img23 from '@/assets/img/clienti-foto/24.jpg'
import img24 from '@/assets/img/clienti-foto/25.jpg'
import img25 from '@/assets/img/clienti-foto/26.png'
import img26 from '@/assets/img/clienti-foto/27.jpg'
import img27 from '@/assets/img/clienti-foto/28.jpg'
import img28 from '@/assets/img/clienti-foto/29.jpg'
import img29 from '@/assets/img/clienti-foto/30.jpg'
import img30 from '@/assets/img/clienti-foto/31.jpg'

 import { Swiper, SwiperSlide } from 'swiper/vue';

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-flip';
  import 'swiper/css/pagination';
  import 'swiper/css/navigation';

 

  // import required modules
  import { EffectFlip, Pagination, Navigation } from 'swiper/modules';

  
  const photos = [
    img1,
    img2,
    img3,
    img4,
    img5,
    img6,
    img7,
    img8,
    img9,
    img10,
     img11,
    img12,
    img13,
    img14,
    img15,
    img16,
    img17,
    img18,
    img19,
    img20,
    img21,
    img22,
    img23,
    img24,
    img25,
    img26,
    img27,
    img28,
    img29,
    img30
  ]



</script>







<template>
<section class="galleria">

    <div class="container">
        <span class="titolo">Scatti dai Nostri Viaggiatori</span>
 <swiper :modules = "[EffectFlip, Pagination, Navigation]"
    :effect="'flip'"
    :grabCursor="true"
    :pagination="true"
    :navigation="true"
    
    
  >
    <swiper-slide v-for="(img, i) in photos" :key="i" >
        <img :src="img" alt="" />
      </swiper-slide>
        
  
  </swiper>

 </div>
</section>
</template>

<style scoped>

.galleria{
    width: 100%;
    height: auto;
    
    display: flex;
    justify-content: center;
    margin-bottom: 50px;
}

.container{
    width: 80rem;
    height: auto;
    
    margin-top: 30px;
    text-align: center;
    padding-top: 20px;
}
.swiper-slide img{
    width: 60rem;
    height:auto;
    
}
.swiper{
    width: 60rem;
    margin-top: 50px;
}

.titolo{
    width: 100%;
   
    font-family: "DM Sans", sans-serif;
    font-size: 40px;
    font-weight: 700;
    text-align: center;
    
    
}
</style>