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
     default: 'white'
   },
   width: {
     type: String,
     default: 'narrow'
   },
 })
</script>

<style lang="scss" scoped>
  .button {
    width: fit-content;
    background-color: $white;
    border-radius: 30px;
    padding: 12px 30px 10px 30px;
    color: $black;
    border: none;
    cursor: pointer;
    font-weight: bold;
    box-shadow: $box-shadow;
    transition: background-color $transition-duration linear;

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