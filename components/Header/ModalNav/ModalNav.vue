<template>
  <Modal class="modal-nav">
    <template #content>
      <div class="modal-nav__content">
        <Nav/>
        <a href="tel:+71112223344" class="modal-nav__phone">
          <nuxt-icon name="phone" class="modal-nav__icon"/>
          <span class="modal-nav__number">+7 (111)-222-33-44</span>
        </a>
        <Button class="modal-nav__login" :text="'Войти'" :color="'brown'" :width="'wide'"/>
      </div>
    </template>
  </Modal>
</template>

<script lang="ts" setup>
import Modal from "~/components/Modal/Modal.vue";
import Nav from "../Nav/Nav.vue";
import Button from "~/components/Button/Button.vue";
</script>

<style src="./style.scss" lang="scss" scoped/>