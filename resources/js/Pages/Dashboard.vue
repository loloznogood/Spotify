<script setup lang="ts">
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout.vue';
import { Head } from '@inertiajs/vue3';
import Box from '@/Components/Box.vue';

</script>

<template>
    <Head title="Dashboard" />

    <AuthenticatedLayout>
        <template #header>
            <h2
                class="text-xl font-semibold leading-tight text-gray-800 dark:text-gray-200"
            >
                Dashboard
            </h2>
        </template>

        <div class="py-12">
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div
                    class="overflow-hidden bg-white shadow-sm sm:rounded-lg dark:bg-gray-800"
                >
                    <p class="p-6 text-gray-900 dark:text-gray-100 text-center font-bold text-xl">
                        Bon retour parmi nous, prêt à écouter de la musique ?
                    </p>
                </div>
            </div>
        </div>


        <div class="py-12">
            <p class="p-6 text-gray-900 dark:text-gray-100 text-center font-bold text-xl">
                Artistes populaires
            </p>
            <div class="mx-auto max-w-7xl sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                <Box img="https://www.leparisien.fr/resizer/UqMItscUsZE5clGVxFfR4I-QPx4=/932x582/cloudfront-eu-central-1.images.arcpublishing.com/leparisien/4H6TPET22NHV3CRGYCXRAHJLS4.jpg" name="Booba"></Box>
                <Box img="https://s.rfi.fr/media/display/3f84cecc-3c8b-11f0-9e9d-005056a90284/w:1280/p:4x3/Rappeur-Damso-france-congo-paris-album-rap-fran%C3%A7ais.jpg" name="Damso"></Box>
                <Box img="https://strikt.net/wp-content/uploads/2021/03/plk.jpg" name="PLK"></Box>
                <Box img="https://media.larepubliquedespyrenees.fr/15595256/1000x625/ac-dc-highway-to-hell.jpg?v=1686942580" name="AC/DC"></Box>
                <Box img="https://cdn-images.dzcdn.net/images/artist/def3283f36f1b0b1cb0463fcfe1ef5f7/1900x1900-000000-80-0-0.jpg" name="Neffex"></Box>
            </div>
        </div>
    </AuthenticatedLayout>
</template>
