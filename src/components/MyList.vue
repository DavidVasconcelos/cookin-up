<script lang="ts">
import type { PropType } from 'vue';
import Tag from './Tag.vue';


export default {
    props: {
        ingredients: { type: Array as PropType<string[]>, required: true }
    },
    components: { Tag }
}
</script>

<template>
    <section>
        <span class="subtitulo-lg sua-lista-texto">
            Sua Lista
        </span>

        <ul v-if="ingredients.length" class="ingredientes-sua-lista">
            <li v-for="ingredient in   ingredients  " :key="ingredient" class="ingrediente">
                <!-- :active="true" works as the same-->
                <Tag :text="ingredient" active />
            </li>
        </ul>

        <!-- v-else only works immediately after v-if -->
        <p v-else class="paragrafo lista-vazia">
            <img src="../assets/images/icons/lista-vazia.svg" alt="Icone de pesquisa">
            Ops, não encontramos resultados para sua combinação. Vamos tentar de novo?
        </p>
    </section>
</template>

<style scoped>
.sua-lista-texto {
    color: var(--coral, #F0633C);
    display: block;
    text-align: center;
    margin-bottom: 1.5rem;
}

.ingredientes-sua-lista {
    display: flex;
    justify-content: center;
    gap: 1rem 1.5rem;
    flex-wrap: wrap;
}

.lista-vazia {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.25rem;

    color: var(--coral, #F0633C);
    text-align: center;
}
</style>