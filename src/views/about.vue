


<script setup>

import aboutIntro from '@/components/about/about-intro.vue';
import navbar2 from '@/components/navbar-2.vue';
import testoIntro from '@/components/about/testo-intro.vue';
import presentazione from '@/components/about/presentazione.vue';
import perchenoi from '@/components/about/perchenoi.vue';
import staff from '@/components/about/staff.vue';
import carouselDest from '@/components/about/carousel-dest.vue';
import recensioni from '@/components/about/recensioni.vue';
import marchi from '@/components/about/marchi.vue';
import footerSec from '@/components/footer-sec.vue';

</script>

<template>
    <aboutIntro>
        <template #navbar>
            <navbar2/>
        </template>
        <template #testo-intro>
            <testoIntro/>
        </template>
    </aboutIntro>

    <!--presentazione foto + testo-->
    <presentazione></presentazione>

    <!---icone e testo-->
    <perchenoi></perchenoi>

    <!---coordinatori-->
    <staff></staff>

    <!---carousel destinazioni-->
    <carouselDest></carouselDest>

    <!---recensioni clienti-->
    <recensioni></recensioni>

    <!---marchi di riferimento-->
    <marchi></marchi>

    <!--footer-->
    <footerSec></footerSec>
</template>

