


<script setup>

import aboutIntro from '@/components/about/about-intro.vue';
import navbar2 from '@/components/navbar-2.vue';
import testoIntro from '@/components/about/testo-intro.vue';
import presentazione from '@/components/about/presentazione.vue';
import perchenoi from '@/components/about/perchenoi.vue';
import staff from '@/components/about/staff.vue';
import carouselDest from '@/components/about/carousel-dest.vue';
import recensioni from '@/components/about/recensioni.vue';

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

    <presentazione></presentazione>

    <perchenoi></perchenoi>

    <staff></staff>

    <carouselDest></carouselDest>

    <recensioni></recensioni>
</template>

