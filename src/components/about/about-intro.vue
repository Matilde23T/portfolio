<script setup>
import img1 from '@/assets/img/about-intro/1.jpg'
import img2 from '@/assets/img/about-intro/2.jpg'
import img3 from '@/assets/img/about-intro/3.jpg'

</script>




<template>
    <div class="intro">
        <img :src="img2" class="img">

         <div class="overlay-content">
        
        <slot name="navbar"></slot>
        <slot name="testo-intro"></slot>
    </div>
    </div>
</template>



<style scoped>
.intro{
    width: 100%;
    background-color: green;
    height: auto;
}

.img{
    width: 100%;
    height: 70vh;
     filter: brightness(0.6);
}


.overlay-content{
     position: absolute;
  top: 0;
  left: 0;
  /*transform: translateX(-50%);
  color: white;
  text-align: center;*/
  z-index: 10;

  height: 70vh;
  width: 100%;
  align-content: center;
}
</style>