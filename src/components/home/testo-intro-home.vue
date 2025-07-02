<script setup>

import logo from '@/assets/img/logo/logo (2).png'
</script>


<template>
      <div class="image">
           <img :src="logo" class="immagine">
        </div>
    <div class="testobox">
       
<div class="testo">
    <p>Parti per emozioni che cambiano la vita
        </p>
</div>
<div class="btn">
    <button class="btn-cat">Scopri il nostro catalogo</button>
</div>
</div>

</template>

<style scoped>
.image{
    width: 100%;
    text-align: center;
    
    margin-top: 20px;
    
}
.immagine{
    width: 200px;
}
.testo{
    width: 100%;
    height: auto;
    
    
    font-size: 66px;
    display: flex;
    justify-content: center;
    align-content: center;
    color: #fff;
     font-family: "Caprasimo", serif;
  font-weight: 400;
  line-height: 90px;
  text-align: center;
}
.testobox{
    width: 100%;
   align-content: center;
    height: 500px;
    justify-content: center;
    margin-top: 0px;
    bottom: 0;
   
}
.btn{
    width: 100%;
    
    margin-top: 60px;
    height: auto;
    text-align: center;
}
.btn-cat{
    padding: 15px 60px ;
    font-size: 25px;
background-color: #f7f7f7;
border: none;
    border-radius: 20px;
     font-family: "DM Sans", sans-serif;
     font-weight: 600;
     background-color: #fbfbfb;
}
@media (max-width:768px){
    .image{
    width: 100%;
    text-align: center;
    
    margin-top: 0px;
    
}
.immagine{
    width:90px;
}
.testo{
   
    
    
    font-size: 40px;
    display: flex;
    justify-content: center;
    align-content: center;
    color: #fff;
     font-family: "Caprasimo", serif;
  font-weight: 400;
  line-height: 60px;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
}
.testobox{
    width: 100%;
   align-content: center;
    height: 500px;
    justify-content: center;
    margin-top: 0px;
    bottom: 0;
   
}
.btn{
    width: 100%;
    
    margin-top: 60px;
    height: auto;
    text-align: center;
}
.btn-cat{
    padding: 15px 40px ;
    font-size: 20px;
background-color: #f7f7f7;
border: none;
    border-radius: 20px;
     font-family: "DM Sans", sans-serif;
     font-weight: 600;
     background-color: #fbfbfb;
}
}
</style>