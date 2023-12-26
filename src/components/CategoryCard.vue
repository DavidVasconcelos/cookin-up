<script setup lang="ts">
import type ICategory from '../interfaces/ICategory';
import SelectableIngredient from './SelectableIngredient.vue';

const props = defineProps<{
    category: ICategory
}>()

const emit = defineEmits<{
    (e: 'addIngredient', ingredient: string): void
    (e: 'removeIngredient', ingredient: string): void
}>()

function addIngredient(ingredient: string) {
    emit('addIngredient', ingredient);
}

function removeIngredient(ingredient: string) {
    emit('removeIngredient', ingredient);
}
</script>

<template>
    <article class="categoria">
        <header class="categoria__cabecalho">
            <img :src="`/images/icons/categories_ingredients/${category.image}`" alt="" class="categoria__imagem">

            <h2 class="paragrafo-lg categoria__nome"> {{ category.name }} </h2>
        </header>

        <ul class="categoria__ingredientes">
            <li v-for="ingredient in category.ingredients" :key="ingredient">
                <SelectableIngredient :ingredient="ingredient" @add-ingredient="addIngredient"
                    @remove-ingredient="removeIngredient" />
            </li>
        </ul>
    </article>
</template>

<style scoped>
.categoria {
    width: 19.5rem;
    padding: 1rem;
    border-radius: 1rem;
    background: var(--branco, #FFF);
    box-shadow: 4px 4px 10px 0px rgba(68, 68, 68, 0.05);
    height: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;
}

.categoria__cabecalho {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
}

.categoria__imagem {
    width: 3.5rem;
}

.categoria__nome {
    text-align: center;
    color: var(--verde-medio, #3D6D4A);
    font-weight: 700;
}

.categoria__ingredientes {
    display: flex;
    justify-content: center;
    gap: 0.5rem;
    flex-wrap: wrap;
}
</style>

