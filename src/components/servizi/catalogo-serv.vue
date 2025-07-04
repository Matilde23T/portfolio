<template>
<div class="contiainer">
   <div class="title"><h1>Catalogo 2025/2026</h1></div>
    <div class="parent">
      <div class="item" v-for="viaggio in viaggiFiltrati" :key="viaggio.id">
        <div class="card">
          <div class="foto">
            <img :src="viaggio.img" class="img" />
            <div class="overlay-content">
              <div v-if="viaggio.etichetta" class="etichetta">{{ viaggio.etichetta }}</div>
            </div>
          </div>
          <div class="descrizione">
            <h3 class="titolo">{{ viaggio.titolo }}</h3>
            <span class="sotto-titolo">Periodo: {{ viaggio.stagione.join(', ') }}</span>
            <br>
            <!----  <span class="tipo">Tipo: {{ viaggio.tipo.join(', ')}}</span>-->
           
          </div>
          <div class="prezzo">{{ viaggio.prezzo }}€</div>
        </div>
      </div>

     
    </div>
    

      
  </div>



</template>







<style scoped>



.contiainer{
   
   height: auto;
  
   
  

}
.title{
    width: 100%;
    height: 80px;
     font-family: "DM Sans", sans-serif;
    text-align: center;
    font-size: 25px;
   
   
}


.parent {
/*display: grid;
grid-template-columns: repeat(3, 1fr);
grid-template-rows: repeat(7, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;

margin-bottom: 60px;
background-color: aqua;
height: auto;*/

display: grid;
  grid-template-columns: repeat(3, 1fr);
  
 grid-column-gap: 40px;
  grid-row-gap: 30px;
  padding: 70px;
  width: 100%;




/* gap: 20px;*/
}


