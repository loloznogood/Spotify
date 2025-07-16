<script setup lang="ts">

const props = defineProps<{
    img?: string;
    name?: string;
}>();

</script>

<template>
    <div class="flex flex-col items-center">
        <img
            :src="img"
            class="rounded-full w-40 h-40 object-cover"
        />
        <p class="mt-1 text-gray-600 dark:text-white font-bold">
            {{ name }}
        </p>
        <p class="mt-1 text-gray-600 dark:text-gray-400">
            Artiste
        </p>
    </div>
</template>