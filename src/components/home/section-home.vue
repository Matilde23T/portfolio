<script setup>

import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// Percorsi immagine (usa `@/assets/...` o `new URL(..., import.meta.url)` se necessario)
const imgIntroLarge = new URL('@/assets/img/home/foto.jpg', import.meta.url).href
const imgIntroMobile = new URL('@/assets/img/home/foto-cut.jpg', import.meta.url).href

const windowWidth = ref(window.innerWidth)

const  responsiveImageSection  = computed(() => {
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
  
<div class="sectionHome">
        <img :src="responsiveImageSection" class="image" loading="lazy"/>
<div class="overlay-box">
      <slot name="contenuto-riquadro"></slot>
    </div>
    </div>
    
</template>



<style scoped>
.sectionHome {
  position: relative;
  width: 100%;
  height: auto;
  margin-bottom: 50px;
}

.image {
  width: 100%;
  height: 700px;
  object-fit: cover;
  filter: brightness(0.7);



}



.overlay-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 700px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.4); /* semi-trasparente */
  padding: 2rem;
  box-sizing: border-box;
  text-align: center;
 
  
}

@media (max-width:768px){
  .image {
  width: 100%;
  height: 600px;
  object-fit: cover;
  filter: brightness(0.7);
}

.overlay-box {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 600px;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  background-color: rgba(0, 0, 0, 0.4); /* semi-trasparente */
  padding: 0;
  box-sizing: border-box;
  text-align: center;
 
  
}
}


</style>