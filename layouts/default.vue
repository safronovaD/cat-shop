<template>
  <div id="root" class="layout">
    <div class="layout__wrapper">
      <Header/>
      <div class="container">
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
}
</style>