<template>
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
                <span class="nome">Giorgia zanatta
                    <br>
                </span>
                </div>
                <div class="testo2">
                    <p class="title"> Luna di miele alle Hawaii</p>
                   Non avremmo potuto desiderare di meglio! L’agenzia ha organizzato tutto con cura e professionalità, rendendo la nostra luna di miele semplicemente perfetta. Le spiagge di Maui, le escursioni vulcaniche a Big Island, i tramonti mozzafiato... ogni giorno era una nuova meraviglia. L’hotel era romantico, accogliente e con vista sull’oceano. Un grazie di cuore a tutto il team: ci avete regalato ricordi che porteremo per sempre con noi.
                </div>
            </div>









</template>


<script setup >

import peoplerew1 from '@/assets/img/about-rec/foto1.jpg'

import peoplerew2 from '@/assets/img/about-rec/foto2.jpg'

import peoplerew3 from '@/assets/img/about-rec/foto3.jpg'

</script>


<style scoped>

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
    width: 30%;
    height: 70%;
    
    padding: 20px;
    border-left: 1px solid black;
    
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
}


</style>