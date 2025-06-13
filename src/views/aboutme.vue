

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
</aboutSection>


   </template>



<script setup>

import navbar2 from '@/components/navbar-2.vue';
import aboutSection from '@/components/about-section.vue';
import carouselAbout from '@/components/carousel-about.vue';
import crlAboutText from '@/components/crl-about-text.vue';
import carouselMete from '@/components/carousel-mete.vue';

</script>

<style scoped>


</style>