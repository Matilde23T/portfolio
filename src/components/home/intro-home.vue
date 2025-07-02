<script setup>

import img2 from '@/assets/img/home/2.jpg'

import img4 from '@/assets/img/home/4.jpg'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// Percorsi immagine (usa `@/assets/...` o `new URL(..., import.meta.url)` se necessario)
const imgIntroLarge = new URL('@/assets/img/home/2.jpg', import.meta.url).href
const imgIntroMobile = new URL('@/assets/img/home/2-cut.jpg', import.meta.url).href

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

    <div class="intro">
        <img :src="responsiveImage" class="img">

         <div class="overlay-content">
        
        <slot name="navbar"></slot>
        <slot name="testo-intro-home"></slot>
    </div>
    </div>
</template>



<style scoped>
.intro{
    width: 100%;
    
    height: auto;
}

.img{
    width: 100%;
    height: 700px;
     filter: brightness(0.7);
}


.overlay-content{
     position: absolute;
  top: 0;
  left: 0;
  /*transform: translateX(-50%);
  color: white;
  text-align: center;*/
  z-index: 10;

  height:auto;
  width: 100%;
  align-content: center;
}

@media (max-width:768px){
    .img{
    width: 100%;
    height: 600px;
     filter: brightness(0.7);
}

}
</style>


