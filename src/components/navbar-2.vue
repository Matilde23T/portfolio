<template>
  <nav>
    <ul class="sidebar" v-if="isSidebarVisible">
      <li class="close-button">
        <button @click="closeSidebar">
          <i class="fa-solid fa-xmark"></i>
        </button>
      </li>
     <li><RouterLink to="/">Home</RouterLink></li>
      <li><RouterLink to="/about">About</RouterLink></li>
      <li><RouterLink to="/services">Viaggi</RouterLink></li>
      <li><RouterLink to="/contact">Contatti</RouterLink></li>
    </ul>

    <button 
    class="menu-button"
  @click="openSidebar"
  v-if="!isSidebarVisible">
      <i class="fa-solid fa-bars"></i>
    </button>
  </nav>
 
</template>




<style scoped >
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