<script setup>

import introHome from '@/components/home/intro-home.vue';
import navbar2 from '@/components/navbar-2.vue';
import testoIntroHome from '@/components/home/testo-intro-home.vue';
import riquadro from '@/components/home/riquadro.vue';
import novità from '@/components/home/novità.vue';
import intro2Home from '@/components/home/intro2-home.vue';
import footerSec from '@/components/footer-sec.vue';

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
   
  <riquadro></riquadro>
  
<intro2Home></intro2Home>

<novità></novità>
<footerSec></footerSec>
</template>

<style>


</style>