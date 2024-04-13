<template>
  <div class="product-card">
    <div class="product-card__wrapper">
      <NuxtImg class="product-card__image" :src="data.image"/>
      <div class="product-card__info">
        <div class="product-card__header">
          <div class="product-card__name">{{ data.name }}</div>
          <div class="product-card__weight">{{ data.weight }}</div>
        </div>
        <div class="product-card__composition">{{ data.composition }}</div>
      </div>
    </div>
    <div class="product-card__footer">
      <div class="product-card__price">{{ `${data.price} ₽` }}</div>
      <div class="product-card__controls">
        <Button v-if="count === 0" :text="'В корзину'" :color="'brown'" @click="addToCart"/>
        <div v-else class="product-card__count">
          <RoundButton :icon="'minus'" @click="deleteFromCart"/>
          <div class="product-card__counter">{{ count }}</div>
          <RoundButton :icon="'plus'" @click="addToCart"/>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import Button from "~/components/buttons/Button/Button.vue";
import RoundButton from "~/components/buttons/RoundButton/RoundButton.vue";
import type {tProduct} from "~/pages/menu/products.ts";
import {ref} from "@vue/reactivity";

const props = defineProps<{
  data: {
    type: tProduct,
    required: true
  }
}>();

const emits = defineEmits(['add-to-cart', 'delete-from-cart']);

let count = ref<Number>(0);

function addToCart(): void {
  count.value++;
  emits('add-to-cart');
}

function deleteFromCart(): void {
  count.value = count.value === 0 ? 0: count.value - 1;
  emits('delete-from-cart');
}
</script>

<style src="./style.scss" lang="scss" scoped/>