<template>
  <div id="root" class="layout">
    <div class="layout__wrapper">
      <Header/>
      <div class="layout__content container">
        <slot/>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script lang="ts" setup>
import Header from "/components/Header/Header.vue";
import Footer from "/components/Footer/Footer.vue";
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;

  &__content {
    padding-top: 80px;
    padding-bottom: 100px;

    @media (max-width: $big-tablet) {
      padding-top: 30px;
      padding-bottom: 80px;
    }

    @media (max-width: $mobile) {
      padding-top: 20px;
      padding-bottom: 28px;
    }
  }
}
</style>