.item{
    
    width: 100%;
  display: flex;
  justify-content: center;
    
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
    width: 90%;
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
    font-size: 20px;
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

.overlay-content {
  position: absolute;
  top: 0;
  left: 0;
  /*transform: translateX(-50%);
  color: white;
  text-align: center;*/
  z-index: 2;
 
   color: white;
    display: flex;
    align-items: center;
    justify-content:flex-end;
   
  width: 100%;
}

.etichetta{
    background-color:#FF0000;
    height: 40px;
    padding: 10px;
    color: #fff;
     font-size: 20px;
}








@media (max-width: 768px) {

  .contiainer{
    width: 100%;
  }
  .parent {
    
    flex-wrap: wrap;
    width: 100%;
     
      margin: 0px;
      padding: 0px;
    grid-template-columns: repeat(1, 1fr);
    padding-bottom: 30px;
  }

.title{
    width:100%;
    height: 50px;
    
    
    font-size: 18px;
    margin-top: 20px;
    
}
.item{
    width: 100%;
    height: 600px;
    
    
    overflow: hidden;
    
}
.titolo{
  font-size: 20px;
}
.prezzo{
  font-size: 29px;
}
.etichetta{
  font-size: 18px;
}
}


@media only screen and (width: 768px) and (orientation: portrait) {
  /* Regole solo per iPad Mini verticale */
  .parent{
    
    flex-wrap: wrap;
    width: 100%;
      gap: 0px;
      margin: 0px;
      padding: 10px;
    grid-template-columns: repeat(2, 1fr);
  }
  .item{
    width: 90%;
    height: 600px;
   /* margin: 25px;*/
    
   margin: 18px;
    
}
.card{
    width: 100%;
    height: 100%;
    
    border: 0.5px;
   

    overflow: hidden;
}
}



@media (min-width: 800px) and (max-width:1280px){
  .parent{
    
    flex-wrap: wrap;
    width: 100%;
      gap: 0px;
      margin: 0px;
      padding: 10px;
    grid-template-columns: repeat(2, 1fr);
  }

  .title{
    width:100%;
    height: 70px;
    
    margin: 0;
    font-size: 20px;
    
    
}
.item{
    width: 90%;
    height: 600px;
   /* margin: 25px;*/
    
   margin: 18px;
    
}
.card{
    width: 100%;
    height: 100%;
    
    border: 0.5px;
   

    overflow: hidden;
}

.foto{
   
    height: 300px;
   

}

.titolo{
    font-size: 20px;
   

}

}


</style>

<script setup>
import islanda from '@/assets/img/catalogo/1.jpg'
import giappone from '@/assets/img/catalogo/giappone.jpg'
import giapponesakura from '@/assets/img/catalogo/giapponesakura.jpg'
import patagonia from '@/assets/img/catalogo/patagonia2.jpg'
import edimburgo from '@/assets/img/catalogo/edimburgo.png'
import egitto from '@/assets/img/catalogo/egitto.jpg'
import sharm from '@/assets/img/catalogo/sharm1.jpg'
import mauritius from '@/assets/img/catalogo/mauritius.jpg'
import maldive from '@/assets/img/catalogo/maldive.jpg'
import peru from '@/assets/img/catalogo/peru.jpg'
import india from '@/assets/img/catalogo/india.jpg'
import polinesia from '@/assets/img/catalogo/polinesiafrancese.jpg'
import westcoast from '@/assets/img/catalogo/westcoast.jpg'
import usa from '@/assets/img/catalogo/yellowstone.jpg'
import scozia from '@/assets/img/catalogo/scozia.jpg'
import norvegia from '@/assets/img/catalogo/fiordinorvegesi.jpg'
import messico from '@/assets/img/catalogo/diadelosmuertos2.jpg'
import nuovazelanda from '@/assets/img/catalogo/nuovazelanda.jpg'
import bahamas from '@/assets/img/catalogo/bahamas.jpg'
import lapponia from '@/assets/img/catalogo/lapponiafinlandese.jpg'
import tanzania from '@/assets/img/catalogo/tanzania.jpg'


import { computed } from 'vue'


const props = defineProps({
  filter: String,
})


const viaggi = [
  { id: 1, 
    titolo: "Islanda del Sud: tra ghiaccio, fuoco e meraviglia", 
    stagione: ["estate"], 
    prezzo: 1500,
     img: islanda, 
     etichetta: "adrenalinico",
     tipo: ["natura","avventura", "on the road"]
     
     },

  { id: 2,
     titolo: "Giappone:un viaggio tra templi, sakura e metropoli",
      stagione: ["autunno"], 
      prezzo: 2000,
       img: giappone,
       etichetta: "",
       tipo: ["cultura"]
       
     
     },

  { id: 3,
     titolo: "Giappone: sogno di Sakura, la magia della fioritura",
      stagione: ["primavera"], 
      prezzo: 2500, 
      img: giapponesakura,
       etichetta: "" ,
       tipo: ["nozze", "cultura", "on the road"]
      
    },

  { id: 4, 
    titolo: "Patagonia selvaggia: l'avventura tra ghiacciai, montagne e fiordi",
    stagione: ["inverno", "primavera"],
    
      prezzo: 1500, 
      img: patagonia, 
      etichetta: "adrenalinico",
      tipo: ["natura", "avventura"]
      
     
     },

     {id:5 , 
    titolo:"Mauritius: onde lente, sogni luminosi",
    stagione: ["autunno", "primavera"],
     
      prezzo:1800 , 
      img: mauritius, 
      etichetta: "",
      tipo:["relax", "nozze"],
     

     },

      {id: 6, 
    titolo:"Egitto: storia egizia e crociera sul Nilo",
    stagione:["primavera", "autunno"],
     
      prezzo: 1200, 
      img: egitto , 
      etichetta: "",
      tipo: ["cultura"]
     

     },

      {id: 7, 
    titolo:"Edimburgo: castelli, cultura e il battito creativo di Agosto",
     stagione:["estate"],
     
      prezzo: 900, 
      img: edimburgo, 
      etichetta: "",
      tipo: ["eventi", "cultura"]
     

     },

     {id: 8 , 
    titolo:"Lo spirito della Scozia: natura, kayak e wild camping tra gli Highlands",
    stagione: ["primavera", "autunno"],
     
      prezzo: 1100, 
      img: scozia, 
      etichetta: "adrenalinico",
      tipo: ["natura", "avventura", "on the road"]
      

     },

     {id: 9, 
    titolo:"Lapponia finlandese: nel regno dell’aurora, un viaggio tra fiaba e ghiaccio",
     stagione: ["inverno"],
     
      prezzo: 1200, 
      img: lapponia, 
      etichetta: "adrenalinico",
      tipo: ["natura", "avventura"]
     
     

     },

     {id: 10, 
    titolo:"Bahamas: la tua fuga tropicale perfetta",
    stagione: ["inverno", "primavera"],
     
      prezzo: 1400, 
      img:bahamas , 
      etichetta: "",
      tipo: ["relax", "nozze"]
      
     

     },

     {id: 11, 
    titolo:"Nuova Zelanda Adventure: emozioni forti tra geyser, lanci e trekking ",
    stagione: ["inverno", "primavera"],
     
      prezzo: 1700, 
      img: nuovazelanda, 
      etichetta: "adrenlinico",
      tipo: ["natura", "avventura"]
     
     

     },


     {id: 12, 
    titolo:"Messico in Festa: colori, tradizioni e magia del Día de los Muertos",
     stagione: ["autunno"],
     
      prezzo:1000 , 
      img:messico , 
      etichetta: "",
      tipo: ["eventi", "cultura"]
     
     

     },


     {id: 13, 
    titolo:"USA selvaggio: trekking, laghi cristallini e adrenalina tra i grandi parchi",
    stagione: ["primavera", "autunno", "estate"],
     
      prezzo: 1280, 
      img: usa, 
      etichetta: "adrenalinico",
      tipo: ["natura", "avventura", "on the road"]
      

     },

     {id: 14, 
    titolo:"West Coast Legends: da Los Angeles a San Francisco tra deserti e oceano",
    stagione: ["estate", "autunno"],
     
      prezzo: 1200, 
      img:westcoast , 
      etichetta: "",
      tipo: ["natura", "on the road"]
     

     },


     {id:15 , 
    titolo:"Tanzania selvaggia: il cuore dell’Africa tra leoni e tramonti infuocati",
    stagione: ["estate", "inverno"],
    
      prezzo: 1200, 
      img: tanzania, 
      etichetta: "",
      tipo: ["natura", "on the road"]
      

     },


     {id: 16, 
    titolo:"India: anima e respiro, yoga e meditazione tra i templi dell’India",
     stagione: ["primavera"],
     
      prezzo:1220 , 
      img:india , 
      etichetta: "novita!",
      tipo: ["cultura", "eventi"]
      
     

     },


     {id: 17 , 
    titolo:"Sharm El Sheikh: scopri il tesoro del Mar Rosso",
    stagione: ["primavera", "autunno"],
    
      prezzo: 1000 , 
      img: sharm, 
      etichetta: "",
      tipo: ["relax", "nozze"]
     
     

     },



  {id: 18, 
    titolo:" Perù autentico: natura selvaggia e la magia dell’Inti Raymi",
     stagione: ["estate"],
     
      prezzo:1200 , 
      img: peru , 
      etichetta: "novità!",
      tipo: ["cultura", "eventi"]
     
     

     },

     {id: 19, 
    titolo:"Maldive: un Sogno di relax per due",
    stagione: ["inverno", "primavera"],
     
      prezzo: 1100 , 
      img: maldive, 
      etichetta: "",
      tipo: ["relax", "nozze"]
     
    

     },

     {id: 20  , 
    titolo:"Fiordi Norvegesi: l’avventura ai confini del nord",
    stagione: ["primavera", "estate"],
    
      prezzo: 1600, 
      img: norvegia, 
      etichetta: "",
      tipo:[ "natura", "nozze",] 

     },
]

const viaggiFiltrati = computed(() => {
  if (!props.filter) return viaggi;

  const filtro = props.filter.toLowerCase();

  return viaggi.filter(v => {
    const stagioni = Array.isArray(v.stagione) ? v.stagione : [v.stagione];
    const tipi = Array.isArray(v.tipo) ? v.tipo : [v.tipo];

    return (
      stagioni.some(s => s.toLowerCase().includes(filtro)) ||
      tipi.some(t => t.toLowerCase().includes(filtro))
    );
  });
});

</script>