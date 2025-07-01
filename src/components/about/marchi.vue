<template>
<section class="marchi-sec">
<div class="titolo">
    <h1>Parlano di noi</h1>
</div>

<div class="marchi">
    <img :src="espresso" class="imgmarchio">
    <img :src="sole" class="imgmarchio">
    <img :src="forbes" class="imgmarchio">
</div>


</section>
</template>


<script setup>

import espresso from '@/assets/img/about-marchi/espresso.png'
import sole from '@/assets/img/about-marchi/sole.png'
import forbes from '@/assets/img/about-marchi/forbes.png'

</script>


<style scoped>

.marchi-sec{
  
    margin-bottom: 40px;
}
.titolo{
    width: 100%;
    text-align: center;
    font-size: 28px;
    font-family: "DM Sans", sans-serif;
   margin-top: 60px;
 
}


.marchi{
    width: 100%;
    height: auto;
    
   text-align: center;
   
}

.imgmarchio{
    width: 200px;
    margin: 20px;
}

@media (max-width: 768px){

    .titolo{
        font-size: 20px;
        margin-bottom: 20px;
        
    }
    .imgmarchio{
        width: 130px;
        
        margin: 5px;
    }
    .marchi{
        margin-bottom: 40px;
        
    }
}
 @media(min-width:820px) and (max-width:1024px){
    .titolo{
        font-size: 24px;
    
    }
 }
</style>