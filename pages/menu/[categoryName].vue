<template>
  <div class="menu-page">
    <h1>Меню</h1>
    <Tabs :tabs="products" :active-tab-id="getActiveCategory().id" @selected="goToCategory"/>
    <div class="menu-page__catalog">
      <ProductCard
          v-for="product in getActiveCategory().items"
          :key="product.id"
          :data="product"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import Tabs from "~/components/Tabs/Tabs.vue";
import ProductCard from "~/components/ProductCard/ProductCard.vue";
import products from "./data";
import {navigateTo, useRoute} from "nuxt/app";
import type {tCategory} from "./products";

const route = useRoute();

function goToCategory(category: tCategory) {
  navigateTo({path: `/menu/${category.path}`});
}

function getActiveCategory(): tCategory | undefined {
  return products.find((item: tCategory) => item.path === route.path.split('/')[2]);
}
</script>

<style src="./style.scss" lang="scss" scoped/>