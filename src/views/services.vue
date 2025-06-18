<template>
<!---intro con immagine e testo-->
  <introServ>
    <template #navbar>
  <navbar2/>
    </template>

    <template #testo-intro>
      <inroTestoServ/>
    </template>
  </introServ>
<!---descrizione sotto intro -->
<descriptionServ>

</descriptionServ>

   <!----cambio programmazione- si passa a sidebar ocn catalogo no icone-->
<mainCatalogo>
   <template #sidebar>
    <sidebarCatalogo/>
   </template>
</mainCatalogo>
    
</template>


<script setup>
import servicesSection from '@/components/services-section.vue';
import navbar2 from '@/components/navbar-2.vue';
import introServ from '@/components/intro-serv.vue';
import inroTestoServ from '@/components/inro-testo-serv.vue';

import descriptionServ from '@/components/description-serv.vue';

import mainCatalogo from '@/components/main-catalogo.vue';
import sidebarCatalogo from '@/components/sidebar-catalogo.vue';
</script>