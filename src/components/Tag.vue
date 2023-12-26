<script setup lang="ts">
import { ref } from 'vue';

const props = defineProps<{
    text: String,
    active: Boolean
}>()
</script>

<template>
    <!-- class="tag" :class="{ active: active } works as the same -->
    <span :class="['tag', { active: props.active }]">
        {{ text }}
    </span>
</template>

<style scoped>
.tag {
    display: inline-block;
    border-radius: 0.5rem;
    min-width: 4.25rem;
    padding: 0.5rem;
    text-align: center;
    transition: 0.2s;
    color: var(--cinza);
    background: var(--cinza-claro);
    font-weight: 400;
}

.tag.active {
    color: var(--creme, #FFFAF3);
    background: var(--coral, #F0633C);
    font-weight: 700;
}
</style>