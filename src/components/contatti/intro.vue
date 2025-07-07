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
    background-color: rgb(58, 122, 207);
   text-align: center;
   padding-top: 40px;
   padding-bottom: 60px;

   
   
background-image: linear-gradient( 98.7deg,  rgba(6,238,243,1) 10.6%, rgba(34,126,209,1) 72.2%, rgba(35,44,51,1) 122.5%, rgba(35,44,51,1) 122.5% );
background: linear-gradient(135deg, #E0F7FA, #B2EBF2, #80DEEA);
background: linear-gradient(135deg, #FFE0B2, #FFCCBC, #FFAB91);
background: radial-gradient(circle, #00BCD4 0%, #E0F7FA 100%);
background: linear-gradient(135deg, #001F3F, #007C91);
background: linear-gradient(135deg, #2E2E2E, #000000);
background: linear-gradient(135deg, #00BCD4, #004D5E);

background: linear-gradient(135deg, #00BCD4, #FF6F00);
background: linear-gradient(135deg, #D0F1F7, #84C8DB);
background: linear-gradient(135deg, #A0D3E8, #5B9EA5);
background: linear-gradient(135deg, #E6F4F6, #A8DADC);
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