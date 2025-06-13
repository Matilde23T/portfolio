<script setup >
import { Swiper, SwiperSlide } from "swiper/vue";
import { EffectFade } from 'swiper/modules';
import "swiper/css";
import { Autoplay} from "swiper/modules";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import img1 from '@/assets/img/isole.jpg'
import img2 from '@/assets/img/giappone.jpg'
import img3 from '@/assets/img/mare-montagna.jpg'
import img4 from '@/assets/img/edimburgo.jpg'
import img5 from '@/assets/img/peru.jpg'
import img6 from '@/assets/img/egitto.jpg'
import img7 from '@/assets/img/diadelosmuertos.jpg'
import img8 from '@/assets/img/auroraboreale.jpg'
import img9 from '@/assets/img/barriera corallina.jpg'

const photos = [
    img1,
    img3,
    img9,
    img6,
    img5,
    img2,
    img4,
    img7,
    img8
];


</script>

<template>
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
       <slot name="navbar"></slot>
       <slot name="other"></slot>
       <slot name="footer"></slot>
    </div>
    </div>


    
    
</template>


<style scoped>

.container{
    width: 100%;
    height: auto;
    
}


.swiper img{
   
    filter: brightness(0.6);
}

.swiper{
    overflow: visible;
   
}

.swiper-slide img{
    width: 100%;
    height: 100vh;
    
}

.overlay-content {
  position: absolute;
  top: 0;
  left: 0;
  /*transform: translateX(-50%);
  color: white;
  text-align: center;*/
  z-index: 10;
  
  width: 100%;
}



</style>