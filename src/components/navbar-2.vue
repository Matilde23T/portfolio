<template>
 <nav class="navbar">

<ul>
  <li>
    <router-link  to="/">
    <span class="text">Home</span>
    </router-link>
  </li>
  <li>
    <router-link  to="/about">
    <span class="text">Chi siamo</span>
    </router-link>
  </li>
  
  
  <li>
    <router-link  to="/services">
    <span class="text">Servizi</span>
    </router-link>
  </li>

  <li>
    <router-link  to="/contact">
    <span class="text">contatti</span>
    </router-link>
  </li>
</ul>
 </nav>

    
  





</template>




<style scoped >
.navbar {
  margin-top: 30px;
  width: 100%;
  color: #fff;
}

.navbar ul {
  list-style: none;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
 
  gap: 20px;
}

.navbar li {
  
  margin: 0 15px;
 
}

.navbar .text {
  color: black;
  font-size: 25px;
  font-weight: 200;
  display: inline-block;
   transition: transform 0.3s ease;
   font-family: "DM Serif Text", serif;
}

.navbar a{
  text-decoration: none;
}

.text:hover{
  transform: translateY(-7px);
}

















.drop-btn {
  background-color: #4CAF50;
  color: white;
  padding: 16px;
  font-size: 16px;
  width: 160px;
  border: none;
  cursor: pointer;
}


.dropdown {
  position: relative;
  display: inline-block;
}

.material-icons{
    margin-left: 1rem;
    padding-top: 0.5rem;
   
}
.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f9f9f9;
  min-width: 160px;
  box-shadow: 0px 8px 16px 0px rgba(0,0,0,0.2);
  z-index: 1;
}
.dropdown-content li{
  color: black;
  padding: 12px 16px;
  text-decoration: none;
  display: block;
}
.dropdown-content li:hover {background-color: #f1f1f1}

.dropdown:hover .dropdown-content {
 display: block;
}

.dropdown:hover .drop-btn {
  background-color: #3e8e41;
}

.dropdown:hover .material-icons{
    transform: rotate(180deg);
}
</style>