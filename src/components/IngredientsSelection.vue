<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { getCategories } from '@/http/index';
import type ICategory from '../interfaces/ICategory';
import CategoryCard from "./CategoryCard.vue";
import MainButton from './MainButton.vue';


const categories = ref<ICategory[]>([]);


const bindCategories = async () => {

    categories.value = await getCategories();
}

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

onMounted(bindCategories);
</script>

<template>
    <section class="selecionar-ingredientes">
        <h1 class="cabecalho titulo-ingredientes"> Ingredientes </h1>

        <p class="paragrafo-lg instrucoes">
            Selecione abaixo os ingredientes que você quer usar nesta receita:
        </p>

        <ul class="categorias">
            <li v-for="category in categories" :key="category.name">
                <CategoryCard :category="category" @add-ingredient="addIngredient" @remove-ingredient="removeIngredient" />
            </li>
        </ul>

        <p class="paragrafo dica">
            *Atenção: consideramos que você tem em casa sal, pimenta e água.
        </p>
        <MainButton text="Buscar receitas!" />
    </section>
</template>

<style scoped>
.selecionar-ingredientes {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.titulo-ingredientes {
    color: var(--verde-medio, #3D6D4A);
    display: block;
    margin-bottom: 1.5rem;
}

.instrucoes {
    margin-bottom: 2rem;
}

.categorias {
    margin-bottom: 1rem;
    display: flex;
    justify-content: center;
    gap: 1.5rem;
    flex-wrap: wrap;
}

.dica {
    align-self: flex-start;
    margin-bottom: 3.5rem;
}

@media only screen and (max-width: 767px) {
    .dica {
        margin-bottom: 2.5rem;
    }
}
</style>