<template>
    <div class="descrizionebox">
        <div class="box-testo">
        <p class="titolo">Wayfind Travel – Il viaggio come lo vuoi tu.</p>
<p class=" testo">
Che tu sogni un trekking dai panorami mozzafiato, uno snorkeling tra i coralli o un tuffo nelle tradizioni, Wayfind Travel trasforma <span class="strong">i tuoi desideri in esperienze indimenticabili.</span> 
<br>
Dalle <span class="strong">avventure nella natura al relax in spiagge da sogno</span>, fino ai viaggi culturali più autentici: abbiamo <span class="strong">proposte per ogni stile e curiosità.</span>
Scopri il nostro <span class="strong">catalogo online o crea il tuo viaggio su misura</span> con i nostri esperti, pronti a <span class="strong">guidarti passo dopo passo.</span>




</p>

<p class="sotto-testo">
Con Wayfind Travel, non parti solo. Parti ispirato.</p>
</div>
    </div>
</template>


<style scoped>
.descrizionebox{
    width: 100%;
    height: 300px;
    background-color: orange;
    
 display: flex;
 justify-content: center;
 margin-bottom: 30px;
    }
.box-testo{
    
    width: 80%;
    height: auto;
    text-align: center;
    
    font-size: 20px;
     font-family: "DM Sans", sans-serif;
     padding-top: 40px;
     padding-bottom: 40px;
 line-height: 33px; 
}
    .titolo{
       font-size: 23px;
       font-weight: 700;
       margin-bottom: 20px;
    }

    .strong{
        font-weight: 700;
    }
.sotto-testo{
font-size: 23px;
       font-weight: 700;
       margin-top: 20px;
}


@media (max-width:768px){
    .descrizionebox{
    width: 100%;
    height: 620px;
    background-color: rgb(6, 182, 64);
    
 margin-bottom: 30px;

    }

    .box-testo{
    
    width: 80%;
    height: auto;
    
    font-size: 18px;
     
 line-height: 30px; 
}
    .titolo{
       font-size: 20px;
      
    }

   
.sotto-testo{
font-size: 20px;
       
       margin-top: 20px;
}

}
</style>