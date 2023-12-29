<!-- setup is here -->
<script setup lang="ts">
import { ref } from 'vue';
import IngredientsSelection from './IngredientsSelection.vue';
import MyList from './MyList.vue';
import ShowRecipes from './ShowRecipes.vue';

type Page = 'IngredientsSelection' | 'ShowRecipes';

const ingredients = ref<string[]>([]);
const content = ref<Page>('IngredientsSelection');

function addIngredients(ingredient: string) {
    ingredients.value.push(ingredient);
}

function removeIngredients(ingredient: string) {
    ingredients.value = ingredients.value.filter(item => item != ingredient);
}

function navigate(page: Page) {
    content.value = page;
}
</script>

<template>
    <main class="conteudo-principal">
        <MyList :ingredients="ingredients" />

        <IngredientsSelection v-if="content === 'IngredientsSelection'" @add-ingredient="addIngredients"
            @remove-ingredient="removeIngredients" @get-recipes="navigate('ShowRecipes')" />

        <ShowRecipes v-else-if="content === 'ShowRecipes'" />
    </main>
</template>

<style scoped>
.conteudo-principal {
    padding: 6.5rem 7.5rem;
    border-radius: 3.75rem 3.75rem 0rem 0rem;
    background: var(--creme, #FFFAF3);
    color: var(--cinza, #444);

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
}

@media only screen and (max-width: 1300px) {
    .conteudo-principal {
        padding: 5rem 3.75rem;
        gap: 3.5rem;
    }
}

@media only screen and (max-width: 767px) {
    .conteudo-principal {
        padding: 4rem 1.5rem;
        gap: 4rem;
    }
}
</style>
