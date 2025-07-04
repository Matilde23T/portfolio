
<script setup>
import img1 from '@/assets/img/perchenoi/assistenza.png'
import img2 from '@/assets/img/perchenoi/globo.png'
import img3 from '@/assets/img/perchenoi/meta.png'
import img4 from '@/assets/img/perchenoi/viaggio.png'
</script>









<template>
    <div class="sub-title">
       
        <h1>Perche scegliere noi?</h1>
        </div>
     <!---------------------------------PERCHE NOI-SECTION---------------------------->
<section class="prova-grid">

<div class="parent">
    <div class="item">
        <img :src="img2" class="icons">
        <h3>Esperienza sul campo</h3>
        <p>Abbiamo vissuto ogni destinazione in prima persona: consigli autentici, itinerari testati.</p>
    </div>
 <div class="item">
    <img :src="img3" class="icons">
    <h3> Viaggi su misura</h3>
        <p>Ogni viaggio è costruito attorno a te, con attenzione ai tuoi desideri e al tuo ritmo.</p>
</div>
  <div class="item">
     <img :src="img1" class="icons">
     <h3>Assistenza continua</h3>
        <p>Ti seguiamo prima, durante e dopo la partenza. Non sarai mai solo, neanche dall’altra parte del mondo.</p>
</div>
   <div class="item">
     <img :src="img4" class="icons">
     <h3>Passione vera per il viaggio</h3>
        <p>Siamo viaggiatori prima ancora che consulenti: mettiamo cuore e curiosità in ogni proposta.</p>
</div>
</div>
</section>
</template>


<style scoped>
/*sezione perche noi*/
.sub-title{
    
   text-align: center;
    font-family: "DM Serif Text", serif;
    font-size: 20px;
    
    
    
}

.prova-grid{
    width: 100%;
    
    height: auto;
    display: flex;
    justify-content: center;
    padding-top: 50px;
    padding-bottom: 50px;
    margin-top: 40px;
    margin-bottom: 50px;
  
}



 .parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  display: flex;
  justify-content: center;
  width: 80%;
  gap: 40px;
  height: fit-content;
  
}

.item {
 
  padding: 10px;
  text-align: center;
  

  
  width: 70%;
  font-family: "DM Sans", sans-serif;
}

.item h3{
    font-size: 25px;
    margin-top: 25px;
    margin-bottom: 20px;
}

.item p{
    font-size: 18px;
}
.icons{
    width: 150px;
   
}


@media (max-width: 768px) {
  .sub-title{
    
   text-align: center;
    font-family: "DM Serif Text", serif;
    font-size: 17px;
    
    
    
}
  .parent {
    grid-template-columns: 1fr;
    flex-wrap: wrap;
    width: 100%;
      
  }

  
   .icons {
    width: 90px; 
    }

.item {
    width: 90%;
  }

  .item p{
    font-size: 18px;
  }

  .item h3{
    font-size: 22px;
  }
  
}


@media (min-width:800px) and (max-width:1280px){

    .parent{
        width: 100%;
        gap: 20px;
       
    }
    

    .icons{
        width: 100px;
    }

    .item p{
    font-size: 18px;
    
  }

  .item h3{
    font-size: 22px;
  }
}

/**ipadmini */
@media (width: 768px){
    .item{
       
        width: 70%;
    }

     
}

</style>