

<!--------
<template>


    <aside >
        


 <p>Seleziona la tipologia di viaggio:</p>
           
                <li @click="$emit('filter-selected', 'natura')">
                    <img :src="iconaNatura" class="icons">
                    Natura
                </li>
                <li @click="$emit('filter-selected', 'cultura')" >
                    <img :src="iconaCultura" class="icons">
                    Cultura
                </li>
                <li @click="$emit('filter-selected', 'avventura')" >
                    <img :src="iconaAvventura" class="icons">
                    Avventura
                </li>
                <li @click="$emit('filter-selected', 'relax')" >
                    <img :src="iconaRelax" class="icons">
                    Relax
                </li>
                <li @click="$emit('filter-selected', 'on the road')" >
                    <img :src="iconaSafari" class="icons">
                    On the road
                </li>
                <li @click="$emit('filter-selected', 'nozze')" >
                    <img :src="iconaNozze" class="icons">
                    viaggio di nozze
                </li>
                <li @click="$emit('filter-selected', 'eventi')" >
                    <img :src="iconaEvento" class="icons">
                    Eventi culturali
                </li>
               
            


     

   

        <div class="tipologie">
            
            <p>Seleziona la tipologia di viaggio:</p>
            <ul class="tipo">
                <li @click="$emit('filter-selected', 'natura')">
                    <img :src="iconaNatura" class="icons">
                    Natura
                </li>
                <li @click="$emit('filter-selected', 'cultura')" >
                    <img :src="iconaCultura" class="icons">
                    Cultura
                </li>
                <li @click="$emit('filter-selected', 'avventura')" >
                    <img :src="iconaAvventura" class="icons">
                    Avventura
                </li>
                <li @click="$emit('filter-selected', 'relax')" >
                    <img :src="iconaRelax" class="icons">
                    Relax
                </li>
                <li @click="$emit('filter-selected', 'on the road')" >
                    <img :src="iconaSafari" class="icons">
                    On the road
                </li>
                <li @click="$emit('filter-selected', 'nozze')" >
                    <img :src="iconaNozze" class="icons">
                    viaggio di nozze
                </li>
                <li @click="$emit('filter-selected', 'eventi')" >
                    <img :src="iconaEvento" class="icons">
                    Eventi culturali
                </li>
               
            </ul>
        </div>


        <div class="periodo">
            <p>Seleziona il periodo:</p>
            <ul class="stagioni">
               
                <li @click="$emit('filter-selected', 'inverno')">
                 
                 inverno

                </li> 

                <li @click="$emit('filter-selected', 'primavera')">Primavera
                </li>
                <li @click="$emit('filter-selected', 'estate')">Estate
                </li>
                <li @click="$emit('filter-selected', 'autunno')">Autunno
                </li>

                

            </ul>
        </div>

        
    </aside>
  

 

</template>
-----

<style scoped>


/*navabar*/
  
  nav {
  background-color: #3b50b2;
  box-shadow: 3px 3px 5px rgba(245, 244, 244, 0.1);
  position: relative;
}

.sidebar {
  position: fixed;
  top: 0;
  

  right: 0;
  height: 100vh;
  width: 250px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background: rgba(59, 80, 178, 0.64);
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(10px);
  padding-top: 20px;
}

.sidebar li {
  width: 100%;
  list-style: none;
}

.sidebar a {
  width: 100%;
  padding: 15px 30px;
  text-decoration: none;
  color: white;
  display: block;
}

.close-button {
  align-self: flex-end;
  padding: 10px 20px;
}

.menu-button {
  position: fixed;
  top: 20px;
  right: 20px;
  display: block;
  background: none;
  border: none;
  color: black;
  font-size: 24px;
  z-index: 1000;
  cursor: pointer;

}

@media (min-width: 801px) {
  
}
  
  



/*
aside{
    width: 350px;
    background-color: rgb(226, 210, 210);
    height: auto;
    padding-top: 30px;
    padding-left: 40px;
    padding-bottom: 50px;
     font-family: "DM Sans", sans-serif;
    


 


}

h3{
    font-size: 24px;
    margin-bottom: 20px;

}

.tipologie{
    
    margin-right: 30px;
    
}

.tipologie p{
    font-size: 18px;
    font-weight: 600;
}

.tipologie .tipo{
    list-style: none;
     margin-top: 30px;
    
     
}

.tipo .icons{
    width: 30px;
    height: 30px;
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

.periodo{
   
    
    margin-top: 40px;
     margin-right: 30px;
     
}

.periodo p{
    font-size: 18px;
    font-weight: 600;
    
}

.periodo .stagioni{
    list-style: none;
     margin-top: 30px;
    
     
}

.periodo .stagioni li{
    
    margin-top: 20px;

}


  @media (max-width:768px){
    aside{
        width: 100px;
    }
    .tipologie{
        font-size: 10px;
    }
  }


  */
