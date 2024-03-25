<template>
  <header class="header">
    <div class="header__container container">
      <div class="header__wrapper">
        <nuxt-icon name="burger-menu" class="header__burger" @click="showModalMenu = true"/>
        <div class="header__circle">
          <picture>
            <source media="(max-width: 1000px)" srcset="assets/images/logo-mobile.png">
            <img class="header__logo" src="assets/images/logo-desktop.png" alt="Cat shop">
          </picture>
        </div>
      </div>
      <Menu class="header__menu"/>
      <a href="tel:+71112223344" class="header__phone">
        <nuxt-icon name="phone" class="header__icon"/>
        <span class="header__number">+7 (111)-222-33-44</span>
      </a>
      <div class="header__actions">
        <div class="header__cart">
          <nuxt-icon name="cart" class="header__icon"/>
        </div>
        <Button :text="'Войти'" class="header__login"/>
      </div>
    </div>
    <ModalMenu v-if="showModalMenu === true" @close="showModalMenu = false"/>
  </header>
</template>

<script lang="ts" setup>
import Menu from "./Menu/Menu.vue";
import Button from "~/components/Button/Button.vue";
import ModalMenu from "./ModalMenu/ModalMenu.vue";
import {ref} from "@vue/reactivity";

let showModalMenu = ref<boolean>(false);
</script>

<style src="./style.scss" lang="scss" scoped/>