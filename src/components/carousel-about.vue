<script setup >
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade } from 'swiper/modules';
import "swiper/css";
import { Autoplay} from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";

import img10 from '@/assets/img/trekking.jpg'
import img11 from '@/assets/img/londra.jpg'
import img12 from '@/assets/img/safari.jpg'
import img13 from '@/assets/img/thailandia.jpg'
import img14 from '@/assets/img/snorkeling.jpg'



const photos = [
   img10,
   img11,
   img12,
   img13,
   img14
];


</script>

<template>
    <div class="slide-img">
        
    <div class="container">

        
    <Swiper :modules = "[EffectFade, Autoplay]" 
    :autoplay="{delay: 3000}"
    effect="fade"
    :loop="true"
   >
        <SwiperSlide v-for="(img, i) in photos" :key="i">
            <img :src="img" alt="" />
        </SwiperSlide>
    </Swiper>

    <div class="overlay-content">
        <div class="testo">
        <p class="title">"Non ricordiamo i giorni, ricordiamo i momenti.” </p>
        
<p class="sub-title"> - Cesare Pavese</p>
      </div>
      
    </div>
    </div>

</div>
    
    
</template>

<style scoped>

.slide-img {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
  
  padding: 0; 
}

.container {
  width:90%;        
  max-width: 1400px;  
  
  box-sizing: border-box;
  position: relative;
}
.swiper img{
   
    filter: brightness(0.6);
}

.swiper{
    overflow: visible;
   
}

.swiper-slide img{
    width: 100%;
    height:500px;
    
}

.overlay-content {
  position: absolute;
  top: 0;
  left: 0;
  /*transform: translateX(-50%);
  color: white;*/
  /*text-align: center;*/
 
  z-index: 10;
  
  width: 100%;
  height: 500px;
  text-align: center;
}

.testo{
     position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 2rem;
 font-family: "Courgette", cursive;
  font-weight: 400;
  color: #fff;
}

</style>