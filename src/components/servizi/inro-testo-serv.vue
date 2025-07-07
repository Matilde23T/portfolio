<script setup>
import logo from '@/assets/img/logo/logo (2).png'
</script>




<template>
    <div class="image">
<img :src="logo" class="immagine">
    </div>
    <div class="testobox">
<div class="testo">
    <p>Vivi esperienze uniche con Wayfinder</p>
</div>
</div>

</template>


<style scoped>
.image{
    width: 100%;
    
    text-align: center;
    
}
.immagine{
    width: 150px;
}
.testo{
    width: 100%;
   
    
    font-size: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
     font-family: "Caprasimo", serif;
  font-weight: 400;
  text-align: center;
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
}
.testobox{
    width: 100%;
    
    height: 350px;
    display: flex;
    
    align-items: center;
    margin-top: 40px;
    bottom: 0;
}

@media (max-width:768px){
    .image{
    width: 100%;
  
   
    
}
.immagine{
    width: 100px;
}
.testo{
   
   font-size: 30px;
   line-height: 50px;
    
}
.testobox{
    width: 100%;
   
    height: 400px;
    display: flex;
    
    align-items: center;
    margin-top: 0px;
    bottom: 0;
}
}

@media (min-width: 800px) and (max-width:1280px){
.image{
    width: 100%;  
}
.immagine{
    width: 150px;
}
.testo{
    
font-size: 60px;
  
}
.testobox{
height: 500px;
    
}



}

</style>