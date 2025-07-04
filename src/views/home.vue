<script setup>

import introHome from '@/components/home/intro-home.vue';
import navbar2 from '@/components/navbar-2.vue';
import testoIntroHome from '@/components/home/testo-intro-home.vue';
import riquadro from '@/components/home/riquadro.vue';
import novità from '@/components/home/novità.vue';
import sectionHome from '@/components/home/section-home.vue';
import footerSec from '@/components/footer-sec.vue';
import sectionContenuto from '@/components/home/section-contenuto.vue';
</script>

<template>
  <introHome>
   <template #navbar>
            <navbar2/>
        </template>

        <template #testo-intro-home>
           <testoIntroHome/>
        </template>
  </introHome>
   
  <riquadro/>
  
<sectionHome>
  <template #contenuto-riquadro>
       <sectionContenuto/>
  </template>
</sectionHome>

<novità/>
<footerSec/>
</template>