</style>

---->

<template>
  <div>
    <button 
      class="menu-button" 
      @click="isSidebarVisible = true" 
      v-if="!isSidebarVisible">
      <!---<i class="fa-solid fa-bars"></i>--->
      <i class="fa-regular fa-paper-plane"></i>
      filtra
    </button>

    <aside class="catalogo-sidebar" v-show="isSidebarVisible">
      <div class="close-button">
        <i  @click="isSidebarVisible = false"class="fa-solid fa-xmark" id="close"> </i>
       
      </div>

      <div class="tipologie">
        <h3>Seleziona il tipo di viaggio:</h3>
        <ul class="tipo">
          <li @click="$emit('filter-selected', 'natura')">
            <img :src="iconaNatura" class="icons"> Natura
          </li>
          <li @click="$emit('filter-selected', 'cultura')">
            <img :src="iconaCultura" class="icons"> Cultura
          </li>
          <li @click="$emit('filter-selected', 'avventura')">
            <img :src="iconaAvventura" class="icons"> Avventura
          </li>
          <li @click="$emit('filter-selected', 'relax')">
            <img :src="iconaRelax" class="icons"> Relax
          </li>
          <li @click="$emit('filter-selected', 'on the road')">
            <img :src="iconaSafari" class="icons"> On the road
          </li>
          <li @click="$emit('filter-selected', 'nozze')">
            <img :src="iconaNozze" class="icons"> Viaggio di nozze
          </li>
          <li @click="$emit('filter-selected', 'eventi')">
            <img :src="iconaEvento" class="icons"> Eventi culturali
          </li>
        </ul>
      </div>

      <div class="periodo">
        <h3>Seleziona il periodo:</h3>
        <ul class="stagioni">
          <li @click="$emit('filter-selected', 'inverno')">Inverno</li>
          <li @click="$emit('filter-selected', 'primavera')">Primavera</li>
          <li @click="$emit('filter-selected', 'estate')">Estate</li>
          <li @click="$emit('filter-selected', 'autunno')">Autunno</li>
        </ul>
      </div>
    </aside>
  </div>
</template>


<style scoped>
.catalogo-sidebar {
  height: 100vh;
  width: 350px;
  z-index: 999;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  /*background-image: linear-gradient( 111.4deg,  rgba(37,84,199,1) 0.1%, rgba(47,111,173,1) 24.4%, rgba(100,166,227,1) 52.2%, rgba(135,206,235,1) 77.9%, rgba(125,249,255,1) 100% );*/
  /*background-color:#90e0ef ;*/
  background-color: #77bef8;
  color: #233142;
  padding: 20px;
  overflow-y: auto;
   font-family: "DM Sans", sans-serif;
 border-top-right-radius: 20px;
 border-bottom-right-radius: 20px;
background-color:#ffebeb;
background-color: #fffafa;
background-color: #ffe8d6;
background-color:	#ffe5d4 ;
background-color: #fff1eb;
}
.catalogo-sidebar .tipologie{
  margin-top: 20px;
  
  width: 300px;
  
}

.tipologie h3{
  font-size: 23px;
  font-weight: 800;
}

.periodo h3{
  font-size: 23px;
  font-weight: 800;
}
.tipologie .tipo{

list-style-type: none;

margin-top: 30px;
}
.tipologie p{
    font-size: 18px;
    font-weight: 200;
}

.tipologie .tipo{
    list-style: none;
     margin-top: 30px;
    
     
}

.tipo .icons{
    width: 30px;
    height: 30px;
    margin-right: 20px;
    

}

