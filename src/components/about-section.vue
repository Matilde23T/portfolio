<template>
    <div class="navbar">
 <slot name="navbar"></slot>
</div>

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
        <div class="description">
        <p>
Siamo un gruppo di amici, esploratori e sognatori che hanno trasformato la passione per il viaggio in un progetto di vita.
<br>
<br>
 Dopo aver condiviso cime, sentieri e tramonti in ogni angolo del mondo, abbiamo deciso di fondare un’agenzia che mette al centro le esperienze autentiche, le connessioni umane e la bellezza dell’avventura.
<br>
<br>
Con noi non prenoti solo una destinazione: scegli un modo di viaggiare più consapevole, emozionante e vero. Dalle vette dell’Himalaya alle spiagge più remote, siamo qui per costruire insieme il tuo prossimo ricordo indimenticabile.

        </p>
        </div>
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
       <button class="viaggiBtn">
<RouterLink to="/serivzi">Scopri le destinazioni</RouterLink>
       </button>
    </div>



<div class="carousel-mete">
    <slot name="carousel-mete"></slot>
</div>


<!---prova recnsioni-->
<div class="sub-title">
        <div class="border-effect">
        <h1>Cosa dicono i nostri clienti? </h1>
        </div>
    </div>

    <div class="recensioni">
        <div class="testo">

<slot name="recensioni-about"></slot>
</div>
    </div>



    <!---barra marchi -->

    <div class="barra-marchi">
        
        <slot name="barra-marchi"></slot>
    </div>



    <!---footer section -->
    <div class="footer">
        <slot name="footer"></slot>
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


/*titolo e carousel iniziale */
.navbar{
    width: 100%;
    height: 5vh;
   
    margin-bottom: 40px;
}
.titolo {
 
  width: 100%;
  display: flex;
  justify-content: center;
  font-family: "DM Serif Text", serif;
  font-size: 40px;
  margin-top: 50px;
  margin-bottom: 50px;
  
 

}
/*carousel primo */
.slot-carousel{
   margin-bottom: 50px;
   height: auto;
   
}

/*titoli di inizio sezione */
.sub-title{
    
    display: flex;
    justify-content: center;
    font-family: "DM Serif Text", serif;
    
    
    
}
.border-effect{
    text-align: center;
    width: 400px;
    border-top: 1px solid black;
    border-bottom: 1px solid black;
    padding-top: 20px;
    padding-bottom: 20px;
   
}
/*bottone destinazioni */
.viaggiBtn{
    width: 400px;
    height: 70px;
    border-radius: 20px;
    background-color: violet;
    border: none;
}

.viaggiBtn:hover{
    background-color: aqua;
}
.viaggiBtn a{
    font-size: 23px;
    text-decoration: none;
    color: black;
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    
}

@media (max-width:768px){
    .viaggiBtn{
        
        width: 70%;
        height: 60px;
        
    }

    .viaggiBtn a{
        font-size: 20px;
    }
}

@media (width: 768px){
    .viaggiBtn{
        
        width: 40%;
    }
}

/*sezione chi siamo  */
.section-row{
    width: 100%;
   
    display: flex;
    margin-top: 50px;
    margin-bottom: 50px;
    height: auto;
    align-items: center;
    flex-wrap: wrap;
    flex-direction: row;
}

.div-img{
    
    width: 50%;
    display: flex;
    justify-content: center;
    
    height: 500px;
  
}
.image{
    width: 700px;
    height: 500px;
   
 
}

.div-description{
    width: 50%;
     font-family: "DM Sans", sans-serif;
     font-size: 25px;
     display: flex;
     justify-content: center;
     align-content: center;
     height: 500px;
    

}

.description{
    height: auto;
    width: 80%;
  
    padding-left: 20px;
    padding-right: 20px;
    border-left: 1px solid black;
     border-right: 1px solid black;
    display: flex;
    align-items: center;
}

@media (max-width: 768px) {
    .section-row {
        flex-direction: column;
         /* imposta disposizione verticale su mobile */
    }
    .div-img,
    .div-description {
        width: 100%; 
        height: auto; 
    }

    .image {
        width: 90%; 
        height: auto;
    }

    .description {
        font-size: 18px;
      
        margin-top: 20px; 
        width: 90%;
       
         
    }
}
@media (min-width: 800px) and (max-width:1280px){
.image{
    width: 700px;
    height: auto;
}
.section-row{
    flex-direction: column;
}
.div-description, .div.img{
    width: 100%;
     padding-left: 10px;
    padding-right: 10px;
    
   
}
.description {
        font-size: 18px;
        height: 400px;
       
       
         
    }

   .div-description{
    margin-top: 30px;
   }

}


/*sezione perche noi*/

.prova-grid{
    width: 100%;
    background-color: rgb(238, 237, 237);
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
/*carousel mete */

.carousel-mete{
    width: 100%;
    height:auto;
    margin-top: 50px;
    margin-bottom: 50px;
    text-align: center;
    display: flex;
    justify-content: center;
   
}


/* recensioni */

.recensioni{
    width: 100%;
    
    margin-top: 30px;
    height: auto;
    display: flex;
    justify-content: center;
 background-color: rgb(238, 237, 237);
 margin-bottom: 30px;
}



.testo{
    width: 90%;
    height: auto;
     font-family: "DM Sans", sans-serif;
    padding: 50px;
    display: flex;
    justify-content: center;
    gap: 20px;
   
}
@media (max-width: 768px){
    .recensioni{
        flex-direction: column;
        width: 100%;
        
    }
    .testo{
        flex-direction: column;
        width: 100%;
        
    }
}

@media (min-width:800px) and (max-width:1024px){

     
    .recensioni{
       
        width: 100%;
        flex-direction: column;
       
    }
    .testo{
        width: 100%;
        padding-top: 0;
        padding-left: 40px;
    }
}


/* barra di nomi */


.barra-marchi{
  
    width: 100%;
    height: auto;
}


/*footer */

.footer{
    width: 100%;
    height: auto;
    background-color: rgb(198, 198, 223);
    display: flex;
    justify-content: center;
}




</style>