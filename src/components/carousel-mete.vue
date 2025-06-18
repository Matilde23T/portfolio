<template>
   <div class="container-crl">
  <Swiper :modules="[EffectCoverflow, Pagination, Autoplay]"
  :autoplay="{delay: 5000}"
    :pagination="true"
   :effect="'coverflow'"
  :grabCursor="true"
  :centeredSlides="true"
  :slidesPerView="'auto'"
  :coverflowEffect="{
    rotate: 50,
    stretch: 0,
    depth: 100,
    modifier: 1,
    slideShadows: true,
    
  }"

   
  
   >
    <swiper-slide>
        <img :src="img1" />
        </swiper-slide>
        <swiper-slide
      ><img
        :src="img2" /></swiper-slide
    ><swiper-slide
      ><img
       :src="img3" /></swiper-slide
    ><swiper-slide
      ><img
       :src="img4" /></swiper-slide
    ><swiper-slide
      ><img
        :src="img5" /></swiper-slide
    ><swiper-slide
      ><img
        :src="img6" /></swiper-slide
    ><swiper-slide
      ><img
       :src="img7" /></swiper-slide
    ><swiper-slide
      ><img
        :src="img8" /></swiper-slide
    ><swiper-slide
      ><img :src="img9"
    /></swiper-slide>
   <swiper-slide
      ><img :src="img10"
    /></swiper-slide>
  </swiper>

   </div>
</template>

<script setup >
import { Swiper, SwiperSlide } from 'swiper/vue';
import { Autoplay} from "swiper/modules";
 

  // Import Swiper styles
  import 'swiper/css';

  import 'swiper/css/effect-coverflow';
  import 'swiper/css/pagination';



  
  

  // import required modules
  import { EffectCoverflow, Pagination } from 'swiper/modules';



import img1 from '@/assets/img/about-crl/azzorre-crl.jpg'
import img2 from '@/assets/img/about-crl/edimburgo-crl.jpg'
import img3 from '@/assets/img/about-crl/egitto-crl.jpg'
import img4 from '@/assets/img/about-crl/giappone-crl.jpg'
import img5 from '@/assets/img/about-crl/grecia-crl.jpg'
import img6 from '@/assets/img/about-crl/india-crl.jpg'
import img7 from '@/assets/img/about-crl/kenya-crl.jpg'
import img8 from '@/assets/img/about-crl/newyork-crl.jpg'
import img9 from '@/assets/img/about-crl/norvegia-crl.jpg'
import img10 from '@/assets/img/about-crl/yellowstone-crl.jpg'



 

</script>

<style scoped>


.container-crl{
    width: 90%;
    
    height: auto;
    
}
.swiper{
     width: 100%;
  height: 600px;
 padding-top: 40px;
  
 
}

.swiper-slide img{
    width: 800px;
    height:500px;
   
}

.swiper-slide{

width: 800px;
height: 500px;

 
}




@media (max-width: 768px){
  .container-crl{
    width: 90%;
    
}
.swiper{
  width: 100%;
  height: 330px;
  
  
}

.swiper-slide img{
    width:400px;
    height:250px;
    
}

.swiper-slide{

width:400px;
height: 250px;
}
}

@media (width:344px)  {
.swiper{
  width: 100%;
  height: 300px;
  
  
 
}
.swiper-slide img{
    width:350px;
    height:220px;
    
}

.swiper-slide{
   width: 350px;
   height: 220px;
    
  }
}


@media (width:360px)  {
.swiper{
  width: 100%;
  height: 300px;
  
  
 
}
.swiper-slide img{
    width:350px;
    height:220px;
    
}

.swiper-slide{
   width: 350px;
   height: 220px;
    
  }
}

@media (width:540px)  {
.swiper{
  width: 100%;
  height: 300px;
  
 
 
}
.swiper-slide img{
    width:350px;
    height:220px;
    
}

.swiper-slide{
   width: 350px;
   height: 220px;
    
  }
}


@media (min-width:800px) and (max-width:920px){ 
    

   .swiper{
    
    width: 100%;
    height: 400px;
   
   
   
  }
  .swiper-slide img{
   width: 500px;
   height: 320px;
  }
  

  .swiper-slide{
   width: 500px;
   height: 320px;
   
  }
  
  
}


@media (min-width:1024px) and (max-width:1280px){
  .swiper{
    
    width: 100%;
    height: 480px;
   
  }
  .swiper-slide img{
   width: 600px;
   height: 400px;
  }

  .swiper-slide{
   width: 600px;
   height: 400px;
    
  }
}
</style>