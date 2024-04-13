<template>
  <div class="tabs">
    <Swiper
        class="tabs__swiper"
        :initialSlide="activeTabId - 1"
        :slides-per-view="'auto'"
        :space-between="4"
        :breakpoints="{
          481: {
            spaceBetween: '7'
          }
        }"
    >
      <SwiperSlide v-for="tab in tabs" :key="tab.id" class="tabs__slide">
        <Tab :title="tab.title" :is-active="activeTabId === tab.id" @click="emits('selected', tab)"/>
      </SwiperSlide>
    </Swiper>
  </div>
</template>

<script lang="ts" setup>
import Tab from "~/components/Tabs/Tab/Tab.vue";

const props = defineProps({
  tabs: {
    type: Array,
    required: true
  },
  activeTabId: {
    type: Number
  }
})

const emits = defineEmits(['selected']);
</script>

<style lang="scss" scoped>
.tabs {
  &__swiper {
    width: calc(100% + 64px);
    margin-left: -32px;
    padding: 0 32px;

    @media (max-width: $big-tablet) {
      width: calc(100% + 48px);
      margin-left: -24px;
      padding: 0 24px;
    }

    @media (max-width: $mobile) {
      width: calc(100% + 32px);
      margin-left: -16px;
      padding: 0 16px;
    }
  }

  &__slide {
    width: fit-content;
  }
}
</style>