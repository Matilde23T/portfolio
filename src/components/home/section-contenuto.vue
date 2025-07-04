<template>

    <div class="descrizione">
    <p class="testo">"I tuoi sogni, la nostra missione. Wayfinder Travel è un team di esploratori e professionisti del viaggio che lavora insieme per trovare la meta perfetta per ogni tuo desiderio, dal relax all’avventura. 
        <br>Ogni destinazione è stata vissuta e approvata in prima persona dal nostro team.</p>
    <p class="link"><RouterLink to="/about">Vieni a scoprire il nostro team</RouterLink></p>
</div>
</template>


<style scoped>
.descrizione{
    
    width: 90%;
    height: auto;
    padding: 20px 30px;
    line-height: 60px;
    margin-top: 50px;
}
    
.testo {
  color: #fff;
  font-size: 28px;
  font-family: "DM Serif Text", serif;
  font-family: "DM Sans", sans-serif;
  text-align: center;
}

.link a{
    text-decoration: none;
    color: #fff;
}

.link a:hover{
  text-decoration: underline;
}
.link{
    
  font-size: 35px;
  font-family: "DM Serif Text", serif;
  font-family: "DM Sans", sans-serif;
  text-align: center;
  margin-top: 70px;
  font-weight: 600;
}

@media (max-width:768px){
    .descrizione{
    
    width: 100%;
    height: auto;
    padding: 10px 20px;
    line-height: 40px;
    margin-top: 50px;
    
}
    
.testo {
  text-align: left;
  font-size: 20px;
  
}


.link{
    
  font-size: 25px;
 margin-top: 30px;
  font-weight: 700;
}


}
</style>