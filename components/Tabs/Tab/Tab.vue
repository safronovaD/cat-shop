<template>
  <div :class="['tab', {'tab--active': isActive}]">{{ title }}</div>
</template>

<script lang="ts" setup>
const props = defineProps({
  title: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  }
})
</script>

<style lang="scss" scoped>
.tab {
  width: fit-content;
  padding: 12px 32px;
  cursor: pointer;
  text-transform: uppercase;
  font-family: 'Neucha';
  font-size: 28px;
  line-height: 114%;
  background-color: $white;
  border: 1px solid $light-brown;
  color: $light-brown;
  border-radius: $border-radius;
  transition: background-color $transition-duration linear;

  @media (max-width: $big-tablet) {
    font-size: 16px;
  }
  
  @media (max-width: $mobile) {
    font-size: 12px;
    padding: 12px 16px;
  }

  &:hover {
    background-color: $beige;
  }

  &--active {
    background-color: $brown;
    color: $white;

    &:hover {
      background-color: $light-brown;
    }
  }
}
</style>