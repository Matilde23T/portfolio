<template>
  <div class="faq">
<div class="pannello-totale">


    <h2>Domande frequenti</h2>
    <div v-for="(item, index) in items" :key="index">
      <button
        class="accordion"
        :class="{ active: openIndex === index }"
        @click="toggle(index)"
      >
        {{ item.title }}
  <i class="fa-solid fa-chevron-down" id="icona"></i>
      </button>
      <div class="panel" v-show="openIndex === index">
        <p>{{ item.content }}</p>
      </div>
    </div>
 <h2 class="title2">Per altre domande completare il form nella <RouterLink to="/contact"> pagina contatti</RouterLink> saremo lieti di rispondere ai vostri dubbi</h2>
    </div>
    
   
  </div>
</template>

<script setup>
import { ref } from 'vue';

const items = [
  { 
    title: 'Cosa include il prezzo indicato?', 
    content: 'Il prezzo indicato per ogni destinazione comprende: la quota totale del viaggio sia andata che ritorno, quota del pernottamento presso le strutture alberghiere/turistiche, costi relativi alle varie esperienze (biglietti per accedere ai parchi, attività sportive come snorkeling ecc.), spese dei trasporti pubblici o taxi, quota per la completa assistenza da parte del nostro staff per qualsiasi eventualità'
 },
  { 
    title: 'Il prezzo è a persona?',
     content: 'Si, il prezzo indicato è a persona' 
    },
  { 
    title: 'Il prezzo indicato è a settimana?',
     content: 'I prezzi indicati fanno riferimento al soggiorno di una media di 10 giorni' 
    },
    { 
    title: 'Come posso acquistare un pacchetto compreso nel catalogo?',
     content: 'Per acquistare un pacchetto compreso nel catalogo basta completare la pagina di contatti con il vostro nome, indirizzo email e numero di telefono per ottenere una completa consulenza in sede, per chiamata o online via Zoom o Google Meet' 
    },
    { 
    title: 'è possibile personalizzare i dettagli viaggio di una destinazione presente nel catalogo?',
     content: 'Si, è possibile personalizzare i vari dettagli viaggio e le varie esperienze senza però cambiare la tipologia di viaggio. I nostri coordinatori si impegnano a cercare il comfort che il cliente desidera' 
    },
     { 
    title: 'Che metodi di pagamento accettate?',
     content: 'Acettiamo come metodi di pagamento: bonifici bancari e pagamenti con PayPal' 
    },
     { 
    title: 'Cosa devo fare per annullare il viaggio?',
     content: 'Nel acquisto del pacchetto preparato o di un viaggio personalizzato, verrà chiesta una caparra del 30%, che verrà trattenuta in caso il cliente decidesse di annullare il viaggio pianificato prima di 14 giorni lavorativi, per annullare la nostra collaborazione basterà contattare tramite email e numero di telefono il nostro staff con largo anticipo' 
    },
     { 
    title: 'Come realizzate un viaggio customizzato?',
     content: 'Il cliente che desidera un viaggio customizzato avrà una consulenza diretta con i nostri coordinatori con libera scelta: nella meta di destinazione, tipo di struttura alberghiera, periodo di destinazione, budget complessivo, esperienze di tutte le tipologie e la durata del viaggio' 
    },
    {
     title: 'E se succedono imprevisti durante il viaggio?',
     content: 'Dopo aver concordato la pianificazione del viaggio e completato il pagamento, il cliente avrà a disposizione un file PDF con la completa predisposizione del itinerario di viaggio con tutti i dettagli previsti (luogo e orario di partenza con aereo, orari delle attività, orari di apertura e chiusura di musei, parchi ecc.), il coordinatore di Wayfineder che vi ha seguito nella pianificazione sarà sempre a vostra disposizione, sarà lui a indicarvi preventivamente eventuali imprevisti e vi aiuterà nel rimanere nel comform anche durante gli imprevisti. Avrete a disposizione un numero di telefono, contatto email e numero di telefono della sede' 
    },

];

const openIndex = ref(null);

function toggle(index) {
  openIndex.value = openIndex.value === index ? null : index;
}
</script>

<style scoped>
.faq {
  width: 100%;
  background-color: orange;
  display: flex;
  justify-content: center;
  
  height: 100%;
  padding-top: 50px;
  padding-bottom: 50px;
}

.faq h2{
    font-size: 40px;
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    margin-bottom: 40px;
    text-align: center;
}

.pannello-totale{
    width: 90%;
}
.accordion {
  background-color: rgb(250, 244, 236);
  color: #444;
  cursor: pointer;
  padding: 20px 18px;
  width: 100%;
  text-align: left;
  border: none;
  outline: none;
  transition: 0.4s;
   font-family: "DM Sans", sans-serif;
   font-size: 18px;
   font-weight: 600;

}
.accordion #icona{
   float: right;
   width: 20px;
}
.active,
.accordion:hover {
  background-color: #ccc;
}
.panel {
  padding: 25px 18px;
  background-color: #fff;
  font-family: "DM Sans", sans-serif;
  font-size: 18px;
  overflow: hidden;
  width: 100%;
}

.pannello-totale .title2{
margin-top: 40px;
font-size: 28px;
    font-family: "DM Sans", sans-serif;
    font-weight: 700;
    margin-bottom: 40px;
}
</style>
