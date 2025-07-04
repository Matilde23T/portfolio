<script setup>
import imgindia from '@/assets/img/catalogo/india.jpg'
import imgperu from   '@/assets/img/catalogo/peru.jpg'

</script>


<template>
    <div class="container">

        <div class="titolo-sez">
            Ultime Novità!
        </div>

        <div class="parent">

<div class="item">
<div class="card">
          <div class="foto">
            <img :src="imgindia" class="img" />
           </div>

          <div class="descrizione">
            <h3 class="titolo">India: anima e respiro, yoga e meditazione tra i templi dell’India</h3>
            <span class="sotto-titolo">Periodo: Primavera</span>
            <br>
            <!----  <span class="tipo">Tipo: {{ viaggio.tipo.join(', ')}}</span>-->
           
          </div>

          <div class="prezzo">1220€</div>
        </div>


      </div>

<div class="item">
<div class="card">
          <div class="foto">
            <img :src="imgperu" class="img" />
           </div>

          <div class="descrizione">
            <h3 class="titolo">Perù autentico: natura selvaggia e la magia dell’Inti Raymi
</h3>
            <span class="sotto-titolo">Periodo: Estate</span>
            <br>
            <!----  <span class="tipo">Tipo: {{ viaggio.tipo.join(', ')}}</span>-->
           
          </div>

          <div class="prezzo">1200€</div>
        </div>


      </div>
</div>
    </div>
</template>

<style scoped>
.container{
    width: 100%;
    margin-bottom: 50px;
    height:auto;
}

.titolo-sez{
  
    font-size: 60px;
      font-family: "DM Serif Text", serif;
      text-align: center;
      margin-bottom: 50px;
}

.parent {
/*display: grid;
grid-template-columns: repeat(2, 1fr);
grid-template-rows: 1fr;
grid-column-gap: 0px;
grid-row-gap: 0px;*/

display: flex;
justify-content: center;
gap: 80px;
padding-top: 30px;
padding-bottom: 30px;

}



.item{
    
    width: 500px;
  display: flex;
  justify-content: center;
    background-color: yellow;
    display: flex;
    justify-content: center;
    font-family: "DM Sans", sans-serif;
    border-radius: 20px !important;

/*margin: 60px;*/
    overflow: hidden;
    

/*ultime mdo */
/*
    width: 100%;
  max-width: 420px;*/
}
.card{
    width: 100%;
    height: 100%;
    border-radius: 20px;
    border: 0.5px;
   

    overflow: hidden;
}
.foto{
    width: 100%;
    height: 300px;
    
    overflow: hidden;


 position: relative; /* <-- importante */

}

.descrizione{
    height:228px;
    width: 100%;
    background-color: rgb(243, 245, 245);
    padding: 30px 15px;
}


.titolo{
    font-size: 23px;
    margin-bottom: 15px;
    
    height: 90px;

}

.img{
    width: 100%;
    height: 100%;


    object-fit: cover;

    display: block;

}
.prezzo{
    width:100%;
    background-color: rgb(243, 245, 245);
    height: 70px;
    text-align: right;
    font-size: 35px;
    padding-right: 20px;
    

}
@media (max-width:768px){
    .titolo-sez{
  
    font-size: 35px;
      
      font-weight: 600;
   
      margin-bottom: 40px;
}
.parent {

gap: 60px;
padding-top: 0px;
padding-bottom: 10px;
flex-wrap: wrap;

}



.item{
    
    width: 90%;
  
    
}



.descrizione{
    height:220px;
  
}


.titolo{
    font-size: 20px;
   

}


.prezzo{
   
    font-size: 30px;
  
    

}
}
@media only screen and (width: 768px) and (orientation: portrait) {
  /* Regole solo per iPad Mini verticale */
   .titolo-sez{
  
    font-size: 40px;
      
      
      margin-bottom: 30px;
}
.parent {
display: flex;
justify-content: center;
gap: 40px;
padding-top: 30px;
padding-bottom: 30px;

}



.item{
width: 320px;
 
}





}
@media (min-width: 800px) and (max-width:1280px){
    .titolo-sez{
  
    font-size: 40px;
      
      
      margin-bottom: 30px;
}
.parent {
display: flex;
justify-content: center;
gap: 40px;
padding-top: 30px;
padding-bottom: 30px;

}



.item{
width: 400px;
 
}




}
</style>