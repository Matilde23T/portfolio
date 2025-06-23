<script setup>

import imgIntro3 from  '@/assets/img/viaggi-intro/intro3.jpg'
import imgIntro4 from  '@/assets/img/viaggi-intro/intro4.jpg'
import imgIntro5 from  '@/assets/img/viaggi-intro/intro5.jpg'


</script>

<template>
<div class="image-container">
    <img :src="imgIntro5" class="img">

    <div class="overlay-content">
        
        <slot name="navbar"></slot>
        <slot name="testo-intro"></slot>
    </div>
</div>
</template>


<style scoped>
.image-container{
   
    width: 100%;
    height: auto;
    margin: 0;
}

.img{
    width: 100%;
    height: 600px;
     filter: brightness(0.8);
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
      height: 300px;
     filter: brightness(0.8);
      display: block;
}

.image-container{
    
    
    height: 300px;
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