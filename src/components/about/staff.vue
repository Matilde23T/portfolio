<script setup>
import img1 from '@/assets/img/staff/1.png'
import img2 from '@/assets/img/staff/2.png'
import img3 from '@/assets/img/staff/3.png'
import img4 from '@/assets/img/staff/4.png'
import img5 from '@/assets/img/staff/5.png'
import img6 from '@/assets/img/staff/6.png'
import img7 from '@/assets/img/staff/7.png'
import img8 from '@/assets/img/staff/8.png'
</script>






<template>
    <div class="titolo">
    I nostri coordinatori
</div>
    <section class="staff">

        <div class="parent">

            <div class="item">
          <img :src="img2" class="image">
           <p class="nome">Mario Rossi</p>
           <p class="sub-title">Esploratore giovane che ha attraversato tutta l’America Meridionale. Esperto in viaggi naturalistici e avventure sostenibili tra foreste e montagne.</p>

        </div>






<div class="item">
       <img :src="img4" class="image">
           <p class="nome">Claudia Fontana</p>
           <p class="sub-title">Backpacker esperta e storyteller.
            <br> Condivide esperienze autentiche in America Centrale, tra giungle, vulcani e comunità locali.</p> 
</div>

 <div class="item">
    <img :src="img5" class="image">
           <p class="nome">Liu Yang</p>
           <p class="sub-title">Nato a Shanghai e appassionato di cultura orientale, Liu Yang crea itinerari su misura tra Cina, Giappone, Corea e Sud-est asiatico.
            <br>
             Dai templi zen di Kyoto alle strade futuristiche di Seoul, offre viaggi autentici e ricchi di significato.</p>
</div>

<div class="item">
     <img :src="img6" class="image">
           <p class="nome"> Martina Bianchi</p>
           <p class="sub-title">Curatrice di viaggi di lusso con esperienza tra Emirati, Maldive e safari in Africa. 
            <br>
            Attenta ai dettagli e al comfort esclusivo.</p>
</div>
   
<div class="item">
     <img :src="img1" class="image">
           <p class="nome">Edoardo Neri </p>
           <p class="sub-title">Guida certificata specializzata in viaggi outdoor in Europa. Ama organizzare tour escursionistici in Islanda, Scozia e Alpi.</p>
</div>  

<div class="item">
        <img :src="img7" class="image">
           <p class="nome">Giulia Bronte</p>
           <p class="sub-title">Wedding planner romantica e organizzata, Giulia trasforma ogni luna di miele in un viaggio da sogno.
            <br>
             Specializzata in destinazioni romantiche come le Seychelles, Bali e la Costiera Amalfitana.</p>
</div>

 <div class="item">
    <img :src="img8" class="image">
           <p class="nome">Sofia Jiménez</p>
           <p class="sub-title">Originaria di Granada, Sofía conosce ogni angolo della Spagna. Dai riti della Semana Santa ai villaggi bianchi dell’Andalusia, accompagna i viaggiatori in esperienze autentiche e profonde.</p>
</div>

<div class="item">
     <img :src="img3" class="image">
           <p class="nome">Michael Williams</p>
           <p class="sub-title">Americano cresciuto tra California e Utah, Michael è il nostro guru dei viaggi on the road. 
            <br>Conosce le highway, i diner nascosti e i parchi nazionali come le sue tasche.</p>
</div>
   




</div>

    </section>
</template>


<style scoped>
.titolo{
    width: 100%;
    
    font-size: 35px;
    font-weight: 700;
    text-align: center;
    font-family: "DM Sans", sans-serif;
}
.staff{
    width: 100%;
  background-color: rgb(238, 237, 237);
  min-height: 100vh;
  padding: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
    
  
}




.parent {
display: grid;
grid-template-columns: repeat(4, 1fr);
grid-template-rows: repeat(2, 1fr);
grid-column-gap: 30px;
grid-row-gap: 40px;
width: 100%;
  
  margin: 0 auto;
  
}

.item {
 
  padding: 20px;
  text-align: center;
  
background-color: #fff;
  height: auto;
  
  font-family: "DM Sans", sans-serif;
  border-radius: 10px;
  border: none;
}

.item .nome{
    font-size: 25px;
    font-weight: 600;
    margin-top: 40px;
    margin-bottom: 30px;
}

.item .sub-title{
    font-size: 18px;

}

.image{
    width: 190px;
    
    
}
</style>