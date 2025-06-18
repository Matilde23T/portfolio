<template>
    <aside>
        <h3>Personalizza la tua esperienza</h3>



        <div class="tipologie">
            
            <p>Seleziona la voce/icona di tipologia di viaggio:</p>
            <ul class="tipo">
                <li>
                    <img :src="iconaNatura" class="icons">
                    Natura
                </li>
                <li>
                    <img :src="iconaCultura" class="icons">
                    Cultura
                </li>
                <li>
                    <img :src="iconaAvventura" class="icons">
                    Avventura
                </li>
                <li>
                    <img :src="iconaRelax" class="icons">
                    Relax
                </li>
                <li>
                    <img :src="iconaSafari" class="icons">
                    On the road
                </li>
                <li>
                    <img :src="iconaNozze" class="icons">
                    viaggio di nozze
                </li>
                <li>
                    <img :src="iconaEvento" class="icons">
                    Eventi culturali
                </li>
                <li>
                    <img :src="iconaEno" class="icons">
                    tour enogastronomici
                </li>
            </ul>
        </div>


        <div class="periodo">
            <p>Seleziona il periodo:</p>
            <ul class="stagioni">
                <li>inverno</li>
                <li>primavera</li>
                <li>estate</li>
                <li>inverno</li>
                <li>tutto l'anno</li>
            </ul>
        </div>

        
    </aside>
</template>


<style scoped>
aside{
    width: 400px;
    background-color: red;
    height: 900px;
    padding: 50px 30px;
     font-family: "DM Sans", sans-serif;
}

h3{
    font-size: 23px;
    margin-bottom: 30px;

}

.tipologie{
    background-color: aqua;
    padding: 20px 15px;
}

.tipologie p{
    font-size: 18px;
    font-weight: 700;
}

.tipologie .tipo{
    list-style: none;
     margin-top: 30px;
    
     
}

.tipo .icons{
    width: 30px;
    margin-right: 20px;
    

}

.tipo li{
  
    margin-top: 20px;
    display: flex;
    align-self: center;
}
li {
  line-height: 1.5;
  font-size: 18px;
  cursor: pointer;
}

li:hover{
    font-weight: 700;
    text-decoration: underline;
}

li .icons {
  vertical-align: middle;
  margin-right: 8px;
  height: 24px;
}
</style>


<script setup>

import iconaCultura from '@/assets/img/icone-viaggio/cultura.png'
import iconaNozze from '@/assets/img/icone-viaggio/nozze.png'
import iconaAvventura from '@/assets/img/icone-viaggio/avventura.png'

import iconaRelax from '@/assets/img/icone-viaggio/relax.png'

import iconaEvento from '@/assets/img/icone-viaggio/eventi.png'
import iconaEno from '@/assets/img/icone-viaggio/enogastronomico.png'
import iconaNatura from '@/assets/img/icone-viaggio/natura.png'
import iconaSafari from '@/assets/img/icone-viaggio/safari.png'

</script>