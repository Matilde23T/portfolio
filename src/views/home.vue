<script setup>


import carousel from '@/components/carousel.vue';
import Navbar from '@/components/navbar.vue';
import homesection from '@/components/homesection.vue';
import footerSection from '@/components/footer-section.vue';


</script>

<template>
  
   <carousel>

   <template #navbar>
      <Navbar/>
   </template>

    <template #other>
      <homesection/>
    </template>

    <template #footer>
     <footerSection/>
    </template>
    
   </carousel>

</template>

<style>


</style>