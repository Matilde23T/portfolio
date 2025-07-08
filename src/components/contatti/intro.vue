<template>
    <div class="intro-section">
        
        <div class="logo">
            <img :src="logo" class="img">
        

       
        </div>
        <div class="overlay-content">
        
        <slot name="navbar"></slot>
        
    </div>
    </div>


</template>

<style scoped>

.overlay-content{
     position: absolute;
  top: 0;
  left: 0;
  
  z-index: 10;
  
  width: 100%;
}

.intro-section{
    width: 100%;
    height: auto;

   text-align: center;
   padding-top: 40px;
   padding-bottom: 60px;
   background: linear-gradient(135deg, #4BA3C7, #D2F2F8);




}

.logo{
   
    width: 100%;
    text-align: center;
    height: auto;
   
}

.img{
width: 200px;

}






@media (max-width: 768px){
.intro-section{
    width: 100%;
    height:auto;
padding-top: 20px;
   padding-bottom: 20px;
   
   
}



.img{
width: 130px;
}


}


@media (min-width: 800px) and (max-width:1280px){
    .intro-section{
   height:auto;
   
   
}

.logo{
   
    
   
    height: auto;
   
}

.img{
width: 200px;
}

.titolo{
    
    width: 100%;
    height: auto;
     padding-top: 10px;
    font-size: 23px;
    

}
}



</style>

<script setup>

import logo from '@/assets/img/logo/logo (2).png'
import { reactive } from 'vue'

const form = reactive({
  name: '',
  email: '',
  message: ''
})

function handleSubmit() {
  alert('sito non attivo')
  // Puoi aggiungere qui una chiamata API o una validazione
}

</script>