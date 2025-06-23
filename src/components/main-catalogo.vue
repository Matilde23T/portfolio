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
 /*
display: flex;
height: 100vh;
  overflow: hidden;

  align-items: flex-start;
 */



display: flex;
  /* altezza totale della viewport meno eventuale header (vedi sotto) */
  height: 120vh;



}
.catalogo-scrollabile{
 width: 100%;
  display: flex;
  justify-content: center;
  
  height: 100%;

  margin-left: 0px; /* spazio per sidebar */
  flex: 1;
  overflow-y: auto;
  height: auto;
  margin-bottom: 50px;
  
}

.sidebar-container {
  /*
 width: 300px;
  flex-shrink: 0;
  position: fixed; 
  height: 100vh;
  overflow-y: auto;
  background-color: rgb(219, 51, 51); 
  border: 2px solid black;
  z-index: 10;
*/

 width: 350px;
  
  top: 80px; 
  align-self: flex-start; 
  height: calc(100vh - 80px); 
  /*overflow-y: auto; */
  
 

  /*position:sticky */
  
}

@media (max-width:768px){
  .sidebar-container{
    width: 0px;
  }
}



</style>