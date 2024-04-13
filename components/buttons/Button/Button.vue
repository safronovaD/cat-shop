<template>
  <button
      :class="['button', {'button--wide': width === 'wide', 'button--brown': color === 'brown',}]"
  >
    {{ text }}
  </button>
</template>

<script lang="ts" setup>
 const props = defineProps({
   text: {
     type: String,
     required: true
   },
   color: {
     type: String,
     default: 'white',
     validator: function(value: String) {
       return ['white', 'brown'].includes(value);
     }
   },
   width: {
     type: String,
     default: 'narrow',
     validator: function(value: String) {
       return ['narrow', 'wide'].includes(value);
     }
   },
 })
</script>

<style lang="scss" scoped>
  .button {
    width: fit-content;
    background-color: $white;
    border-radius: $border-radius;
    padding: 12px 24px;
    font-size: 16px;
    color: $black;
    border: none;
    cursor: pointer;
    box-shadow: $box-shadow;
    transition: background-color $transition-duration linear;

    @media (max-width: $tablet) {
      font-size: 14px;
    }

    @media (max-width: $mobile) {
      font-size: 12px;
    }

    &:hover {
      background-color: $beige;
    }

    &--wide {
      width: 100%;
    }

    &--brown {
      background-color: $brown;
      color: $white;

      &:hover {
        background-color: $light-brown;
      }
    }
  }
</style>