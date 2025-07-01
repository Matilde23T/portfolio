<template>
    <section class="presentazione">
    <div class="sub-title">
        
        <h1>Wayfinder Travel</h1>
        </div>
   
 <div class="section-row">
   
    
        <div class="description">
        <p>
Wayfinderè nasce come un gruppo di amici, viaggiatori e sognatori che hanno trasformato la loro passione per l'esplorazione in un progetto di vita.
<br>
Dopo aver condiviso cime, sentieri e tramonti in ogni angolo del mondo, abbiamo deciso di fondare un’<span class="strong">agenzia di viaggi che mette al centro l’autenticità delle esperienze, le connessioni umane e la bellezza dell’avventura.</span>
<br>
Con Wayfinderè puoi <span class="strong">scegliere tra itinerari già curati</span> dai nostri coordinatori oppure <span class="strong">richiedere un viaggio completamente personalizzato</span>, costruito su misura per te.
<br>

Con noi non prenoti semplicemente una destinazione: scegli un modo di viaggiare più consapevole, emozionante e autentico.
<span class="strong">Siamo qui per creare insieme il tuo prossimo ricordo indimenticabile.</span>



        </p>
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
    
    text-align: center;
    width: 100%;
    font-family: "DM Serif Text", serif;
    font-size: 30px;
    
    
}

/*sezione chi siamo  */
.section-row{
    width: 100%;
   
    display: flex;
    margin-top: 30px;
    margin-bottom: 30px;
    padding: 50px 20px;
    height: auto;
    align-items: center;
    margin-bottom: 40px;
   
   justify-content: center;
}





.description{
   
  font-family: "DM Sans", sans-serif;
  text-align: center;
    line-height: 40px;
   font-size: 22px;
    width: 80%;
    
    
}

.strong{
    font-weight: 600;
}

@media (max-width: 768px) {
    .presentazione{
    margin-top: 30px;
}
.sub-title{
    
   
    font-size: 25px;
    
    
}

/*sezione chi siamo  */
.section-row{
   
 
   
    margin-top: 20px;
    margin-bottom: 30px;
    padding: 10px 20px;
   
    margin-bottom: 40px;
   
   justify-content: center;
}





.description{
   
  
  text-align: left;
  
   font-size: 18px;
    width: 100%;
    
    
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