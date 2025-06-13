<template>
 <slot name="navbar"></slot>

    <div class="titolo">
        <p>Wayfinder travel</p>
    </div>

    <div class="slot-carousel">
         <slot name="carousel-about"></slot>
    </div>

    <div class="sub-title">
        <div class="border-effect">
        <h1>Chi siamo</h1>
        </div>
    </div>
 <div class="section-row">
    <div class="div-img">
        <img :src="Teamimg" class="image">
    </div>
    <div class="div-description">
        <p>
Siamo un gruppo di amici, esploratori e sognatori che hanno trasformato la passione per il viaggio in un progetto di vita.
<br>
 Dopo aver condiviso cime, sentieri e tramonti in ogni angolo del mondo, abbiamo deciso di fondare un’agenzia che mette al centro le esperienze autentiche, le connessioni umane e la bellezza dell’avventura.

Con noi non prenoti solo una destinazione: scegli un modo di viaggiare più consapevole, emozionante e vero. Dalle vette dell’Himalaya alle spiagge più remote, siamo qui per costruire insieme il tuo prossimo ricordo indimenticabile.

        </p>
    </div>
 </div>
 <div class="sub-title">
        <div class="border-effect">
        <h1>Perche noi?</h1>
        </div>
    </div>

    <!---------------------------------PERCHE NOI-SECTION---------------------------->
<section class="prova-grid">

<div class="parent">
    <div class="item">
        <img :src="globoimg" class="icons">
        <h3>Esperienza sul campo</h3>
        <p>Abbiamo vissuto ogni destinazione in prima persona: consigli autentici, itinerari testati.</p>
    </div>
 <div class="item">
    <img :src="metaimg" class="icons">
    <h3> Viaggi su misura</h3>
        <p>Ogni viaggio è costruito attorno a te, con attenzione ai tuoi desideri e al tuo ritmo.</p>
</div>
  <div class="item">
     <img :src="assimg" class="icons">
     <h3>Assistenza continua</h3>
        <p>Ti seguiamo prima, durante e dopo la partenza. Non sarai mai solo, neanche dall’altra parte del mondo.</p>
</div>
   <div class="item">
     <img :src="viaggioimg" class="icons">
     <h3>Passione vera per il viaggio</h3>
        <p>Siamo viaggiatori prima ancora che consulenti: mettiamo cuore e curiosità in ogni proposta.</p>
</div>
</div>
</section>


<!---------------------------------CAROUSEL METE-------------------------------->

<div class="sub-title">
        <div class="border-effect">
        <h1>Perche noi?</h1>
        </div>
    </div>



<div class="carousel-mete">
    <slot name="carousel-mete"></slot>
</div>
</template>

<script setup>

import Teamimg from '@/assets/img/team.jpg'

import viaggioimg from '@/assets/img/viaggio.png'
import globoimg from '@/assets/img/globo.png'
import metaimg from '@/assets/img/meta.png'
import assimg from '@/assets/img/assistenza.png'
</script>


<style scoped>

.titolo {
 
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "DM Serif Text", serif;
  font-size: 40px;
 

}

.sub-title{
    
    display: flex;
    justify-content: center;
    font-family: "DM Serif Text", serif;
    
}
.border-effect{
    text-align: center;
    width: 300px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
}
.section-row{
    width: 100%;
    
    display: flex;
    margin-top: 50px;
    height: 60vh;
    align-items: center;
    flex-wrap: wrap;
}

.div-img{
    
    width: 50%;
    display: flex;
    justify-content: center;
  
}
.image{
    width: 700px;
    height: 500px;
 
}

.div-description{
    width: 40vw;
   
     font-family: "DM Sans", sans-serif;
     font-size: 25px;
     padding: 30px 25px;
     gap: 10px;
     border-right: 1px solid black;
     border-left: 1px solid black;
}


/*sezione perche noi*/

.prova-grid{
    width: 100%;
    background-color: rgb(238, 237, 237);
    height: 40vh;


    display: flex;
    justify-content: center;
    padding-top: 50px;
    margin-top: 40px;
    margin-bottom: 50px;
  
}

/*.parent {
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 0px;
grid-row-gap: 2px;
background-color: green;
}
 */

 .parent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  
 


display: flex;
justify-content: center;
  width: 80%;
gap: 20px;
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
}

.item p{
    font-size: 18px;
}
.icons{
    width: 150px;
}

/* Quando lo schermo è più stretto di 600px, mostra 1 colonna */
@media (max-width: 600px) {
  .parent {
    grid-template-columns: 1fr;
    flex-wrap: wrap;
  }
}



.carousel-mete{
    width: 100%;
    height: 90vh;
    margin-top: 70px;
    text-align: center;
    display: flex;
    justify-content: center;
}



</style>