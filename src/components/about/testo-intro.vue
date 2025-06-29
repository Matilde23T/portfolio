<template>
    <div class="testobox">
<div class="testo">
    <p>Ogni viaggio inizia con un sogno. 
        <br>Il nostro compito è renderlo realtà.</p>
</div>
</div>

</template>


<style scoped>

.testo{
    width: 100%;
    height: 300px;

    font-size: 66px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
     font-family: "Caprasimo", serif;
  font-weight: 400;
}
.testobox{
    width: 100%;
  
    height: 400px;
    display: flex;
    text-align: center;
    align-items: center;
    margin-top: 90px;
    bottom: 0;
}

@media (max-width:768px){
    .testo{
    width: 100%;
    height: 100px;
  
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
     font-family: "Caprasimo", serif;
  font-weight: 400;
}
.testobox{
    width: 100%;
   
    height: 150px;
    display: flex;
    text-align: center;
    align-items: center;
    margin-top: 90px;
    bottom: 0;
}
}
</style>