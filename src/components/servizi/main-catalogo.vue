<template>

   

  <div class="contenitore">
   
      <div class="sidebar-container">
    <slot name="sidebar"></slot>
      </div>



    <div class="catalogo-scrollabile">
      
       
    <slot name="catalogo"></slot>
    
    </div>
    
  </div>
  
</template>


<style scoped>

.contenitore{
width: 100%;
display: flex;
flex-direction: row;
  width: 100%;
  height: 100vh;
 
  overflow: hidden;




}
.catalogo-scrollabile{

flex: 1;
overflow-y: auto;
height: auto;

}

.sidebar-container {

  width: 350px;
  flex-shrink: 0;


  
}



@media (max-width:768px){
  .sidebar-container{
    width: 100%; /* prende tutta la larghezza in verticale */
    order: 1;     
  }

  .catalogo-scrollabile{
    width: 100%;
    order: 2;
  }

  .contenitore {
    flex-direction: column; /* da row a column */
    height: auto;           /* per adattarsi al contenuto */
  }
}





@media (min-width: 800px) and (max-width:1280px){
  .sidebar-container{
    width: 20%;
    
  }
.catalogo-scrollabile{
 
  padding: 0px;
  margin: 0;
  width: 80%;
}
  
}

</style>