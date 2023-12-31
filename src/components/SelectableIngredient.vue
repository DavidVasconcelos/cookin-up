<script setup lang="ts">
import { ref } from 'vue';
import Tag from './Tag.vue';

const props = defineProps<{
    ingredient: string
}>()

const selected = ref<Boolean>(false);

const emit = defineEmits<{
    (e: 'addIngredient', ingredient: string): void
    (e: 'removeIngredient', ingredient: string): void
}>()

function whenClicking(event: string) {
    selected.value = !selected.value

    if (selected.value) {
        emit('addIngredient', event)
    } else {
        emit('removeIngredient', event)
    }
}
</script>

<template>
    <!-- v-on:click="selected works as the same -->
    <button class="ingrediente" @click="whenClicking(ingredient)" :area-pressed="selected">
        <Tag :text="ingredient" :active="selected" />
    </button>
</template>

<style scoped>
.ingrediente {
    cursor: pointer;
}
</style>