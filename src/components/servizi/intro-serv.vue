<script setup>

import imgIntro3 from  '@/assets/img/viaggi-intro/intro3.jpg'
import imgIntro4 from  '@/assets/img/viaggi-intro/intro4.jpg'
import imgIntro5 from  '@/assets/img/viaggi-intro/intro5.jpg'
import imgIntro5cut from '@/assets/img/viaggi-intro/intro5-cut.jpg'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// Percorsi immagine (usa `@/assets/...` o `new URL(..., import.meta.url)` se necessario)
const imgIntroLarge = new URL('@/assets/img/viaggi-intro/intro10.jpg', import.meta.url).href
const imgIntroMobile = new URL('@/assets/img/viaggi-intro/intro13.jpg', import.meta.url).href

const windowWidth = ref(window.innerWidth)

const  responsiveImage  = computed(() => {
  return windowWidth.value <= 768 ? imgIntroMobile : imgIntroLarge
})

const handleResize = () => {
  windowWidth.value = window.innerWidth
}

onMounted(() => {
  window.addEventListener('resize', handleResize)
})

onBeforeUnmount(() => {
  window.removeEventListener('resize', handleResize)
})

</script>

<template>
<div class="image-container">
    <img :src=" responsiveImage " class="img">

    <div class="overlay-content">
        
        <slot name="navbar"></slot>
        <slot name="testo-intro"></slot>
    </div>
</div>
</template>


<style scoped>
.image-container{
   
    width: 100%;
    height: fit-content;
    margin: 0;
    padding: 0;
    background-color:  #FB9062;
}

.img{
    width: 100%;
    height: auto;
    height: 700px;
     filter: brightness(0.8);
     margin: 0;
}

.overlay-content{
     position: absolute;
  top: 0;
  left: 0;
  /*transform: translateX(-50%);
  color: white;
  text-align: center;*/
  z-index: 10;
  
  width: 100%;
}

@media (max-width:768px){
.img{
    width: 100%;
      height: 100%;
     filter: brightness(0.7);
      display: block;
   max-height: 400px;
}




.overlay-content{
     position: absolute;
  top: 0;
  left: 0;
  /*transform: translateX(-50%);
  color: white;
  text-align: center;*/
  z-index: 10;
  
  width: 100%;
}

}
</style>