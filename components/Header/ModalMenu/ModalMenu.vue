<template>
  <Modal class="modal-menu">
    <template #content>
      <div class="modal-menu__content">
        <Menu/>
        <a href="tel:+71112223344" class="modal-menu__phone">
          <nuxt-icon name="phone" class="modal-menu__icon"/>
          <span class="modal-menu__number">+7 (111)-222-33-44</span>
        </a>
        <Button class="modal-menu__login" :text="'Войти'" :color="'brown'" :width="'wide'"/>
      </div>
    </template>
  </Modal>
</template>

<script lang="ts" setup>
import Modal from "~/components/Modal/Modal.vue";
import Menu from "../Menu/Menu.vue";
import Button from "~/components/Button/Button.vue";
</script>

<style src="./style.scss" lang="scss" scoped/>