<template>
<div class="bottone">
        <button @click="showAlert" class="btn-brochure">Scarica la nostra brochure per vedere i dettagli viaggio<i class="fa-solid fa-file-arrow-down" id="icona-dw"></i></button>
      </div>



</template>



<script setup>
//funzione nulla per brochure
function showAlert(){
  alert('sito non attivo')
}


</script>



<style scoped>

/*bottone brochure */

.bottone{
   width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
   margin-bottom: 50px;
    
}

.btn-brochure{
background-image: radial-gradient( circle farthest-corner at 10% 20%,  rgba(214,40,40,1) 0%, rgba(255,195,0,1) 90% );
 
         
         
    width: 700px;
    text-align: center;
    font-size: 23px;
     font-family: "DM Sans", sans-serif;
     font-weight: 700;
     padding: 25px 30px;
     border-radius: 20px;
     cursor: pointer;
     border: none;

}

#icona-dw{
  padding-left: 10px;
}



</style>