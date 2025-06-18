<script setup>
 import iconaCultura from '@/assets/img/icone-viaggio/cultura.png'
import iconaNozze from '@/assets/img/icone-viaggio/nozze.png'
import iconaAvventura from '@/assets/img/icone-viaggio/avventura.png'

import iconaRelax from '@/assets/img/icone-viaggio/relax.png'

import iconaEvento from '@/assets/img/icone-viaggio/eventi.png'
import iconaEno from '@/assets/img/icone-viaggio/enogastronomico.png'

</script>







<template>
    <div class="divgenerale">
        <div class="testo-titolo">
        <p class="titolo">Seleziona la icona di tipologia di viaggio per visualizzare le nostre offerte catalogo o per trarre ispirazione per la tua prossima meta</p>

</div>

<section class="grid">
        <div class="parent">
         <div class="item">
            <div class="box-icona">
            <img :src="iconaAvventura" class="icons">
            </div>
            <h3>Natura</h3>

         </div>
         <div class="item">
            <div class="box-icona">
            <img :src="iconaRelax" class="icons">
            </div>
            <h3>Relax</h3>
         </div>
         <div class="item">
            <div class="box-icona">
            <img :src="iconaCultura" class="icons">
            </div>
            <h3>Cultura</h3>
         </div>
         <div class="item">
            <div class="box-icona">
           <img :src="iconaEvento" class="icons">
           </div>
           <h3>Eventi</h3>
         </div>
         <div class="item">
            <div class="box-icona">
           <img :src="iconaNozze" class="icons">
           </div>
           <h3>Romantici</h3>
         </div>
         <div class="item">
            <div class="box-icona">
           <img :src="iconaEno" class="icons">
           </div>
           <h3>Viaggi enogastronomici</h3>
         </div>

</div>




</section>
    </div>
</template>


<style scoped>

.divgenerale{
    width: 100%;
    height: 600px;
   
    margin-top: 50px;
    margin-bottom: 50px;
    padding-top: 40px;
    padding-bottom: 40px;
    text-align: center;
    
    
   
}

.parent {
display: grid;
grid-template-columns: repeat(6, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}


.testo-titolo{
  
    width: 100%;
    height: 60px;
    text-align: center;
    font-size: 32px;
    font-weight: 600;
    font-family: "DM Sans", sans-serif;
    
}

.grid{
    width: 100%;
    
    display: flex;
    justify-content: center;
    height: 400px;
    padding-top: 50px;
    padding-bottom: 50px;
}


.item{
    text-align: center;
    padding: 10px;
    width: 90%;
    cursor: pointer;
     
    font-family: "DM Sans", sans-serif;
}

.item h3{
    font-size: 28px;
    margin-top: 30px;
    
}

.item .icons{
    width: 150px;
    
   
    
    
}

.item .box-icona{
    width: 220px;
    height: 220px;
    padding: 30px;
    border-radius: 50%;
    background: linear-gradient(90deg, #00d2ff 0%, #3a47d5 100%);
      margin: 0 auto; /* centra orizzontalmente */
    position: relative;
}
.item .icons {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 100%;
    max-height: 100%;
}
</style>