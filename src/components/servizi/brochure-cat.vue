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
    
    margin-top: 50px;
}

.btn-brochure{

background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
         
         
    width: 700px;
    text-align: center;
    font-size: 23px;
     font-family: "DM Sans", sans-serif;
     font-weight: 700;
     padding: 25px 30px;
     border-radius: 20px;
     cursor: pointer;
     border: none;
    outline: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

#icona-dw{
  padding-left: 10px;
}

@media (max-width: 768px){
 

 

.btn-brochure{

 
         
         
    width: 320px;
    
    font-size: 18px;
    
     font-weight: 600;
     padding: 15px 10px;
     
     

}

#icona-dw{
  padding-left: 10px;
}
}



</style>