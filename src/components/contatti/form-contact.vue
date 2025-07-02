<template>
<section class="contact">
<div class="form">
<div class="titolo">
    <h1>Contattaci</h1>
</div>
    <div class="riquadro">
 <form @submit.prevent="handleSubmit">


    
        <label for="name">Nome:</label>
        <br>
        <input type="text" v-model="form.name" id="name"/>
        <br>
        <div class="error">{{ error.name }}</div>
        <br>
    

    
        <label for="email">Email:</label>
        <br>
        <input type="text" v-model="form.email" id="email"/>
        <br>
        <div class="error">{{ error.email }}</div>

         <br>

        <label for="opzioni">Motivo:</label>
        <br>
        <select v-model="form.motivi" name="motivi" id="select">
         
               <option disabled value="">-- Seleziona un motivo --</option>
        <option value="catalogo">Desidero acquistare un
          <br> vostro pacchetto di viaggio</option>
        <option value="custom">Vorrei una consulenza per un viaggio custom</option>
        <option value="consulenza">Desidero avere una vostra completa consulenza</option>
        <option value="faq">Domande generali sul vostro servizio</option>
        
      </select>
      <br>

     
        <label for="messaggio">Messaggio:</label>
        <br>
        <textarea v-model="form.message" id="massage" rows="7"></textarea>
        <br>
        <div class="error">{{ error.message }}</div>
    <br>

     <button type="submit" class="btn">Invia</button>




 <!-- Popup modale -->
    <div v-if="showPopup" class="overlay">
      <div class="popup">
        <h3>Grazie per averci contattato</h3>
        <p>La vostra richiesta è stata inviata con successo, a breve il nostro staff vi contatterà tramite l'indirzzo email dato per darvi disponibilità <br>
        Grazie per aver scelto Wayfinder travel <br>
    SITO NON ATTIVO </p>
        <button @click="showPopup = false"class="btn-pop">Chiudi</button>
      </div>
    </div>






  </form>

</div>

</div>







</section>




</template>



<style scoped>
.contact{
    
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin-bottom: 70px;
}

.form{
   
    width: 70%;

}

.titolo{
    width: 100%;
   
    text-align: center;
    font-size: 30px;
    font-family: "DM Sans", sans-serif;
    padding-top: 20px;
    padding-bottom: 20px;
}
.riquadro{
    background-color: rgb(167, 233, 233);
    margin: 30px;
     font-family: "DM Sans", sans-serif;
     padding: 50px;
     border-radius: 20px;
      background-color:#F0F8FF ;
      background-color: #c9e0ef;
      background-color: #d0ecff;
}

.riquadro label{
   
    font-size: 22px;
    margin-top: 40px;
    font-weight: 600;
    
}

 .riquadro input{
    width: 100%;
    padding: 10px 15px;
    font-size: 18px;
    margin-top: 20px;
    margin-bottom: 20px;
    border-radius: 20px;
    border: none;
 }
input:focus{
    outline: none;
    border: none;
}


#select{
    
    padding: 15px 20px;
    margin-top: 20px;
    width: 100%;
    border-radius: 20px;
    font-size: 18px;
    margin-bottom: 20px;
    border: none;
     
}
textarea{
    margin-top: 20px;
    width: 100%;
    font-size: 18px;
     padding: 20px 15px;
     border-radius: 20px;
     border: none;
     margin-bottom: 20px;
font-family: "DM Sans", sans-serif;
}

textarea:focus{
    outline: none;
    border: none;
}

.error{
    color: red;
    font-size: 18px;
    margin-bottom: 10px !important;
   font-weight: 600;
    
}
.btn{
    padding: 15px 40px;
    font-size: 18px;
     font-family: "DM Sans", sans-serif;
     border-radius: 20px;
     border: none;
     margin-top: 10px;
     font-weight: 600;
     background-color: #0cc0df;
}


/*popup */




.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  text-align: center;
  width: 80%;
  box-shadow: 0 0 15px rgba(0,0,0,0.3);
   font-family: "DM Sans", sans-serif;
   font-size: 20px;
   line-height: 2;
}


