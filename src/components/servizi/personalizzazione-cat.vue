
<template>

<div class="personalizzazione">
        <div class="bio">
            <p class="title">Viaggi custom</p>
          Desideri pianificare il viaggio dei tuoi sogni con Wayfinder? Compila la pagina contatti per ottenere una consulenza online o in sede
          <br>
          <button class="contatti">
            <RouterLink to="/contact">Vai alla pagina contatti</RouterLink>
          </button>
        </div>
      </div>

</template>

<style scoped>
.personalizzazione{
    width: 100%;
    background-color:#90e0ef;
    margin-bottom: 50px;
    display: flex;
    justify-content: center;
    background-color:#F0F8FF ;
    background-color:#caf0f8 ;
    background-color:#ffeedd ;
    background-color:#ffd8be ;
    
}

.bio{
    width: 90%;
   
    font-size: 30px;
    text-align: center;
    padding: 40px 20px;
     font-family: "DM Sans", sans-serif;

}

.bio .title{
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 30px;
}

.contatti a{
text-decoration: none;
color: black;
}

.contatti a:hover{
  text-decoration: underline;
}
.contatti{
    font-size: 25px;
    padding: 20px 30px;
    margin-top: 40px;
    border-radius: 20px;
    color: black;
    border: none;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
}

@media (max-width: 768px){
  .bio{
   
   
    font-size: 18px;
    text-align: center;
    padding: 40px 20px;
     

}

.bio .title{
    font-size: 26px;
   
    margin-bottom: 20px;
}



.contatti{
    font-size: 20px;
    padding: 10px 30px;
    margin-top: 30px;
    
}
}

@media (min-width: 800px) and (max-width:1280px){
  .bio{
    width: 90%;
   
    font-size: 25px;
    
    padding: 30px 10px;
     
}

.bio .title{
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 20px;
}

.contatti{
    font-size: 25px;
    padding: 20px 30px;
    margin-top: 30px;
    
}

}
</style>
