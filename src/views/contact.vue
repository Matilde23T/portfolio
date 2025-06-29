<script setup>
import intro from '@/components/contatti/intro.vue';
import formContact from '@/components/contatti/form-contact.vue';
import footerSec from '@/components/footer-sec.vue';
import navbar2 from '@/components/navbar-2.vue';
import introAbout from '@/components/about/about-intro.vue';



</script>

<template>
    <intro>
        <template #navbar>
            <navbar2/>
            </template>
    </intro>

<form-contact></form-contact>
<footer-sec></footer-sec>
   


<intro-about></intro-about>

</template>
