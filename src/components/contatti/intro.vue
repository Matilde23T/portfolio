<template>
    <div class="intro-section">
        
        <div class="logo">
            <img :src="logo" class="img">
        </div>

        <div class="titolo">
<h1>Pagina contatti</h1>
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
  /*transform: translateX(-50%);
  color: white;
  text-align: center;*/
  z-index: 10;
  
  width: 100%;
}

.intro-section{
    width: 100%;
    height: 29vh;
    background-color: rgb(58, 122, 207);
   display: flex;
   justify-content: center;
   flex-direction: column;
   justify-content: center;
}

.logo{
   
    width: 100%;
    text-align: center;
    height: 40%;
}

.img{
width: 200px;
}

.titolo{
    
    width: 100%;
    height: 50%;
    text-align: center;
    font-size: 35px;
    padding: 40px;
     font-family: "DM Sans", sans-serif;

}




@media (max-width: 768px){
.intro-section{
    width: 100%;
    height:auto;
   
   display: flex;
   justify-content: center;
   flex-direction: column;
   justify-content: center;
}

.logo{
   
    width: 100%;
   
    height: auto;
   
}

.img{
width: 100px;
}

.titolo{
    
    width: 100%;
    height: auto;
    
    font-size: 17px;
    padding-top: 10px;
     

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