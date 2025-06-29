<template>
  <nav>
    <ul class="sidebar" v-if="isSidebarVisible">


      <li class="close-button">
        <i @click="closeSidebar" 
          class="fa-solid fa-xmark"id="close"></i>
        
      </li>



     <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li><RouterLink to="/services">Viaggi</RouterLink></li>
      <li><RouterLink to="/contact">Contatti</RouterLink></li>
       <li><RouterLink to="/prova">sostituzione</RouterLink></li>
    </ul>

    <button 
    class="menu-button"
  @click="openSidebar"
  v-if="!isSidebarVisible">
      <i class="fa-solid fa-bars" id="open"></i>
    </button>
  </nav>
 
</template>




<style scoped >
 /*navabar*/
  /*
  nav {
  background-color: green;
  box-shadow: 3px 3px 5px rgba(245, 244, 244, 0.1);
  position: relative;
}

*/

.sidebar {
  position: fixed;
  top: 0;
   font-family: "DM Sans", sans-serif;
font-size: 20px;
  right: 0;
  height: 100vh;
width: 100%;
z-index: 999;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
text-align: center;


  padding-top: 20px;
  background-color: red;
}

.sidebar li {
  width: 100%;
  list-style: none;
   display: flex;
  justify-content: center;
  cursor: pointer;
}

.sidebar li:hover{
  font-weight: 700;
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

/*open btn */
.menu-button {
  position: fixed;
  top: 20px;
  right: 20px;
  display: block;
  background: none;
  border: none;
  z-index: 1000;
  cursor: pointer;
  width: 70px;
  height: 70px;
  border-radius: 50%;
  background-color: lightcoral;
  
}

#open{
   position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-size: 24px;
}

  
  /*close btn */

#close{
    width: 30px;
    font-size: 30px;
  
    border: none;
    cursor: pointer;
    color: #fff;
}



@media (max-width: 768px){
.sidebar {
  
font-size: 18px;
  
}



/*open btn */
.menu-button {
  width: 35px;
  height: 35px;
  
  
  
}

#open{
  
  font-size: 19px;
}

  
  /*close btn */

#close{
    
    font-size: 20px;
  
    
}



}


@media (min-width: 800px) and (max-width:1280px){
  .sidebar {
  
font-size: 30px;


  
}



/*open btn */
.menu-button {
  width: 45px;
  height: 45px;
  
  
  
}

#open{
  
  font-size: 24px;
}

  
  /*close btn */

#close{
    
    font-size: 30px;
  
    
}



}
</style>


<script setup>
import {ref } from 'vue'
const isSidebarVisible = ref(false)
const menuBtn = ref(true)

function openSidebar() {
  isSidebarVisible.value = true
  
}

function closeSidebar() {
  isSidebarVisible.value = false
}



</script>