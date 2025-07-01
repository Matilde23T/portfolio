<template>
<section class="recensioni-sec">

     <div class="sub-title">
        <div class="border-effect">
        <h1>Cosa dicono i nostri clienti?</h1>
        </div>
    </div> 

<div class="recensioni">
        <div class="testo">
     <div class="prima-rec">
                <div class="foto-nome">
                <span class="foto">
                      <img :src="peoplerew1" class="peoplerew1">
                </span>
                <span class="nome">Maria
                    <br>
                </span>
                </div>
                <div class="testo2">
                    <p class="title"> Viaggio di laurea indimendicabile!
                    </p>
                    Ho deciso di affidarmi ad Wayfind travel per il mio viaggio di laurea, volevo trovare una meta paradisiaca lontano dallo stress, dove poter dedicarsi ad attività nella natura.
                    Chiara, uno dei coordinatori di wayfind ha saputo gestire tutte le mie richieste, offrendo attività oltre lie aspettative. 
                    Super consigliati!!!
                </div>
            </div>





            <div class="prima-rec">
                <div class="foto-nome">
                <span class="foto">
                      <img :src="peoplerew2" class="peoplerew1">
                </span>
                <span class="nome">Giacomo Rossi
                    <br>
                </span>
                </div>
                <div class="testo2">
                    <p class="title"> Miglior vacanza delle mia vita</p>
                    Grazie all’agenzia, ho vissuto una delle esperienze più belle della mia vita! Edimburgo è una città magica: il Castello, la Royal Mile, i pub tradizionali… ogni angolo ha qualcosa da raccontare. L’organizzazione è stata impeccabile: volo puntuale, hotel centralissimo e tour guidati davvero ben fatti. Un ringraziamento speciale a Laura dell’agenzia, sempre disponibile e attenta ai dettagli. Tornerò sicuramente a viaggiare con voi!
                </div>
            </div>


 <div class="prima-rec">
                <div class="foto-nome">
                <span class="foto">
                      <img :src="peoplerew3" class="peoplerew1">
                </span>
                <span class="nome">Giorgia 
                    <br>
                </span>
                </div>
                <div class="testo2">
                    <p class="title"> Luna di miele alle Hawaii</p>
                   Non avremmo potuto desiderare di meglio! L’agenzia ha organizzato tutto con cura e professionalità, rendendo la nostra luna di miele semplicemente perfetta. Le spiagge di Maui, le escursioni vulcaniche a Big Island, i tramonti mozzafiato... ogni giorno era una nuova meraviglia. L’hotel era romantico, accogliente e con vista sull’oceano. Un grazie di cuore a tutto il team: ci avete regalato ricordi che porteremo per sempre con noi.
                </div>
            </div>











        </div>
</div>

</section>

</template>

<script setup >

import peoplerew1 from '@/assets/img/about-rec/foto1.jpg'

import peoplerew2 from '@/assets/img/about-rec/foto2.jpg'

import peoplerew3 from '@/assets/img/about-rec/foto3.jpg'

</script>


<style scoped>
/*foto */

.sub-title{
    
    display: flex;
    justify-content: center;
    font-family: "DM Serif Text", serif;
    font-size: 25px;
    
    
}
.border-effect{
    text-align: center;
    width: 400px;
   
    padding-top: 20px;
    padding-bottom: 20px;
   
}
.peoplerew1{
    width: 70px;
    height: 70px;
    border-radius: 50%;
   
    margin-right: 10px;

    
}

.nome{
    font-size: 25px;
    font-weight: 700;
    padding-top: 20px;
   
}


.prima-rec{
    width: 100%;
    height: auto;
    padding: 20px;
    border-left: 1px solid black;
   margin-top: 40px;

    
}

.foto-nome{
    
    display: flex;
    width: 300px;
    gap: 20px;
    padding: 10px;
   

}

.testo2{
    font-size: 18px;
   
}

.testo2 .title{
    font-size: 22px;
    font-weight: 700;
    margin-top: 17px;
    margin-bottom: 20px;
}

@media (max-width: 768px){
.prima-rec{
   
   flex-direction: column;
   
}
.testo2{

width: 100%;
font-size: 16px;
}
 .foto-nome {
    width: 100%;
    
  }

  .nome{
    font-size: 20px;
  }

  .testo2 .title{
    
    font-size: 18px;
    margin-bottom: 20px;
    margin-top: 20px;
  }
}


@media (min-width:820px) and (max-width:1024px){
.prima-rec{
   
   flex-direction: column;
   
}
.testo2{

width: 100%;
font-size: 16px;
}
 .foto-nome {
    width: 100%;
    
  }

  .nome{
    font-size: 20px;
  }

  .testo2 .title{
    
    font-size: 18px;
    margin-bottom: 20px;
    margin-top: 20px;
  }

}

.recensioni{
    width: 100%;
    
    margin-top: 30px;
    height: auto;
    display: flex;
    justify-content: center;
 background-color:#ecfeff;
 background-color:#89CFF0 ;
 background-color:#caf0f8 ;
 background-color: #bbdefb;
 background-color:#c7eeff ;
 background-color:#AFDBF5 ;
 background-color:#F0F8FF ;
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

</style>