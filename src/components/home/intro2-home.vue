<script setup>
import foto from '@/assets/img/home/foto.jpg'
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'

// Percorsi immagine (usa `@/assets/...` o `new URL(..., import.meta.url)` se necessario)
const imgIntroLarge = new URL('@/assets/img/home/foto.jpg', import.meta.url).href
const imgIntroMobile = new URL('@/assets/img/home/foto-cut.jpg', import.meta.url).href

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
    <div class="container">
        <div class="image">
<img :src="responsiveImage" class="immagine">
<div class="overlay-content">
<div class="descrizione">
    <p class="testo">"I tuoi sogni, la nostra missione. Wayfinder Travel è un team di esploratori e professionisti del viaggio che lavora insieme per trovare la meta perfetta per ogni tuo desiderio, dal relax all’avventura. 
        <br>Ogni destinazione è stata vissuta e approvata in prima persona dal nostro team.</p>
    <p class="link"><RouterLink to="/about">Vieni a scoprire il nostro team</RouterLink></p>
</div>
</div>
        </div>
    </div>
</template>

<style scoped>


.image {
  position: relative;
}
.container{
    width: 100%;
    
    height: auto;
    margin-bottom: 30px;
}

.immagine{
    width: 100%;
    height: 720px;
    filter: brightness(0.5);
}
.overlay-content{
   position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  
  justify-content: center;
}

.descrizione{
    
    width: 90%;
    height: auto;
    padding: 20px 30px;
    line-height: 60px;
    margin-top: 50px;
}
.testo {
  color: #fff;
  font-size: 28px;
  font-family: "DM Serif Text", serif;
  font-family: "DM Sans", sans-serif;
  text-align: center;
}

.link a{
    text-decoration: none;
    color: #fff;
}
.link{
    
  font-size: 35px;
  font-family: "DM Serif Text", serif;
  font-family: "DM Sans", sans-serif;
  text-align: center;
  margin-top: 80px;
  font-weight: 600;
}
.immagine{
    width: 100%;
    height: 720px;
    filter: brightness(0.5);
}
.overlay-content{
   position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  height: 100%;
  display: flex;
  
  justify-content: center;
}

.descrizione{
    
    width: 90%;
    height: auto;
    padding: 20px 30px;
    line-height: 60px;
    margin-top: 50px;
}
.testo {
  color: #fff;
  font-size: 28px;
  font-family: "DM Serif Text", serif;
  font-family: "DM Sans", sans-serif;
  text-align: center;
}

.link a{
    text-decoration: none;
    color: #fff;
}
.link{
    
  font-size: 35px;
  font-family: "DM Serif Text", serif;
  font-family: "DM Sans", sans-serif;
  text-align: center;
  margin-top: 80px;
  font-weight: 600;
}
@media (max-width:768px){
    


.immagine{
    
    height: 700px;
   
}


.descrizione{
    
    width: 100%;
    height: auto;
    padding: 20px 10px;
    line-height: 50px;
    margin-top: 30px;
}
.testo {
  color: #fff;
  font-size: 20px;
  font-family: "DM Serif Text", serif;
  font-family: "DM Sans", sans-serif;
  text-align: left;
}


.link{
    
  font-size: 28px;
  font-family: "DM Serif Text", serif;
  font-family: "DM Sans", sans-serif;
  text-align: center;
  margin-top: 50px;
  font-weight: 700;
}
}
</style>