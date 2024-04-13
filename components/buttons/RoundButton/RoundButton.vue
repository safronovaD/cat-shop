<template>
  <button class="round-button">
    <nuxt-icon :name="icon"/>
  </button>
</template>

<script lang="ts" setup>
const props = defineProps({
  icon: {
    type: String,
    required: true
  },
  size: {
    type: String,
    validator: function(value: String) {
      return ['big', 'default', 'small'].includes(value);
    },
    default: 'default',
  }
});
</script>

<style lang="scss" scoped>
  .round-button {
    width: 32px;
    height: 32px;
    text-align: center;
    color: $white;
    font-size: 16px;
    background-color: $brown;
    border-radius: 50%;
    border: none;
    cursor: pointer;
    transition: all $transition-duration linear;

    &:hover {
      background-color: $light-brown;
    }
  }
</style>