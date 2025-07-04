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
    <button class="btn-cat"><RouterLink to="/services">Scopri il nostro catalogo</RouterLink></button>
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
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
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
.btn-cat a{
    color: black;
    text-decoration: none;
}
.btn-cat:hover{
    background-color:#dee2e6 ;
    background-color:#e5e5e5 ;
}
@media (max-width:768px){
    .image{
    width: 100%;
    text-align: center;
    
    margin-top: 0px;
    
}
.immagine{
    width:100px;
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
     font-weight: 500;
     background-color: #fbfbfb;
       box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}
}
</style>