.btn-pop{
    padding: 10px 15px;
    font-size: 18px;
    font-family: "DM Sans", sans-serif;
    margin-top: 20px;
    border-radius: 15px;
    border: none;
    font-weight: 600;

}


@media (max-width: 768px){
  .contact{
    
    width: 100%;
    height: auto;
    display: flex;
    justify-content: center;
    margin-bottom: 70px;
   
    
}

.form{
   
    width: 100%;
   
    margin-top: 30px;

}

.titolo{
    width: 100%;
   
   
    font-size: 20px;
   
    padding-top: 20px;
    padding-bottom: 0px;
}
.riquadro{
   
    margin: 13px;
     
     padding: 20px;
     border-radius: 20px;
}

.riquadro label{
   
    font-size: 18px;
    
    font-weight: 600;
    
}

 .riquadro input{
    
    font-size: 15px;
    margin-top: 10px;
    margin-bottom: 10px;
   
 }



#select{
    
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 15px;
    width: 90%;
 
  
    
}

option{


font-size: 12px;


}
textarea{
    margin-top: 20px;
    width: 100%;
    font-size: 15px;
     padding: 10px 15px;
     
     margin-bottom: 10px;

}



.error{
    
    font-size: 15px;
    margin-bottom: 0px !important;
   
    
}
.btn{
    padding: 8px 30px;
    font-size: 18px;
     
     
     margin-top: 0px;
     font-weight: 600;
}


/*popup */




.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  
  
  
  
 
  
   font-size: 18px;
   
}


.btn-pop{
    
    font-size: 16px;
    

}

}


@media (min-width: 800px) and (max-width:1280px){
  .contact{
    
    
   
    margin-bottom: 40px;
   
    
}

.form{
   
   width: 100%;
    background-color: red;
    margin-top: 30px;

}

.titolo{
    width: 100%;
   
   
    font-size: 23px;
   
    padding-top: 20px;
    padding-bottom: 0px;
}
.riquadro{
    background-color: rgb(167, 233, 233);
    margin: 40px;
     
     padding: 20px;
     
}

.riquadro label{
   
    font-size: 20px;
    
    font-weight: 600;
    
}

 .riquadro input{
    
    font-size: 18px;
    margin-top: 10px;
    margin-bottom: 10px;
   
 }



#select{
    
    padding-top: 10px;
    padding-bottom: 10px;
    font-size: 18px;
    width: 60%;
 
  
    
}

option{


font-size: 15px;

width: 100%;

}
textarea{
    margin-top: 20px;
    width: 100%;
    font-size: 18px;
     padding: 10px 15px;
     
     margin-bottom: 10px;

}



.error{
    
    font-size: 16px;
    margin-bottom: 0px !important;
   
    
}
.btn{
    padding: 8px 30px;
    font-size: 20px;
     
     
     margin-top: 0px;
     font-weight: 600;
}


/*popup */




.overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup {
  
  
  
  
 
  
   font-size: 20px;
   
}


.btn-pop{
    
    font-size: 18px;
    

}
}

</style>




<script setup>
import { reactive } from 'vue'
import { ref } from 'vue'
const showPopup = ref(false)

const form = reactive({
  name: '',
  email: '',
  motivi: '',
  message: ''
})

const error = reactive({
  name: '',
  email: '',
  message: ''
})

const isValidEmail = (email) => {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  return re.test(String(email).toLowerCase())
}

function handleSubmit() {
  // Reset error messages
  error.name = ''
  error.email = ''
  error.message = ''

  let valid = true

  if (form.name.trim() === '') {
    error.name = 'Il nome è obbligatorio'
    valid = false
  }

  if (form.email.trim() === '') {
    error.email = 'L’email è obbligatoria'
    valid = false
  } else if (!isValidEmail(form.email)) {
    error.email = 'Formato email non valido'
    valid = false
  }

  if (form.message.trim() === '') {
    error.message = 'Il messaggio è obbligatorio'
    valid = false
  }

  if (valid) {
    
    // chiamata api

    showPopup.value = true
  }
}



</script>