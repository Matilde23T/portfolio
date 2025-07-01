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
    <sidebarCatalogo   @filter-selected="onFilterSelected"/>
   </template>

   <template #catalogo>
    <catalogoServ  :filter="selectedFilter"/>
   </template>
  
</mainCatalogo>

<!--brochure button-->
<brochureCat></brochureCat>

<!---personalizzazione section-->
<personalizzazioneCat></personalizzazioneCat>

<!---sezione domande-->
<faqViaggi></faqViaggi>

<!---sezione galleria -->
<galleriaViaggi></galleriaViaggi>

<!---footer section-->
<footerSec></footerSec>
</template>


<script setup>
import servicesSection from '@/components/services-section.vue';
import navbar2 from '@/components/navbar-2.vue';
import introServ from '@/components/servizi/intro-serv.vue';
import inroTestoServ from '@/components/servizi/inro-testo-serv.vue';

import descriptionServ from '@/components/servizi/description-serv.vue';

import mainCatalogo from '@/components/servizi/main-catalogo.vue';
import sidebarCatalogo from '@/components/servizi/sidebar-catalogo.vue';

import catalogoServ from '@/components/servizi/catalogo-serv.vue';

import personalizzazioneCat from '@/components/servizi/personalizzazione-cat.vue';


import faqViaggi from '@/components/servizi/faq-viaggi.vue';

import galleriaViaggi from '@/components/servizi/galleria-viaggi.vue';

import footerSec from '@/components/footer-sec.vue';


import brochureCat from '@/components/servizi/brochure-cat.vue';

import { ref } from 'vue'

const selectedFilter = ref(null)

function onFilterSelected(filter) {
  selectedFilter.value = filter
}

</script>