.tipo li{
  
    margin-top: 20px;
    display: flex;
    align-self: center;
    font-weight: 400;
    
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

.periodo{
   
    
    margin-top: 70px;
     margin-right: 30px;
     
}

.periodo p{
    font-size: 18px;
    font-weight: 600;
    
}

.periodo .stagioni{
    list-style: none;
     margin-top: 30px;
    
     
}

.periodo .stagioni li{
    
    margin-top: 20px;

}

/*btn apertura  */
.menu-button {
    /*
  position: fixed;
  */
  top: 20px;
  left: 20px;
  display: block;
  background: none;
  border: none;
  color: black;
  font-size: 24px;
  z-index: 1000;
  cursor: pointer;
  background-color: rgb(69, 208, 250);
  width: 180px;
  height: 50px;
  border-radius: 20px;
  margin-left: 30px;
  font-size: 20px;
  margin-top: 10px;
  background-image: linear-gradient(to right, #fa709a 0%, #fee140 100%);
  color: #222831;
}

.close-button {
  align-self: flex-end;
  margin-bottom: 20px;

  
}

#close{
    width: 30px;
    font-size: 30px;
  
    border: none;
    cursor: pointer;
}

@media (max-width:768px){

  .menu-button{
   
    width: 80px;
    border-radius: 10px;
    margin-left: 10px;
    height: 40px;
    font-size: 18px;

  }
  .catalogo-sidebar {
  
  width: 200px;
  padding: 15px;
  z-index: 99;
  position: absolute; /* o relative, fixed, sticky */
  z-index: 10; 
 
}


.catalogo-sidebar .tipologie{
  margin-top: 10px;
  padding-right: 10px;
  width: 200px;
  
  
}
/*titoli */
.tipologie h3{
  font-size: 17px;
  font-weight: 900;
}

.periodo h3{
  font-size: 18px;
  font-weight: 900;
}

/*elenco tipi */
.tipologie .tipo{
   
     margin-top: 30px;
    
     
}

.tipo .icons{
    width: 20px;
    height: 20px;
    
    

}

.tipo li{
  
    margin-top: 20px;
    font-weight: 500;
    
}
li {
 
  font-size: 16px;
  
}

li:hover{
    font-weight: 600;
    }



.periodo{
   
    
    margin-top: 40px;
    
     
}



.periodo .stagioni{
    list-style: none;
     margin-top: 20px;
    
     
}

.periodo .stagioni li{
    
    margin-top: 20px;
    font-size: 16px;
    font-weight: 500;

}

}



@media (min-width: 800px) and (max-width:1280px){
   .menu-button{
   
    width: 120px;
    border-radius: 10px;
    margin-left: 10px;
    height: 40px;
    font-size: 18px;
    margin-top:15px;

  }
  .catalogo-sidebar {
  
  width: 20%;
  padding: 10px;
  z-index: 99;
  position: absolute; /* o relative, fixed, sticky */
  z-index: 10; 
  height: auto;
 
}


.catalogo-sidebar .tipologie{
  margin-top: 10px;
  padding-right: 10px;
  width: 200px;
  
  
}
/*titoli */
.tipologie h3{
  font-size: 17px;
  font-weight: 900;
}

.periodo h3{
  font-size: 18px;
  font-weight: 900;
}

/*elenco tipi */
.tipologie .tipo{
   
     margin-top: 30px;
    
     
}

.tipo .icons{
    width: 20px;
    height: 20px;
    
    margin-right: 10px;
    

}

.tipo li{
  
    margin-top: 20px;
    font-weight: 500;
    
}
li {
 
  font-size: 16px;
  
}

li:hover{
    font-weight: 600;
    }



.periodo{
   
    
    margin-top: 40px;
    
     
}



.periodo .stagioni{
    list-style: none;
     margin-top: 20px;
    
     
}

.periodo .stagioni li{
    
    margin-top: 20px;
    font-size: 16px;
    font-weight: 500;

}
}
</style>








































<script setup>

import iconaCultura from '@/assets/img/icone-viaggio/cultura.png'
import iconaNozze from '@/assets/img/icone-viaggio/nozze.png'
import iconaAvventura from '@/assets/img/icone-viaggio/avventura.png'

import iconaRelax from '@/assets/img/icone-viaggio/relax.png'

import iconaEvento from '@/assets/img/icone-viaggio/eventi.png'

import iconaNatura from '@/assets/img/icone-viaggio/natura.png'
import iconaSafari from '@/assets/img/icone-viaggio/safari.png'

import {ref } from 'vue'
const isSidebarVisible = ref(false)



</script>