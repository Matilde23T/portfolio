<template>
     <div class="image">
            <img :src="logo" class="immagine">
        </div>
    <div class="testobox">
       
<div class="testo">
    <p>Ogni viaggio inizia con un sogno. 
        <br>Il nostro compito è renderlo realtà.</p>
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
  text-shadow: 1px 1px 4px rgba(0, 0, 0, 0.6);
}
.testobox{
    width: 100%;
   align-content: center;
    height: 400px;
    justify-content: center;
    margin-top: 0px;
    bottom: 0;
}

@media (max-width:768px){

.image{
   
    margin-top: 10px;
    
}
.immagine{
    width: 90px;
}
.testo{
    width: 100%;
    height: auto;
    line-height: 50px;
    
    font-size: 22px;
   
}
.testobox{
    
    padding-left: 10px;
    padding-right: 10px;
    
    height: 400px;
    text-align: center;
  
   
}


    
}
@media (min-width: 800px) and (max-width:1280px){
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
    
    line-height: 80px;
    font-size: 40px;
   
}

.testobox{
    
    padding-left: 30px;
    padding-right: 20px;
}
}
</style>

<script setup>
import logo from '@/assets/img/logo/logo (2).png'
</script>