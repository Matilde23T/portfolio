

     <template>
    
<aboutSection>

   <template #navbar>
      <navbar2/>
   </template>

   <template #carousel-about>
<carouselAbout/>
   </template>

   <template #crl-text>
<crlAboutText/>
   </template>

   <template #carousel-mete>
      <carouselMete/>
   </template>


<template #recensioni-about>
<aboutRecensioni/>
</template>

<template #barra-marchi>
   <barraMarchi/>
</template>


<template #footer>
   <footerSec/>

</template>
</aboutSection>




   </template>



<script setup>

import navbar2 from '@/components/navbar-2.vue';
import aboutSection from '@/components/about-section.vue';
import carouselAbout from '@/components/carousel-about.vue';
import crlAboutText from '@/components/crl-about-text.vue';
import carouselMete from '@/components/carousel-mete.vue';
import aboutRecensioni from '@/components/about-recensioni.vue';
import barraMarchi from '@/components/barra-marchi.vue';

import footerSec from '@/components/footer-sec.vue';

</script>

<style scoped>


</style>