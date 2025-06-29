<template>
    <section class="presentazione">
    <div class="sub-title">
        <div class="border-effect">
        <h1>Chi siamo</h1>
        </div>
    </div>
 <div class="section-row">
    <div class="div-img">
        <img :src="team" class="image">
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
 </section>
</template>



<script setup>
import team from '@/assets/img/team.jpg'
</script>



<style scoped>
.presentazione{
    margin-top: 30px;
}
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




</style>