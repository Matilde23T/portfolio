<template>
<div class="footer-sec">
    <h1>Contatti</h1>
    <div class="container">
        




        <div class="col1">
            <h3>Wayfind travel</h3>
            <p>Via Roma 123, 00100 Roma (RM)</p>
            <p>>Tel: +39 06 1234567</p>
            <p>Email: info@wayfindTRavel.it</p>
            <p>Orari: Lun–Ven 9:00–18:00</p>
        </div>



         <div class="col2">
            <h3>Link utili</h3>
            <ul class="indirizzi">
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
         </div>




         <div class="col3">
            <h3>Seguici sui social</h3>
            <ul class="social">
               <li>Instagram</li>
               <li>Facebook</li>
               <li>TikTok</li>

            </ul>
         </div>



         
    </div>
    <div class="info">
    <div class="info-srl">
            <p>Wayfinder Travel S.R.L.
Sede legale: Via Roma 123, 00100 Roma (RM)
Cod. Fiscale / P.IVA: 01234567890 – REA: RM-123456
Capitale sociale €10.000 i.v. – PEC: wayfindtravel@pec.it
© 2025 Wayfinder Travel S.R.L. – Tutti i diritti riservati</p>
         </div>
         </div>
</div>





</template>


<script setup>


</script>


<style scoped>

.footer-sec{
    width:100%;
    padding-top: 30px;
    background-color: #e4f1fe;
    background-color:#d3d6db ;
    background-color: #fab57a;
    background-color:#eaf6f6 ;
    background-color:#e3e3e3 ;
    background-color:#f7b7b7 ;
    background-color: #414a50;
    background-color: #eeeeee;
    background-color: #ddeedf;
    background-color: #99e6f2;


}

.footer-sec h1{
    width: 100%;
    text-align: center;
    font-size: 35px;
    font-family: "DM Sans", sans-serif;

}
.container {
  display: flex;
  justify-content: center;
    font-family: "DM Sans", sans-serif;
    gap: 30px;
    
}


.col1{
    
    width: 400px;
    padding: 10px 20px;
    height: auto;
   font-size: 18px;
   border-right: 1px solid black;
   
}


.col1 i{
    font-size: 18px;
    margin-right: 5px;
}

.col2{
   
    width: 300px;
    height: auto;
   
     padding: 10px ;
     font-size: 18px;
     border-right: 1px solid black;
}

.col2 ul{
    list-style: none;
   padding: 0;
   
}

.col2 li{
    padding-top: 10px;
}

.col2 a{
    text-decoration: none;
    color: black;
   
}

.col2 a:hover{
    font-weight: 700;
    color: black;
}
.col3{
    height: auto;
    width: 300px;
    
   
}

.col3 h3{
    text-align: center;
}
.col3 ul{
    list-style-type: none;
    margin-top: 15px;
   
    display: flex;
    justify-content: center;
    gap: 20px;
    cursor: pointer;
    
     
}

.col3 ul li:hover{
    font-weight: 600;
}

.info{
    margin-top: 20px;
    width: 100%;
text-align: center;
display: flex;
justify-content: center;
}
.info-srl{
   
    width: 900px;
    text-align: center;
    font-size: 18px;
     font-family: "DM Sans", sans-serif;
}

@media (max-width: 768px){
    .footer-sec h1{
        font-size: 22px;
    }
    .container{
        width: 100%;
        flex-direction: column;
        gap: 0px;
    }

    .col1, .col2{
       width: 80%;
       border-right: none;
       gap: 0px;
       font-size: 14px;
    }

    .col2{
        padding-left: 20px;
        margin-top: 0px;
    }

    .col3{
       width: 100%;
       
    }
.col3 h3{
    text-align: center;
}
.col3 ul{
       list-style-type: none;
    display: flex;
    gap: 0px;
    padding: 0;
    justify-content: center;
    gap: 20px;
    font-weight: 600;
     color: black;
    
     
     
}

    .info-srl{
        
        padding-left: 10px;
        padding-right: 10px;
        font-size: 14px;
    }
}

</style>